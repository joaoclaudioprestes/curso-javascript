function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        img.src = 'img/fotomanha.png'
        document.body.style.background = '#D4D0B3'
    } else if (hora >= 13 && hora < 18) {
        img.src = 'img/fototarde.png'
        document.body.style.background = '#F7B46F'
    } else {
        img.src = 'img/fotonoite.png'
        document.body.style.background = '#546776'
    }
}
