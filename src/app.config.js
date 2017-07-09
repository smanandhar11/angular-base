import configureRoutes from './routes/routes';

export default ($httpProvider,
                $locationProvider,
                $stateProvider,
                $urlRouterProvider) => {
    'ngInject';

configureRoutes($stateProvider);
}