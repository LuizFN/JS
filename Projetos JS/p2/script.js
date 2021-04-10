function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    
    var formAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(Number(formAno.value) > 0 && Number(formAno.value) < ano) {
        var formSex = document.getElementsByName('sex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        if(formSex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade <= 12) {
                //criança
            } else if(idade > 12 && idade <= 19 ) {
                //adolecente
            } else if(idade > 19 && idade <= 30) {
                //jovem
            } else if(idade > 30 && idade <= 60 ) {
                //aduto
            } else {
                //idoso
                var imagem = document.getElementById('foto')
                imagem.src = "img/idoso.jpg"
            }
        } else if(formSex[1].checked) {
            genero = 'Mulher'
        }
        res.innerHTML = `${genero} com ${idade} anos!`
    }else {
        window.alert('Erro!')
    }
}