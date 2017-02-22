'use strict';

eventsApp.controller('EditProfileController',
    function EditProfileController($scope, gravatarUrlBuilder) {
        $scope.user = {};

        $scope.getGravatarUrl = function(email) {
            return gravatarUrlBuilder.buildGravatarUrl(email);
        }

    }
);

/* Note: can find this file and gravitar file in DemoApp--app--EditProfileFiles--Original--will see EditProfileController.js and GravatarUrlBuilder.js */
