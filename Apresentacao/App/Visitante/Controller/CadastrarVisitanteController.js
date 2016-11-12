moduleApp.controller('CadastrarVisitanteController',
function CadastrarVisitanteController($scope, dataService, $routeParams, $filter ) {

    $scope.NomePagina = "Visitante";

    $scope.visitante = {
        Nome: "",
        Foto: "",
        Identidade: "",
        DataNascimento: "",
        Sexo:""
    }

    
    /**
           * Fecha o datapicker quando selecionar uma data
           */
    $scope.onSet = function (idInput) {
        var input = $(idInput);

        if (input.length && input.val()) {
            input.pickadate('close');
        }
    }

    var webCam = function () {


        var _video = null,
         patData = null;

        $scope.patOpts = { x: 0, y: 0, w: 25, h: 25 };

        // Setup a channel to receive a video property
        // with a reference to the video element
        // See the HTML binding in main.html
        $scope.channel = {};

        $scope.webcamError = false;
        $scope.onError = function (err) {
            $scope.$apply(
                function () {
                    $scope.webcamError = err;
                }
            );
        };

        $scope.onSuccess = function () {
            // The video element contains the captured camera data
            _video = $scope.channel.video;
            $scope.$apply(function () {
                $scope.patOpts.w = _video.width;
                $scope.patOpts.h = _video.height;
            });
        };

  
        $scope.makeSnapshot = function () {
            if (_video) {
                var patCanvas = document.querySelector('#snapshot');
                if (!patCanvas) return;

                patCanvas.width = _video.width;
                patCanvas.height = _video.height;
               var ctxPat = patCanvas.getContext('2d');

               var idata = getVideoData($scope.patOpts.x, $scope.patOpts.y, $scope.patOpts.w, $scope.patOpts.h);
               ctxPat.putImageData(idata, 0, 0);

                sendSnapshotToServer(patCanvas.toDataURL());
 
            }
        };

        /**
         * Redirect the browser to the URL given.
         * Used to download the image by passing a dataURL string
         */
        //$scope.downloadSnapshot = function downloadSnapshot(dataURL) {
        //    window.location.href = dataURL;
        //};

        var getVideoData = function getVideoData(x, y, w, h) {
            var hiddenCanvas = document.createElement('canvas');
            hiddenCanvas.width = _video.width;
            hiddenCanvas.height = _video.height;
            var ctx = hiddenCanvas.getContext('2d');
            ctx.drawImage(_video, 0, 0, _video.width, _video.height);
            return ctx.getImageData(x, y, w, h);
        };

        /**
         * This function could be used to send the image data
         * to a backend server that expects base64 encoded images.
         *
         * In this example, we simply store it in the scope for display.
         */
        var sendSnapshotToServer = function sendSnapshotToServer(imgBase64) {

            $scope.visitante.Foto = imgBase64.replace(/data:image\/png;base64,/g, '')
          
        };

    };

    //var fileUpload = function () {
    //    $scope.myImage = '';
    //    $scope.myCroppedImage = '';

    //    var handleFileSelect = function (evt) {
    //        var file = evt.currentTarget.files[0];
    //        var reader = new FileReader();
    //        reader.onload = function (evt) {
    //            $scope.$apply(function ($scope) {
    //                $scope.myImage = evt.target.result;
    //            });
    //        };
    //        reader.readAsDataURL(file);
    //    };
    //    angular.element(document.querySelector('#fileInput')).on('change', handleFileSelect);
    //}

    //fileUpload();
    webCam();

    $scope.visitante = {}
  
    var address = "Visitante/SalvarVisitante/";
    $scope.edicao = false;
 

  

    //Obtem os estados
   var listaEstados = function ()
    {
        var callback = function (response) {
            $scope.listaEstados = response;

        }
        dataService.get("Estado/ListarEstados/", {}, callback)
    }

   listaEstados();
     
 
    $scope.inicial = function () {
 
        //Edição
        if ($routeParams.identificador != undefined) {

            $scope.edicao = true;
  
         //   $scope.pesquisar($routeParams.Identificador);

            var callback = function (response) {
                $scope.visitante = response;
  
                $scope.visitante.DataNascimento = JsonDate($scope.visitante.DataNascimento);
              

               if($scope.visitante.Foto!=null) 
                $scope.visitante.Foto = _arrayToBase64($scope.visitante.Foto);


             //   $scope.visitante.Foto = "/Images/bullet.png"
            }
            dataService.get("Visitante/ListarVisitanteId/" + $routeParams.identificador, {}, callback)
   
        }
        
    };


    $scope.inicial();


    //Pesquisa pelo identificador
    $scope.pesquisar = function(identificador) {

        var callback = function(response) {
            $scope.visitante = response;
       
        }
        dataService.get("Morador/ListarMorador/" + identificador, {}, callback)
    };

 

 //Salva o cliente
    $scope.salvar = function () {

       
        if ($scope.visitante.Nome === undefined || $scope.visitante.Nome === '') {
          
            sweetAlert("", "Favor informar o nome do visitante", "warning");
            return;
        }
 
        if ($scope.visitante.DataNascimento === undefined || $scope.visitante.DataNascimento === '') {
            sweetAlert("", "Favor informar a data de nascimento do visitante", "warning");

            return;
        }


        if ($scope.visitante.Identidade === undefined || $scope.visitante.Identidade === '') {
            sweetAlert("", "Favor informar a identidade do visitante", "warning");

            return;
        }

        if ($scope.visitante.Estado === undefined || $scope.visitante.Estado === '') {
            sweetAlert("", "Favor informar UF da identidade do visitante", "warning");

            return;
        }

        console.log($scope.visitante.Sexo )

        if ($scope.visitante.Sexo === undefined || $scope.visitante.Sexo === '') {
            sweetAlert("", "Favor informar o sexo do visitante", "warning");

            return;
        }
           

      $scope.prosseguirCadastro();
       
 
       
    };


    //Prosseguir com o cadastro
    $scope.prosseguirCadastro = function () {

      //  var base64Image = "data:image/png;base64,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"

       
        //if ($scope.myCroppedImage != undefined) {
        //    $scope.visitante.Foto = $scope.myCroppedImage.replace(/data:image\/png;base64,/g, '');;

        //}
      
        var obj = $scope.visitante;

        obj.Estado = {Identificador:$scope.visitante.Estado.Identificador}

        if ($routeParams.identificador != undefined) {

            var callback = function (response) {
                 sweetAlert("", "Dados atualizados com sucesso", "success");

             //   Materialize.toast('Dados atualizados com sucesso', 4000, 'green');
                window.location = "#/visitante";
                
            }


            dataService.put("Visitante/AtualizarVisitante",obj, callback)

        } else {

            var callback = function (response) {
              sweetAlert("", "Dados inseridos com sucesso", "success");
               // Materialize.toast('Dados inseridos com sucesso', 4000, 'green');
                window.location = "#/visitante";
            }

            dataService.post(address, obj, callback)
        }
    };

    //Pesquisa se o cpf já está cadastrado.
    $scope.pesquisarIdentidade = function () {

 
        if ($scope.visitante.Cpf != undefined) {
  
            if (validaCpf($scope.visitante.Cpf.replace(/\D/g, ""))) {

               // sweetAlert("", "CPF Inválido!", "error");
                
               Materialize.toast('CPF Inválido!', 4000, 'red');

            }
            else {


                var callback = function (response) {
 
                    if (response == "True") {
 
                    //sweetAlert("", "CPF já está cadastrado.", "success");
                       Materialize.toast('CPF já está cadastrado', 4000, 'green');
                          $scope.visitante.Cpf = '';

                    }
                }

                if ($routeParams.identificador != undefined) {
                    //Editando
                    dataService.get("Visitante/VerificarCpfCadastrado" + "?parametro=" + $scope.visitante.Cpf + "&identificador=" + $routeParams.identificador, {}, callback);
                }
                else {
                    //Cadastrando
                    dataService.get("Visitante/VerificarCpfCadastrado" + "?parametro=" + $scope.visitante.Cpf + "&identificador=0", {}, callback);
                }
            }
        }
    };

 
});
