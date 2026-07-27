// @ts-check

import i18next from 'i18next';

export default (app) => {
  const User = app.objection.models.user;
  const Status = app.objection.models.status;
  const Label = app.objection.models.label;
  const Task = app.objection.models.task;

  const getRelatedData = async () => {
    const [users, statuses, labels] = await Promise.all([
      User.query(),
      Status.query(),
      Label.query(),
    ]);
    return { users, statuses, labels };
  };

  app
    .get('/tasks', { name: 'tasks', preValidation: app.authenticate }, async (req, reply) => {
      const { query: filterQuery } = req;
      let query = Task.query();
      if (filterQuery.status) {
        query = query.modify('filterStatus', filterQuery.status);
      }
      if (filterQuery.executor) {
        query = query.modify('filterExecutor', filterQuery.executor);
      }
      if (filterQuery.label) {
        query = query.modify('filterLabel', filterQuery.label);
      }
      if (filterQuery.isCreatorUser) {
        query = query.modify('filterIsCreatorUser', req.user.id);
      }
      const tasks = await query.withGraphFetched('[status, creator, executor, labels]');
      const { users, statuses, labels } = await getRelatedData();
      reply.render('tasks/index', {
        tasks, users, statuses, labels, form: filterQuery,
      });
      return reply;
    })
    .get('/tasks/new', { name: 'newTask', preValidation: app.authenticate }, async (req, reply) => {
      const task = new Task();
      const { users, statuses, labels } = await getRelatedData();
      reply.render('tasks/new', {
        task, users, statuses, labels,
      });
      return reply;
    })
    .post('/tasks', { preValidation: app.authenticate }, async (req, reply) => {
      const originalData = req.body.data;
      const taskData = {
        ...originalData,
        creatorId: req.user.id,
      };

      try {
        await Task.transaction(async (trx) => {
          await Task.query(trx)
            .allowGraph('labels')
            .insertGraph(taskData, { relate: true });
        });
        req.flash('info', i18next.t('flash.tasks.create.success'));
        reply.redirect(app.reverse('tasks'));
      } catch ({ data }) {
        req.flash('error', i18next.t('flash.tasks.create.error'));
        const { users, statuses, labels } = await getRelatedData();
        reply.render('tasks/new', {
          task: originalData, users, statuses, labels, errors: data,
        });
      }
      return reply;
    })
    .get('/tasks/:id', { name: 'oneTask', preValidation: app.authenticate }, async (req, reply) => {
      const task = await Task.query()
        .withGraphFetched('[status, creator, executor, labels]')
        .findById(req.params.id);
      reply.render('tasks/show', { task });
      return reply;
    })
    .get('/tasks/:id/edit', { name: 'editTask', preValidation: app.authenticate }, async (req, reply) => {
      const task = await Task.query().withGraphFetched('[labels]').findById(req.params.id);
      const { users, statuses, labels } = await getRelatedData();
      reply.render('tasks/edit', {
        task, users, statuses, labels,
      });
      return reply;
    })
    .patch('/tasks/:id', { preValidation: app.authenticate }, async (req, reply) => {
      const { id } = req.params;
      const task = await Task.query().findById(id);
      const originalData = req.body.data;
      const taskData = {
        ...originalData,
        id: Number(id),
        creatorId: task.creatorId,
      };

      try {
        await Task.transaction(async (trx) => {
          await Task.query(trx)
            .allowGraph('labels')
            .upsertGraph(taskData, {
              relate: true,
              unrelate: true,
              noDelete: true,
            });
        });
        req.flash('info', i18next.t('flash.tasks.update.success'));
        reply.redirect(app.reverse('tasks'));
      } catch ({ data }) {
        req.flash('error', i18next.t('flash.tasks.update.error'));
        const { users, statuses, labels } = await getRelatedData();
        reply.render('tasks/edit', {
          task: { ...originalData, id }, users, statuses, labels, errors: data,
        });
      }
      return reply;
    })
    .delete('/tasks/:id', { preValidation: app.authenticate }, async (req, reply) => {
      const task = await Task.query().findById(req.params.id);

      if (Number(task.creatorId) !== Number(req.user.id)) {
        req.flash('error', i18next.t('flash.tasks.delete.error'));
        reply.redirect(app.reverse('tasks'));
        return reply;
      }

      try {
        await Task.transaction(async (trx) => {
          await task.$relatedQuery('labels', trx).unrelate();
          await task.$query(trx).delete();
        });
        req.flash('info', i18next.t('flash.tasks.delete.success'));
      } catch (e) {
        req.flash('error', i18next.t('flash.tasks.delete.error'));
      }
      reply.redirect(app.reverse('tasks'));
      return reply;
    });
};
