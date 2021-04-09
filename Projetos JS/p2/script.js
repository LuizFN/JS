function verificar() {
    var data = new Date()

    var ano = data.getFullYear()
    
    var formAno = document.getElementById('txtano')

    if(Number(formAno.value) > 0 || Number(formAno.value) < ano) {
        window.alert('ok')
    }else {
        window.alert('Erro!')
    }
}