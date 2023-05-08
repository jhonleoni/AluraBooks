async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";

    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConverte = await consultaCEP.json();
        if (consultaCEPConverte.erro) {
            throw Error('CEP não existente.');
        }

            var cidade = document.getElementById('cidade');
            var logradouro = document.getElementById('endereco');
            var estado = document.getElementById('estado');
            var bairro = document.getElementById('bairro')

            cidade.value = consultaCEPConverte.localidade
            logradouro.value = consultaCEPConverte.logradouro
            estado.value = consultaCEPConverte.uf
            bairro.value = consultaCEPConverte.bairro
        
        console.log(consultaCEPConverte);
        return consultaCEPConverte;
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido.</p>`
            console.log(erro)
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));