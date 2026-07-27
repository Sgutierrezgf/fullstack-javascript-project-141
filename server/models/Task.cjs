// @ts-check

const BaseModel = require('./BaseModel.cjs');

module.exports = class Task extends BaseModel {
  static get tableName() {
    return 'tasks';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'statusId', 'creatorId'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1 },
        description: { type: 'string' },
        statusId: { type: 'integer', minimum: 1 },
        creatorId: { type: 'integer' },
        executorId: { type: ['integer', 'null'] },
      },
    };
  }

  static get relationMappings() {
    return {
      status: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: './Status.cjs',
        join: {
          from: 'tasks.statusId',
          to: 'statuses.id',
        },
      },
      creator: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: './User.cjs',
        join: {
          from: 'tasks.creatorId',
          to: 'users.id',
        },
      },
      executor: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: './User.cjs',
        join: {
          from: 'tasks.executorId',
          to: 'users.id',
        },
      },
      labels: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: './Label.cjs',
        join: {
          from: 'tasks.id',
          through: {
            from: 'tasks_labels.taskId',
            to: 'tasks_labels.labelId',
          },
          to: 'labels.id',
        },
      },
    };
  }

  static modifiers = {
    filterStatus(query, statusId) {
      query.where('statusId', statusId);
    },

    filterExecutor(query, executorId) {
      query.where('executorId', executorId);
    },

    filterLabel(query, labelId) {
      query.joinRelated('labels').where('labels.id', labelId);
    },

    filterIsCreatorUser(query, userId) {
      query.where('creatorId', userId);
    },
  };

  $parseJson(json, opt) {
    const parsed = super.$parseJson(json, opt);
    const labelIds = [].concat(parsed.labels || [])
      .filter((l) => l !== '' && l != null)
      .map((l) => ({ id: Number(l.id ?? l) }));

    return {
      ...parsed,
      statusId: Number(parsed.statusId) || undefined,
      executorId: Number(parsed.executorId) || null,
      creatorId: parsed.creatorId ? Number(parsed.creatorId) : undefined,
      labels: labelIds,
    };
  }
};
