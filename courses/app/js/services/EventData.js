eventsApp.factory('eventData', function($resource) {/* we're creating service called eventData - note don't have a $ before service name $ indicates built-in service  -- we're creating this service by calling the factory method on the eventsApp module. what you pass into the factory method is the name of the service and the function that  returns an object that will become that service */
    var resource = $resource('/data/event/:id', {id:'@id'}, {"getAll": {method: "GET", isArray: true, params: {something: "foo"}}});
    return {
        getEvent: function(eventId) {
            return resource.get({id:eventId});
        },
        save: function(event) {
            event.id = 999;
            return resource.save(event);
        },
        getAllEvents: function() {
            return resource.query();
        }
    };
});

/* first this was written like this:
   'use strict';

    eventsApp.controller('EventController',
        function EventController($scope, eventData) {
            $scope.sortorder = 'name';
            $scope.event = eventData.event;

            $scope.upVoteSession = function(session) {
                session.upVoteCount++;
            };

            $scope.downVoteSession = function(session) {
                session.upVoteCount--;
            };
        }
    );
Note:  DON"T FORGET when create service must include it in our page - go to index.html or wherever the script files are and add: <script src="/js/services/EventData.js"></script>
   Now the sevice calls the controller to get the scope event and controller gets the data off the eventData service

    the code in EvenData.js is as follows:

    eventsApp.factory('eventData', function () {
        return {
            event: {
                name: 'blah',
                date: '1/1/17', etc.......
 Note: we REGISTERED the service with angular with the eventsApp factory call!!!

    * */