function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados do campo "Ano de nascimento" e digite novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') //radio
        var idade = ano - Number(fano.value)

        //Criação de imagem dinâmica
        var img = document.createElement('img') //criação da tag de imagem
        img.setAttribute('id', 'foto')/*criação de um id 
        Parecido com <img id="foto">
        */
        //verificar gênero
        var gênero = ""
        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/bebem.png')
            } else if (idade < 21) {
                //adolescente
                img.setAttribute('src', 'imagens/jovemm.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adultom.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosom.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/bebef.png')
            } else if (idade < 21) {
                //adolescente
                img.setAttribute('src', 'imagens/jovemf.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adultof.png')
            } else {
                img.setAttribute('src', 'imagens/idosaf.png')
                //idoso
            }
        }
        res.style.textAlign = 'center' //alinhar texto pelo JS
        res.innerHTML = (`Detectamos um(a) ${gênero} com ${idade} anos.`)
        res.appendChild(img) //chama a imagem depois do html
    }
}