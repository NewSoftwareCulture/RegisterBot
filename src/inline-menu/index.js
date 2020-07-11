export default {
  start: require('./chooseLang').default,
  main_eng: require('./eng/main').default,
  main_deut: require('./deut/main').default,
  actions_eng: require('./eng/action/index').default,
  actions_deut: require('./deut/action/index').default,
};