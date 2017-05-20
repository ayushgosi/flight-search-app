export default function RoutesConfig($urlRouterProvider, $stateProvider) {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('main', {
    url: '/',
    template: require('./main/main.template.html'),
    controller: 'MainController',
    controllerAs: 'main'
  })
  .state('main.home', {
    url: 'home',
    template: require('./home/home.template.html'),
    controller: 'HomeController',
    controllerAs: 'home'
  })
  .state('main.results', {
    url: 'results',
    template: require('./results/results.template.html'),
    controller: 'ResultsController',
    controllerAs: 'results'
  })
  ;
}
