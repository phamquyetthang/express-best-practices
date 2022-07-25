module.exports = function (plop) {
  plop.setHelper('capitalize', function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  });

  // create your generators here
  plop.setGenerator('component', {
    description: 'application create component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{name}}/controllers/{{name}}.controller.ts',
        templateFile: '.template/controller',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/interface/{{name}}.ts',
        templateFile: '.template/interface',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/models/{{name}}.model.ts',
        templateFile: '.template/model',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/router.ts',
        templateFile: '.template/router',
      },
      {
        type: 'append',
        path: 'src/components/router.ts',
        pattern: `/* ROUTER_IMPORT */`,
        template: `import {{name}}Router from './{{name}}/router';`,
      },
      {
        type: 'append',
        path: 'src/components/router.ts',
        pattern: `/* ROUTER_LIST */`,
        template: `rootRouter.use('/{{name}}', {{name}}Router);`,
      },
     
    ],
  });
}
