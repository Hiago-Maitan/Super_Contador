function contar() {

    var inputI = window.document.getElementById('inputInicio')
    var inputF = window.document.getElementById('inputFim')
    var inputP = window.document.getElementById('inputPasso')

    var res = window.document.getElementById('resultado')

    var inicio = Number(inputI.value)
    var fim = Number(inputF.value)
    var passo = Number(inputP.value)

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = `Contando: <br>`
        if (passo <= 0) {
            alert('Passo inválido. Consderando passo 1')
            passo = 1
        }
        //Contagem Crescente
        if (inicio < fim) {
            for (var c = inicio; c <= fim; c += passo) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
            //Contagem Decrescente
        } else {
            for (var c = inicio; c >= fim; c -= passo) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3C1}`
    }
} 

