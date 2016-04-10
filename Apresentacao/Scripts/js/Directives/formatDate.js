moduleApp.directive('formatDate', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {

             
            ctrl.$formatters.unshift(function (modelValue) {

                if (modelValue != undefined && modelValue != null) {

                    var date = new Date(parseInt(modelValue.substr(6)));

                    var dateFinal = date.toLocaleDateString();

                    var timeFinal = date.toLocaleTimeString();

                    return dateFinal + " " + timeFinal;

                }

            });
        }
    };
})
