const about_us_images = document.querySelectorAll(".us_imgs img");
const img_popup = document.querySelector("#img_popup");
const large_img = document.querySelector("#img_popup img");

for (let img of about_us_images) {
    img.addEventListener("click", imagePopup);
}

function imagePopup() {
    let image_url = this.src;

    img_popup.style.display = "flex";
    large_img.src = image_url;
}

window.onclick = function (event) {
    if(event.target == img_popup) {
        img_popup.style.display = "none";
    }
};