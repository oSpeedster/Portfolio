

let pf1 = {
    img0: './assets/portfolio.png',
    img1: './assets/portfolio01.png',
    img2: './assets/portfolio02.png',
    img3: './assets/portfolio03.png'
}

let pf2 = {
    img0: './assets/web-player.png',
    img1: './assets/web-player01.png',
    img2: './assets/web-player02.png',
    img3: './assets/web-player03.png'
}

let pf3 = {
    img0: './assets/venda-ingresso.png',
    img1: './assets/venda-ingresso01.png',
    img2: './assets/venda-ingresso02.png',
    img3: './assets/venda-ingresso03.png'
}

let pf4 = {
    img0: './assets/pagina-login.png',
    img1: './assets/pagina-login01.png',
    img2: './assets/pagina-login02.png',
    img3: './assets/pagina-login03.png'
}

let pf5 = {
    img0: './assets/landing-page.png',
    img1: './assets/landing-page01.png',
    img2: './assets/landing-page02.png',
    img3: './assets/landing-page03.png'
}

let functionSelect = ''

function select1() {
    functionSelect = '1'
}

function select2() {
    functionSelect = '2'
}

function select3() {
    functionSelect = '3'
}

function select4() {
    functionSelect = '4'
}

function select5() {
    functionSelect = '5'
}


function fotosPortfolio(numero) {
    let itemsFotos = document.getElementById('items-fotos')
    let pagina = document.querySelector('html')
    let fundoopac = document.querySelector('.imagemfundo-opac')
    let galeriaItem = document.getElementById(`galeria-items0${numero}`)
    

    itemsFotos.style.display = 'flex'
    pagina.style.overflow = 'hidden'
    fundoopac.style.display = 'none'

    galeriaItem.className = 'galeria-items-'

    let itemsFoto = document.getElementById('items-foto')

    let pfN = eval(`pf${parseInt(numero)}`)

}

function fecharFotos() {
    let itemsFotos = document.getElementById('items-fotos')
    let pagina = document.querySelector('html')
    let fundoopac = document.querySelector('.imagemfundo-opac')
    let galeriaItem01 = document.getElementById('galeria-items01')
    let galeriaItem02 = document.getElementById('galeria-items02')
    let galeriaItem03 = document.getElementById('galeria-items03')
    let galeriaItem04 = document.getElementById('galeria-items04')
    let galeriaItem05 = document.getElementById('galeria-items05')

    itemsFotos.style.display = 'none'
    pagina.style.overflow = 'auto'
    fundoopac.style.display = 'grid'
    galeriaItem01.className = 'galeria-items'
    galeriaItem02.className = 'galeria-items'
    galeriaItem03.className = 'galeria-items'
    galeriaItem04.className = 'galeria-items'
    galeriaItem05.className = 'galeria-items'

    let numeroFoto = document.getElementById('numero-foto')

    numeroFoto.innerHTML = 1

}

function setaEsquerda() {
    let numeroFoto = document.getElementById('numero-foto')

    numeroFoto.innerHTML = parseInt(numeroFoto.innerHTML) - 1

}

function setaDireita() {
    let numeroFoto = document.getElementById('numero-foto')

    numeroFoto.innerHTML = parseInt(numeroFoto.innerHTML) + 1
    
}


function verify() {
    let numeroFoto = document.getElementById('numero-foto')
    let seta1 = document.getElementById('seta1')
    let seta2 = document.getElementById('seta2')

    if(numeroFoto.innerHTML == 1) {
        seta1.style.display = 'none'
    } else {
        seta1.style.display = 'block'
    }

    if(numeroFoto.innerHTML == 4) {
        seta2.style.display = 'none'
    } else {
        seta2.style.display = 'block'
    }

    let itemsFoto = document.getElementById('items-foto')

    let pfN = ''

    if(functionSelect == 1) pfN = pf1 
    if(functionSelect == 2) pfN = pf2 
    if(functionSelect == 3) pfN = pf3 
    if(functionSelect == 4) pfN = pf4
    if(functionSelect == 5) pfN = pf5 


    if(numeroFoto.innerHTML == 1) {
        itemsFoto.style.backgroundImage = `url(${pfN.img0})`
    }
    if(numeroFoto.innerHTML == 2) {
        itemsFoto.style.backgroundImage = `url(${pfN.img1})`
    }
    if(numeroFoto.innerHTML == 3) {
        itemsFoto.style.backgroundImage = `url(${pfN.img2})`
    }
    if(numeroFoto.innerHTML == 4) {
        itemsFoto.style.backgroundImage = `url(${pfN.img3})`
    }

}

function loopFunction(delay, callback){
    var loop = function(){
        callback();
        setTimeout(loop, delay);
    }; loop();
};

loopFunction(1, verify)

