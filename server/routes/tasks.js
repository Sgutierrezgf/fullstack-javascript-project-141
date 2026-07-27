// @ts-check

import i18next from 'i18next';

export default (app) => {
  const User = app.objection.models.user;
  const Status = app.objection.models.status;
  const Task = app.objection.models.task;

  const getRelatedData = async () => {
    const [users, statuses] = await Promise.all([
      User.query(),
      Status.query(),
    ]);
    return { users, statuses };
  };

  app
    .get('/tasks', { name: 'tasks', preValidation: app.authenticate }, async (req, reply) => {
      const tasks = await Task.query().withGraphFetched('[status, creator, executor]');
      reply.render('tasks/index', { tasks });
      return reply;
    })
    .get('/tasks/new', { name: 'newTask', preValidation: app.authenticate }, async (req, reply) => {
      const task = new Task();
      const { users, statuses } = await getRelatedData();
      reply.render('tasks/new', { task, users, statuses });
      return reply;
    })
    .post('/tasks', { preValidation: app.authenticate }, async (req, reply) => {
      const originalData = req.body.data;
      const taskData = {
        ...originalData,
        creatorId: req.user.id,
      };

      try {
        const validTask = await Task.fromJson(taskData);
        await Task.query().insert(validTask);
        req.flash('info', i18next.t('flash.tasks.create.success'));
        reply.redirect(app.reverse('tasks'));
      } catch ({ data }) {
        req.flash('error', i18next.t('flash.tasks.create.error'));
        const { users, statuses } = await getRelatedData();
        reply.render('tasks/new', {
          task: originalData, users, statuses, errors: data,
        });
      }
      return reply;
    })
    .get('/tasks/:id', { name: 'oneTask', preValidation: app.authenticate }, async (req, reply) => {
      const task = await Task.query()
        .withGraphFetched('[status, creator, executor]')
        .findById(req.params.id);
      reply.render('tasks/show', { task });
      return reply;
    })
    .get('/tasks/:id/edit', { name: 'editTask', preValidation: app.authenticate }, async (req, reply) => {
      const task = await Task.query().findById(req.params.id);
      const { users, statuses } = await getRelatedData();
      reply.render('tasks/edit', { task, users, statuses });
      return reply;
    })
    .patch('/tasks/:id', { preValidation: app.authenticate }, async (req, reply) => {
      const { id } = req.params;
      const task = await Task.query().findById(id);
      const originalData = req.body.data;
      const taskData = {
        ...originalData,
        creatorId: task.creatorId,
      };

      try {
        const validTask = await Task.fromJson(taskData);
        await task.$query().patch(validTask);
        req.flash('info', i18next.t('flash.tasks.update.success'));
        reply.redirect(app.reverse('tasks'));
      } catch ({ data }) {
        req.flash('error', i18next.t('flash.tasks.update.error'));
        const { users, statuses } = await getRelatedData();
        reply.render('tasks/edit', {
          task: { ...originalData, id }, users, statuses, errors: data,
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
        await task.$query().delete();
        req.flash('info', i18next.t('flash.tasks.delete.success'));
      } catch (e) {
        req.flash('error', i18next.t('flash.tasks.delete.error'));
      }
      reply.redirect(app.reverse('tasks'));
      return reply;
    });
};