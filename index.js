
angular

.module('app', ['ui.router','ngStorage'])

      
      
.config(routesConfig)

function routesConfig($stateProvider, $urlRouterProvider, $locationProvider,$httpProvider) {

    $stateProvider

        .state('andy',{
            url : '/andy',
            template: "<andycomponent></andycomponent>",

        })

         .state('reporte',{
            url : '/reporte',
            template: "<reportecomponent></reportecomponent>",

        })





        $urlRouterProvider.otherwise('/andy');


    host = 'http://localhost:8000/'


    //$locationProvider.html5Mode(true);

    $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function($q, $location, $localStorage) {
    return {
        'request': function (config) {
            config.headers = config.headers || {};
            if ($localStorage.token) {
                config.headers.Authorization = 'Bearer ' + $localStorage.token;
            }
            return config;
        },
        'responseError': function(response) {
            if(response.status === 401 || response.status === 403) {

                $location.path('/redirect');
            }
            return $q.reject(response);
        }
    };
    }]);


}