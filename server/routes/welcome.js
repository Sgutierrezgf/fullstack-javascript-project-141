// @ts-check

export default (app) => {
  app
    .get('/', { name: 'root' }, (req, reply) => {
      reply.render('welcome/index');
    })
    .get('/healthz', { name: 'healthz' }, (req, reply) => {
      reply.code(200).send('ok');
    })
    .get('/error', { name: 'error' }, () => {
      throw new Error('Rollbar test error');
    })
    .get('/protected', { name: 'protected', preValidation: app.authenticate }, (req, reply) => {
      reply.render('welcome/index');
    });
};
