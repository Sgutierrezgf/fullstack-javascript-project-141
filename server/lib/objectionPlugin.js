// @ts-check

import fp from 'fastify-plugin';
import Knex from 'knex';
import { Model } from 'objection';

const objectionPlugin = async (fastify, options) => {
  const knexConfig = options.knexConfig;
  if (!knexConfig) {
    throw new Error('knexConfig is required');
  }

  const knex = Knex(knexConfig);
  Model.knex(knex);

  const objection = {
    knex,
    models: {},
  };

  if (Array.isArray(options.models)) {
    options.models.forEach((model) => {
      if (model?.tableName && model?.QueryBuilder) {
        const key = model.name.replace(/^\w/, (c) => c.toLowerCase());
        objection.models[key] = model;
      }
    });
  }

  if (fastify.objection) {
    throw new Error('objection plugin has already been registered');
  }

  fastify.decorate('objection', objection);
  fastify.addHook('onClose', async () => {
    await knex.destroy();
  });
};

export default fp(objectionPlugin, {
  name: 'objection',
});
