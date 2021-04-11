function calcular() {
    var txttabuada = document.getElementById('txttabuada')
    var txtfim = document.getElementById('txtfim')
    var res = document.getElementById('res')

    var tabuada = Number(txttabuada.value)
    var fim = Number(txtfim.value)

    if(tabuada >= 0 && fim >= 0) {    
        for(var cont = 1; cont <= fim; cont++) {
            var resp = tabuada * cont
            res.innerHTML += `${tabuada} x ${cont} = ${resp} <br>`
        } 
    } else {
        window.alert('Erro!!')
    }
}

function limpar() {
    res.innerHTML = ''
}
