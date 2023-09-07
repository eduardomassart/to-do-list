function colocaImgButton() {
    var buttonsEdit = document.querySelectorAll(".item__button-edit");
    var buttonsSave = document.querySelectorAll(".item__button-save");
    var buttonsDel = document.querySelectorAll(".item__button-delete"); 

    if (buttonsEdit.length > 0) {
        buttonsEdit.forEach(function (button) {
            var imgEdit = document.createElement("p");
            imgEdit.classList.add("imgEdit");
            imgEdit.classList.add("active");
            button.appendChild(imgEdit); 
        })

        buttonsSave.forEach(function (button) {
            var imgSave = document.createElement("p");
            imgSave.classList.add("imgSave");
            imgSave.classList.add("active");
            button.appendChild(imgSave); 
        })

        buttonsDel.forEach(function (button) {
            var imgDel = document.createElement("p");
            imgDel.classList.add("imgDel");
            imgDel.classList.add("active");
            button.appendChild(imgDel); 
        })
    }
}

function colocaTexto () {
    var buttonsEdit = document.querySelectorAll(".item__button-edit");
    var buttonsSave = document.querySelectorAll(".item__button-save");
    var buttonsDel = document.querySelectorAll(".item__button-delete");  

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
        
    var buttonsItem = document.querySelectorAll(".list__item button");
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