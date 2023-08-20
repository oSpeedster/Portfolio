



function fotosPortfolio() {
    let itemsFotos = document.getElementById('items-fotos')
    let pagina = document.querySelector('html')
    let fundoopac = document.querySelector('.imagemfundo-opac')
    let galeriaItem01 = document.getElementById('galeria-items01')
    
    itemsFotos.style.display = 'flex'
    pagina.style.overflow = 'hidden'
    fundoopac.style.display = 'none'

    galeriaItem01.className = 'galeria-items-'
    


}

function fecharFotos() {
    let itemsFotos = document.getElementById('items-fotos')
    let pagina = document.querySelector('html')
    let fundoopac = document.querySelector('.imagemfundo-opac')
    let galeriaItem01 = document.getElementById('galeria-items01')

    itemsFotos.style.display = 'none'
    pagina.style.overflow = 'auto'
    fundoopac.style.display = 'grid'
    galeriaItem01.className = 'galeria-items'

}

