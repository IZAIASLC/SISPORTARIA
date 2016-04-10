moduleApp.directive('mask', function () {

    return {

        restrict: 'A',
        link: function postLink(scope, element, attrs) {

            element.mask(attrs.mask);
        }

    };

});