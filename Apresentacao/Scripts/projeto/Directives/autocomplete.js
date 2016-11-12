//moduleApp.directive('autoComplete', function ($http) {

//    return {

//        restrict: 'A',
//        scope: {

//            url: '@',
//            ngModel: '='
//        },
//        require: 'ngModel',


//        link: function(scope, element, attrs) {

//            element.autocomplete({
//                source: function (request,response) {
//                    $http({
//                        method: 'jsonp', url: scope.url, params: {q:request.term}

//                    }).success(function(data) {
                       
//                        response(data);
//                    })
//                },

//                minLength: 3,
//                select: function (event,ui) {
                   
//                    scope.$apply(function () {
//                        scope.ngModel = ui.item.value;

//                    });
//                }

//            })

//        }

//    };

//});

//moduleApp.directive('autoComplete', function ($timeout) {
//    return function (scope, iElement, iAttrs) {
//        iElement.autocomplete({
//            source: scope[iAttrs.uiItems],
//            minLength: 3,
//            select: function () {
//                $timeout(function () {
//                    iElement.trigger('input');
//                }, 0);
//            }
            
//        });
//    };
//});
 
var uiAutocomplete = function () {
    return {
        require: '?ngModel',
        link: function (scope, element, attrs, controller) {
            var getOptions = function () {
                return angular.extend({}, scope.$eval(attrs.uiAutocomplete));
            };
            var initAutocompleteWidget = function () {
                var opts = getOptions();
                element.autocomplete(opts);
                if (opts._renderItem) {
                    element.data("autocomplete")._renderItem = opts._renderItem;
                }
            };
            // Watch for changes to the directives options
            scope.$watch(getOptions, initAutocompleteWidget, true);
        }
    };
};
moduleApp.directive('uiAutocomplete', [uiAutocomplete]);