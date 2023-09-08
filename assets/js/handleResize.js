function colocaImgButton() {
    var buttonsEdit = document.querySelectorAll(".item__button-edit");
    var buttonsSave = document.querySelectorAll(".item__button-save");
    var buttonsDel = document.querySelectorAll(".item__button-delete"); 

    var buttonAdd = document.querySelector(".input__button");
    var imgAdd = document.createElement("p");
    imgAdd.classList.add("imgAdd");
    imgAdd.classList.add("active");
    imgAdd.setAttribute("role", "img");
    buttonAdd.appendChild(imgAdd);

    if (buttonsEdit.length > 0) {
        buttonsEdit.forEach(function (button) {
            var imgEdit = document.createElement("p");
            imgEdit.classList.add("imgEdit");
            imgEdit.classList.add("active");
            imgEdit.setAttribute("role", "img");
            button.appendChild(imgEdit); 
        })

        buttonsSave.forEach(function (button) {
            var imgSave = document.createElement("p");
            imgSave.classList.add("imgSave");
            imgSave.classList.add("active");
            imgSave.setAttribute("role", "img");
            button.appendChild(imgSave); 
        })

        buttonsDel.forEach(function (button) {
            var imgDel = document.createElement("p");
            imgDel.classList.add("imgDel");
            imgDel.classList.add("active");
            imgDel.setAttribute("role", "img");
            button.appendChild(imgDel); 
        })
    }
}

function colocaTexto () {
    var buttonsEdit = document.querySelectorAll(".item__button-edit");
    var buttonsSave = document.querySelectorAll(".item__button-save");
    var buttonsDel = document.querySelectorAll(".item__button-delete");

    var buttonAdd = document.querySelector(".input__button");
    buttonAdd.textContent = "Add task";

    if (buttonsEdit.length > 0) {
        buttonsEdit.forEach(function (button) {
            button.textContent = "Edit";
        })

        buttonsSave.forEach(function (button) {
            button.textContent = "Save";
        })

        buttonsDel.forEach(function (button) {
            button.textContent = "Delete";
        })
    }
}

function handleResize() {
    redimensionou = window.innerWidth;
        
    var buttonsItem = document.querySelectorAll("button");
    if(redimensionou < 600) {
        buttonsItem.forEach(function (botao) {
            botao.textContent = "";
        })
        colocaImgButton();
    } 
    if (redimensionou >= 600 ) {
        buttonsItem.forEach(function (botao) {
            botao.textContent = "";
        })
        colocaTexto();
    }
}

window.addEventListener("resize", handleResize);

handleResize();