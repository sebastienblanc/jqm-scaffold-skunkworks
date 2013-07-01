'use strict';

angular.module('jqmscaffoldskunkworks')
    .directive('jqmMarkup', function () {
        return function($scope, el) {
            $scope.$watch( function() {
                el.trigger("create");
                /*
                 * Remove the focus on disabled buttons.
                 * Important to prevent halos from appearing on the Save button in disabled state.
                 */ 
                $("button:disabled").parent().removeClass("ui-focus");
                $("button").button("refresh");
            });
        };
    });
