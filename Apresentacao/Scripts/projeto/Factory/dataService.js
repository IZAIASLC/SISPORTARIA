moduleApp.factory('dataService', function ($http) {
  
    return {
       
        get: function (url,data, callback) {
           // Loading.showAll();
          
            return $http.get(url, data)
                .success(function (data) {
                    if (data.toString().indexOf("Acesso negado") != -1) {
                       // Modal.accessDenied();
                     //   Loading.hideAll();
                    } else {
                        callback(data);
                       
                       // Loading.hideAll();
                    }
                }).error(function (data, status, headers, config) {

                    if (status == '401') {
                        sweetAlert("", 'Usuário sem permissão de acesso', 'error');
                        Loading.hideAll();
                    }
                    else {
                        console.log("error" + headers);
                        Loading.hideAll();
                        sweetAlert("", 'Ocorreu um erro inesperado, por gentileza entre em contato com suporte técnico.', 'error');
                        return status;
                    }
                });
        }

        ,

        post: function (url, data, callback) {
            Loading.showAll();
            return $http.post(url, data)
                .success(function (data, status) {
                    callback(data);
                    Loading.hideAll();

                }).error(function (data, status, headers, config) {

                    if (status == 401) {
                        sweetAlert("", 'Usuário sem permissão para essa operação', 'warning');
                        Loading.hideAll();
                        return;
                    }


                    var x=0;
                    var errors = [];
                    for (var key in data.ModelState) {

                        for (var i = 0; i < data.ModelState[key].length; i++) {
                             if(x>0)
                            errors.push(data.ModelState[key][i]);
                        }
                        x++;
                    }

                    /*

                    console.log('---------- HTTP POST ERROR -------------------------------------------------------------------');
                    console.log('HEADER: (Status: ' + status + ')')
                    console.log(JSON.stringify(headers(), null, 4));
                    console.log('\n');
                    console.log('DATA:');
                    console.log(JSON.stringify(data, null, 4));
                    console.log('\n');
                    console.log('CONFIG:');
                    console.log(JSON.stringify(config, null, 4));
                    console.log('----------------------------------------------------------------------------------------------');

                    */


                    sweetAlert("", errors.join(''), 'error');
                    Loading.hideAll();
                    return status;
                });


            ;

        }
        ,

        put: function (url, data, callback) {
            Loading.showAll();
            return $http.put(url, data)
                .success(function (data, status) {
                    callback(data);
                    Loading.hideAll();

                }).error(function (data, status, headers, config) {
                    /*  console.log('---------- HTTP POST ERROR -------------------------------------------------------------------');
                    console.log('HEADER: (Status: ' + status + ')')
                    console.log(JSON.stringify(headers(), null, 4));
                    console.log('\n');
                    console.log('DATA:');
                    console.log(JSON.stringify(data, null, 4));
                    console.log('\n');
                    console.log('CONFIG:');
                    console.log(JSON.stringify(config, null, 4));
                    console.log('----------------------------------------------------------------------------------------------');*/
                    sweetAlert("", 'Ocorreu um erro inesperado, por gentileza entre em contato com suporte técnico.', 'error');
                    Loading.hideAll();
                    return status;
                });
            ;

        }
    }




});