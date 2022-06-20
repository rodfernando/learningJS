// função será carregada no onload do body no HTML

var data = new Date()

function carregar() {
    // ligação do JS com as DIV's do html
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    //objeto data
    var hora = data.getHours()
    var minute = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minute} horas`
    //condições 
    if (hora >= 0 && hora < 12) {
        //Dia
        img.src = 'imagens/manha.png'
        document.body.style.background = '#77c5f9'
    } else if (hora >= 12 && hora < 18) {
        //Tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#99afc4'
    } else {
        //Noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#1e2532'
    }
}

function mostrarAno() {
    var txtrodape = window.document.getElementById('rodape')
    var ano = data.getFullYear()
    var mes = data.getMonth() + 1
    var dia = data.getDay()

    txtrodape.innerHTML = `${dia}-${mes}-${ano}`
}
