const buttonTrailer = document.querySelector(".button-trailer");
const buttonCloseModal = document.querySelector(".close-modal")
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;
function toggleModal(){
  modal.classList.toggle('open')
}



buttonTrailer.addEventListener("click", () => {
  toggleModal()
  video.setAttribute("src", linkDoVideo);
})

/*fechar modal*/


buttonCloseModal.addEventListener('click',() =>{
  toggleModal()
  video.setAttribute("src", "")
} )









