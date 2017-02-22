'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])/* creating module called eventsApp - if this array were empty means that this module does not depend on any other modules; we're capturing the module into a global variable called eventsApp - this will make it easy to create objects inside the module, like controllers and services */
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/newEvent',
            {
                templateUrl:'templates/NewEvent.html',
                controller: 'EditEventController'
            });
        $routeProvider.when('/events',
            {
                templateUrl: 'templates/EventList.html',
                controller: 'EventListController'
            });
        $routeProvider.when('/event/:eventId',
            {
                templateUrl: 'templates/EventDetails.html',
                controller: 'EventController',
                resolve: {
                    event: function($route, eventData) {
                        return eventData.getEvent($route.current.pathParams.eventId).$promise;
                    }
                }
            });
        $routeProvider.when('/sampleDirective',
            {
                templateUrl: 'templates/SampleDirective.html',
                controller: 'SampleDirectiveController'
            })
        $routeProvider.otherwise({redirectTo: '/events'});

        $locationProvider.html5Mode(true);

    });
