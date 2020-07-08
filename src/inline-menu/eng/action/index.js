const actions = (bot) => {
  require('./About').default(bot);
  require('./BasicsAndTutorial').default(bot);
  require('./ContactOrHelp').default(bot);
  require('./RandomResult').default(bot);
  require('./RegistrationStatus').default(bot);
};

export default actions;