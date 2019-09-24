
var gallery, link, photos, width; 

function ShowAll() {
    
    if (width <= 425) {

        if (!gallery.classList.contains("showed-all")) {

            ChangeDisplayAtIMGs("inline-block");

            gallery.classList.add("showed-all");

            if (this.innerHTML == "Показать все фото") {
                this.innerHTML = "Скрыть все фото";
            }
            else {
                this.innerHTML = "Показать все фото";
            }
        }
        else {

            ChangeDisplayAtIMGs("none");

            gallery.classList.remove("showed-all");
        }
    }        
}

function ChangeDisplayAtIMGs(displayValue) {

    for (let i = 2; i < photos.length; i++) {
            
        photos[i].style.display = displayValue;
    }
}  

window.onload = () => {

    width = window.innerWidth - 23;
    gallery = document.querySelector(".photos");
    link =  document.querySelector(".photos > a");
    photos = document.querySelectorAll(".photos > div > img");

    if (width <= 425) {

        ChangeDisplayAtIMGs("none");

        if (gallery.classList.contains("showed-all")) {

            gallery.classList.remove("showed-all");
        }
    }

    link.addEventListener("click", ShowAll);
}

window.onresize = () => {

    width = window.innerWidth - 23;
    
    if (width <= 425) {

        ChangeDisplayAtIMGs("none");
    }
    else {

        ChangeDisplayAtIMGs("inline-block");

        if (gallery.classList.contains("showed-all")) {

            gallery.classList.remove("showed-all");
        }
    }
}