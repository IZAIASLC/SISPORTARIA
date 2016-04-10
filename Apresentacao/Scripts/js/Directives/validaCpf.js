moduleApp.directive('validaCpf', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
        
            scope.$watch(attrs.ngModel, function (newVal, oldVal) {
  
               

          //  ctrl.$setValidity('cpf', CPF.isValid(newVal));
            });

            
        }
    };
});