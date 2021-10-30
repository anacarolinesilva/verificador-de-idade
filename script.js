function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 13) {
                // CRIANÇA
                img.setAttribute('src', 'criancaboy.png')
            } else if (idade < 26) {
                // JOVEM
                img.setAttribute('src', 'menino.png')
            } else if (idade < 60) {
                // ADULTO
                img.setAttribute('src', 'adulto.png')
            } else {
                // IDOSO
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 13) {
                // CRIANÇA
                img.setAttribute('src', 'criancagirl.png')
            } else if (idade < 26) {
                // JOVEM
                img.setAttribute('src', 'menina.png')
            } else if (idade < 60) {
                // ADULTA
                img.setAttribute('src', 'adulta.png')
            } else {
                // IDOSA
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}