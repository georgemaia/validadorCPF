console.log('Javascript carregado!');

function validaCPF(cpf) {

    if(cpf.length != 11) {
        return false;
    } else {

        var numeros = cpf.substring(0,9);   // pega os 9 primeiro dígitos
        var digitos = cpf.substring(9);   // pega apenas a partir do 9 digito
        
        var soma = 0;
        for( var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }
        console.log(soma);

        return true;
    }
}

function validacao() {
    console.log('Iniciando a validação do CPF...');

    var cpf = document.getElementById('cpf_digitado').value;
    
    var resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }
}