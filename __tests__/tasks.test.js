// @ts-check

import _ from 'lodash';
import fastify from 'fastify';

import init from '../server/plugin.js';
import {
  getFakeTask,
  prepareTasksData,
  signInApp,
} from './helpers/index.js';

describe('test tasks CRUD', () => {
  let app;
  let knex;
  let models;
  let sessionCookie;

  beforeAll(async () => {
    app = fastify({
      exposeHeadRoutes: false,
      logger: { target: 'pino-pretty' },
    });
    await init(app);
    knex = app.objection.knex;
    models = app.objection.models;
  });

  beforeEach(async () => {
    await knex.migrate.latest();
    await prepareTasksData(app);
    sessionCookie = await signInApp(app);
  });

  it('index', async () => {
    const request = {
      method: 'GET',
      url: app.reverse('tasks'),
    };

    const responseNoAuth = await app.inject(request);
    expect(responseNoAuth.statusCode).toBe(302);

    const responseWithAuth = await app.inject({
      ...request,
      cookies: sessionCookie,
    });
    expect(responseWithAuth.statusCode).toBe(200);
  });

  it('new', async () => {
    const request = {
      method: 'GET',
      url: app.reverse('newTask'),
    };

    const responseNoAuth = await app.inject(request);
    expect(responseNoAuth.statusCode).toBe(302);

    const responseWithAuth = await app.inject({
      ...request,
      cookies: sessionCookie,
    });
    expect(responseWithAuth.statusCode).toBe(200);
  });

  it('create', async () => {
    const params = _.omit(getFakeTask(), 'creatorId');
    const request = {
      method: 'POST',
      url: app.reverse('tasks'),
      payload: {
        data: params,
      },
    };

    await app.inject(request);
    const noExistingTask = await models.task.query().findOne({ name: params.name });
    expect(noExistingTask).toBeUndefined();

    await app.inject({
      ...request,
      cookies: sessionCookie,
    });
    const newTask = await models.task.query().findOne({ name: params.name });
    expect(newTask).toMatchObject({
      ...params,
      creatorId: 2,
    });
  });

  it('show', async () => {
    const id = 1;
    const request = {
      method: 'GET',
      url: app.reverse('oneTask', { id }),
    };

    const responseNoAuth = await app.inject(request);
    expect(responseNoAuth.statusCode).toBe(302);

    const responseWithAuth = await app.inject({
      ...request,
      cookies: sessionCookie,
    });
    expect(responseWithAuth.statusCode).toBe(200);
  });

  it('edit', async () => {
    const id = 1;
    const request = {
      method: 'GET',
      url: app.reverse('editTask', { id }),
    };

    const responseNoAuth = await app.inject(request);
    expect(responseNoAuth.statusCode).toBe(302);

    const responseWithAuth = await app.inject({
      ...request,
      cookies: sessionCookie,
    });
    expect(responseWithAuth.statusCode).toBe(200);
  });

  it('update', async () => {
    const params = _.omit(getFakeTask(), 'creatorId');
    const id = 1;
    const taskExisting = await models.task.query().findById(id);
    const request = {
      method: 'PATCH',
      url: app.reverse('oneTask', { id }),
      payload: {
        data: params,
      },
    };

    await app.inject(request);
    const taskExistingSame = await models.task.query().findById(id);
    expect(taskExisting).toMatchObject(taskExistingSame);

    await app.inject({
      ...request,
      cookies: sessionCookie,
    });
    const taskUpdate = await models.task.query().findById(id);
    expect({ ...taskExisting, ...params }).toMatchObject(taskUpdate);
  });

  it('delete', async () => {
    const id = 1;
    const request = {
      method: 'DELETE',
      url: app.reverse('oneTask', { id }),
    };

    const taskExisting = await models.task.query().findById(id);
    expect(taskExisting).not.toBeUndefined();

    await app.inject(request);
    expect(await models.task.query().findById(id)).not.toBeUndefined();

    await app.inject({
      ...request,
      cookies: sessionCookie,
    });
    const taskDelete = await models.task.query().findById(id);
    expect(taskDelete).toBeUndefined();
  });

  afterEach(async () => {
    await knex.migrate.rollback();
  });

  afterAll(async () => {
    await app.close();
  });
});
