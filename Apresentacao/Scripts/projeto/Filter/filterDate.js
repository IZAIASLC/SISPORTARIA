moduleApp.filter('filterDate',
    function ($filter) {
        return function (input, format) {
            if (input != null && input.length > 5) {
                return $filter('date')(parseInt(input.substr(6)),format);
            }
            return "";
        };
    });