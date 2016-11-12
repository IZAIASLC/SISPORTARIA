moduleApp.directive('validaCnpj', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            scope.$watch(attrs.ngModel, function (newVal, oldVal) {
                ctrl.$setValidity('cnpj', CNPJ.isValid(newVal));
            });
        }
    };
});



