
function mascara_telefone(obj) {
    v_obj = obj
    v_fun = mascara_tel
    setTimeout("exec_mascara()", 1)
}
function exec_mascara() {
    v_obj.value = v_fun(v_obj.value)
}
function mascara_tel(valor) {
    valor = valor.replace(/\D/g, "");             //Remove tudo o que não é dígito
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return valor;
}