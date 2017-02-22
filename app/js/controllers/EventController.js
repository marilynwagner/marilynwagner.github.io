'use strict'; /* should always be in strict mode */

eventsApp.controller('EventController', /*note that .controller is function here and we're passing in name of it "EventController' second parameter is the function itself */
    function EventController($scope, eventData, $routeParams, $route) {/* they receive empty scope in and then populate the scope with the info needed by the view */
        $scope.sortorder = 'name';/* now remember to add the script file to the page we added index.html <script src="/js/controllers/EventController.js"></script> must be added AFTER app.js */
        $scope.event = $route.current.locals.event
        $scope.reload = function() {
            $route.reload();
        }

        $scope.upVoteSession = function(session) {
          session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
          session.upVoteCount--;
        }

        $scope.scrollToSession = function() {
            $anchorScroll();
        }
    }
);

/*Note: code from video looked like this:
  'use strict';

   eventsApp.controller('EventController',
        function EventController($scope) {

        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2013,
            time: '10:30 am',
            location: {
                address: 'Google Headqurters',
                city: 'mountain View',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: '1 hr',
                    level: 'Advanced',
                    abstract: 'In this session you will learn the ins and outs of directives!',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'John Doe',
                    duration: '30 mins',
                    level: 'Introductory',
                    abstract: 'In this session will take a closer look at scopes...',
                    upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Jane Doe',
                    duration: '2 hrs',
                    level: 'Intermediate',
                    abstract: 'Controllers are the beginning of....',
                    upVoteCount: 0
                }
        ]

    }
    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    };
    $scope.downVoteSession = function(session) {
        session.upVoteCount--;
    };

}

Note: the upVoteSession functions are simple - don't take in session id, but session we want to upload.  This happens with the ng-click="downVoteSession(session) - whenever click will pass the session which is defined in ng-repeat="session in event.sessions
  It's great - with angular we don't have to put a session id on the data attribute, then looking it up in order for the code to manipulate the right session.  this is what's great about angular - work directly with data, and not passing around ids....
   */