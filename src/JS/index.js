const botaoTrailer = document.querySelector(".botao-trailer")
const modal = document.querySelector(".modal")
const botaoFecharModal = document.querySelector(".fechar-modal")
const video = document.getElementById("video")
const linkDoVideo = video.src

function altenarModal(){

    modal.classList.toggle("aberto");

}


botaoTrailer.addEventListener("click", () => {
    console.log("clicou no botçao veja o trailer ");

    altenarModal();
    video.setAttribute("src",linkDoVideo)
} )

botaoFecharModal.addEventListener("click", () => {
    console.log("clicou no botçao veja o trailer ");

    altenarModal();
    video.setAttribute("src","")
} )



