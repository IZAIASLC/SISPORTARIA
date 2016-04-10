var Modal = {

    close: function (component) {
        if (component) {
            $('#' + component).modal('hide');
        } else {
            $('.modal').modal('hide');
        }

    },

    simple: function (text, title) {
        $('#myModalSimple').remove();

        if (!title) {
            title = 'Atenção';
        }
        var html = '<div class="modal hide fade" id="myModalSimple">';
        html += '<div class="modal-header">';
        html += '   <a href="#" onclick="Modal.close(\'myModalSimple\')" class="close">&times;</a>';
        html += '   <h3>' + title + '</h3>';
        html += '</div>';
        html += '<div id="modal-body" class="modal-body">';
        html += '   <p>' + text + '</p>';
        html += '</div>';
        html += '</div>';

        $('body').append(html);

        $('#myModalSimple').modal('show');
    },

    load: function (url, title, callback, width, height) {
        $('#myModal').remove();

        if (width) var htmlWidth = "style='width:" + width + "px;'";
        if (height) var htmlHeight = "style='height:" + height + "px;'";

        var html = '<div ' + htmlWidth + htmlHeight + ' class="modal scroll-none" id="myModal">';
        html += '<div class="modal-header">';
        html += '   <button class="close" onclick="Modal.close(\'myModal\')" data-dismiss="modal">×</button>';
        html += '   <h3>' + title + '</h3>';
        html += '</div>';
        html += '<div id="modal-body" class="modal-body">';
        html += '   <p>Processando…</p>';
        html += '</div>';
        html += '</div>';

        $('body').append(html);

        Load.execute('#myModal .modal-body', url, null, callback);

        $('#myModal').modal('show');
    },

    accessDenied: function () {

        $('#myModalSimple').remove();

        var title = "Acesso Negado";

        var body = '<span class="text-error"><strong>Esta ação está bloqueada para acesso para este usuário.</strong>' +
                                    '<br>Logue-se com outro usuário para acesso.</span>';

        if (!title) {
            title = 'Atenção';
        }
        var html = '<div class="modal hide fade" id="myModalSimple">';
        html += '<div class="modal-header">';
        html += '   <a href="#" onclick="Modal.close(\'myModalSimple\')" class="close">&times;</a>';
        html += '   <h3><img width="50px;" src="/Publico/img/icons/accessDenied.jpg"> ' + title + '</h3>';
        html += '</div>';
        html += '<div id="modal-body" class="modal-body">';
        html += '   <p>' + body + '</p>';
        html += '</div>';
        html += '</div>';

        $('body').append(html);

        $('#myModalSimple').modal('show');
    }, 
    accessDeniedToSystem: function () {
        var title = '<h2 class="text-error"><span class="glyphicon glyphicon-remove-sign"></span> Erro</h2>';
        var msg = '<div class="text-error">Este usuário não possui permissão de acesso.</div>';
        bootbox.dialog({
            message: msg,
            title: title,
            closeButton: false
        });
    },

    closeEscapeLoad: function (url, title, callback, width, height) {
        $('#myModal').remove();

        if (width) var htmlWidth = "style='width:" + width + "px;'";
        if (height) var htmlHeight = "style='height:" + height + "px;'";

        var html = '<div ' + htmlWidth + htmlHeight + ' class="modal" id="myModal">';
        html += '<div class="modal-header">';
        //html += '   <button class="close" onclick="Modal.close(\'myModal\')" data-dismiss="modal">×</button>';
        html += '   <h3>' + title + '</h3>';
        html += '</div>';
        html += '<div id="modal-body" class="modal-body">';
        html += '   <p>Processando…</p>';
        html += '</div>';
        html += '</div>';

        $('body').append(html);

        Load.execute('#myModal .modal-body', url, null, callback);

        $('#myModal').modal({ 'show': true, 'keyboard': false, 'backdrop': 'static' });

        return '#myModal';
    },
    closeEscape: function () {

    },
    information: function () {

    },
    //growl: function (text, type) {
    //    $('.sticky-queue').removeClass('sticky-alert');
    //    $('.sticky-queue').removeClass('sticky-success');
    //    $('.sticky-queue').removeClass('sticky-info');

    //    if (type == 'error') {
    //        $.sticky('<li class="icon-exclamation-sign"></li></span> <b>' + text + '</b>');
    //        $('.sticky-queue').addClass('sticky-alert');
    //    }

    //    if (type == 'success') {
    //        $.sticky('<li class="icon-ok-circle "></li></span> <b>' + text + '</b>');
    //        $('.sticky-queue').addClass('sticky-success');
    //    }

    //    if (!type) {
    //        $.sticky('<li class="icon-ok-circle "></li></span> <b>' + text + '</b>');
    //        $('.sticky-queue').addClass('sticky-info');
    //    }
    //},

    alert: function (title, text, type) {

        switch (type) {
            case true: var css = "anim success"; break;
            case false: var css = "anim error"; break;
            default: var css = "anim info"; break;
        }

        new Messi(text, { titleClass: css, title: title, buttons: [{ id: 0, label: 'OK', val: 'Y', center: true }], callback: function (val) { }, modal: true });

    },
    growl: function (text, type) {
        var title = '';
        var msg = '';
        var valid = false;
        if (type == 'error') {
            title = '<h2 class="text-error"><span class="glyphicon glyphicon-ok-sign"></span> Erro</h2>';
            msg = '<div class="text-error">' + text + '</div>';
            valid = true;
        }

        if (type == 'sucesso') {
            title = '<h2 class="text-success"><span class="glyphicon glyphicon-ok-sign"></span> Sucesso</h2>';
            msg = '<div class="text-success">' + text + '</div>';
            valid = true;
        }

        if (type == 'info') {
            title = '<h2 class="text-info"><span class="glyphicon glyphicon-ok-sign"></span> Informação</h2>';
            msg = '<div class="text-info">' + text + '</div>';
            valid = true;
        }

        if (type == 'alert') {
            title = '<span class="text-warning"><span class="glyphicon glyphicon-ok-sign"></span> Aviso</span>';
            msg = '<div class="text-warning">' + text + '</div>';
            valid = true;
        }

        if (type == 'help') {
            title = '<h2 class="text-help"><span class="glyphicon glyphicon-ok-sign"></span> Ajuda</h2>';
            msg = '<div class="text-help">' + text + '</div>';
            valid = true;
        }

        if (valid == false) {
            this.alert('Sistema de Portaria', text);
            return;
        }

        bootbox.dialog({
            message: msg,
            title: title,
            buttons: {
                main: {
                    label: "OK",
                    className: "btn-primary"
                }
            }
        });

    },

    growlWithCallback: function (text, type, C) {
        var title = '';
        var msg = '';
        var valid = false;
        if (type == 'error') {
            title = '<h2 class="text-error"><span class="glyphicon glyphicon-ok-sign"></span> Erro</h2>';
            msg = '<div class="text-error">' + text + '</div>';
            valid = true;
        }

        if (type == 'sucesso') {
            title = '<h2 class="text-success"><span class="glyphicon glyphicon-ok-sign"></span> Sucesso</h2>';
            msg = '<div class="text-success">' + text + '</div>';
            valid = true;
        }

        if (type == 'info') {
            title = '<h2 class="text-info"><span class="glyphicon glyphicon-ok-sign"></span> Informação</h2>';
            msg = '<div class="text-info">' + text + '</div>';
            valid = true;
        }

        if (type == 'alert') {
            title = '<h2 class="text-warning"><span class="glyphicon glyphicon-ok-sign"></span> Aviso</h2>';
            msg = '<div class="text-warning">' + text + '</div>';
            valid = true;
        }

        if (type == 'help') {
            title = '<h2 class="text-help"><span class="glyphicon glyphicon-ok-sign"></span> Ajuda</h2>';
            msg = '<div class="text-help">' + text + '</div>';
            valid = true;
        }

        if (valid == false) {
            this.alert('Sistema de Portaria', text);
            return;
        }

        bootbox.dialog({
            message: msg,
            title: title,
            buttons: {
                main: {
                    label: "OK",
                    className: "btn-primary",
                    callback: function () {
                        C(true);
                    }
                }
            }
        });
    },

    /**
     * warning
     *
     * Exibe uma mensagem de alerta (Atenção!), e chama um callback quando o usuário
     * clica em uma das opções.
     *
     * @param {string} text Texto da mensagem.
     * @param {callback} C Callback 
     * @param {string} labelMain  Texto do botão confirmar, ou "Confirmar" se não informado.
     * @param {string} labelCancel Texto do botão cancelar, ou "Cancelar" se não informado.
     *
     * @return {void}
     */
    warning: function (text, C, labelMain, labelCancel) {
        $tr = $(this).parent().parent().parent();
        var title = '<h2 class="text-warning"><span class="glyphicon glyphicon-exclamation-sign"></span> Aviso</h2>';
        var msg = '<div class="text-warning">' + text + '</div>';
        bootbox.dialog({
            message: msg,
            title: title,
            buttons: {
                main: {
                    label: labelMain ? "Sim" : "Confirmar",
                    className: "btn-primary",
                    callback: function () {
                        C(true);
                    }
                },
                cancelar: {
                    label: labelCancel ? "Não" : "Cancelar",
                    className: "btn",
                    callback: function () {
                        bootbox.hideAll()
                        C(false);
                    }
                }
            }
        });
    },
    info: function (text, C) {
        var destiny = $(this).attr('href');
        var title = '<h2 class="text-info"><span class="glyphicon glyphicon-info-sign"></span> Informação</h2>';
        var msg = '<div class="text-info">' + text + '</div>';
        bootbox.dialog({
            message: msg,
            title: title,
            buttons: {
                main: {
                    label: "Sim",
                    className: "btn-primary",
                    callback: function () {
                        C(true);
                    }
                },
                cancelar: {
                    label: "Não",
                    className: "btn",
                    callback: function () {
                        bootbox.hideAll()
                        C(false);
                    }
                }
            }
        });
    },
    infoText: function (text, C) {
        title = '<h2 class="text-info"><span class="glyphicon glyphicon-info-sign"></span> Informação</h2>';
        msg = '<div class="text-info">' + text + '</div>';
        bootbox.dialog({
            message: msg,
            title: title,
            buttons: {
                main: {
                    label: "OK",
                    className: "btn-primary",
                    callback: function () {
                        bootbox.hideAll();
                    }
                },
            }
        });
    },
    infoError: function (text, C) {
        var title = '<h2 class="text-error"><span class="glyphicon glyphicon-remove-sign"></span> Erro</h2>';
        var msg = '<div class="text-error">' + text + '</div>';
        bootbox.dialog({
            message: msg,
            title: title,
            buttons: {
                main: {
                    label: "OK",
                    className: "btn-primary",
                    callback: function () {
                        bootbox.hideAll();
                    }
                }
            }
        });
    },
    infoWithLabel: function (text, C, label) {
        title = '<h2 >' + label + '</h2>';
        msg = '<div class="row-fluid"><textarea name="obsGeral" class="span12" rows="5" readonly="readonly">' + text + '</textarea></div>';
        bootbox.dialog({
            message: msg,
            title: title,
            buttons: {
                main: {
                    label: "OK",
                    className: "btn-primary",
                    callback: function () {
                        bootbox.hideAll();
                    }
                },
            }
        });
    },
    /**
     * showMessage
     *
     * Exibe uma mensagem com o componente Modal. Caso seja informado um callback
     * ele será usado, se não, será desconsiderado.
     *
     * @param {object} {type:'error|sucesso|info|alert|help', text: ''}
     * @param {callback} C Callback 
     *
     * @return {void}
     */
    showMessage: function (message, callback) {
        var C = callback || function () { };
        this.growlWithCallback(message.text, message.type, C);
    }
};