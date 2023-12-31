

function editaTask() {
  var buttonsEdit = document.querySelectorAll(".item__button-edit");
  var buttonsSave = document.querySelectorAll(".item__button-save");
  var inputsItem = document.querySelectorAll(".item__input");
  var buttonsDelete = document.querySelectorAll(".item__button-delete");
  var itemsList = document.querySelectorAll(".list__item");

    for (let i = 0; i < buttonsEdit.length; i++) {
      const edit = buttonsEdit[i];
      const save = buttonsSave[i];
      const input = inputsItem[i];
      const del = buttonsDelete[i];
      const itemList = itemsList[i];
  
      edit.addEventListener("click", function () {
        input.disabled = false;
        input.focus();
        edit.classList.remove("active");
        save.classList.add("active");
      })
  
      save.addEventListener("click", function (){
        if (!input.value == 0) {
          input.disabled = true;
          save.classList.remove("active");
          edit.classList.add("active");
        } else {
          itemList.remove();
          reexibeEmpty();
        }
      })

      input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          if (!input.value == 0) {
            input.disabled = true;
            save.classList.remove("active");
            edit.classList.add("active");
          } else {
            itemList.remove();
            reexibeEmpty();
          }
        }
      })

      del.addEventListener("click", function () {
        itemList.remove();
        reexibeEmpty();
      })
    }
}

function reexibeEmpty() {
  var itens = document.querySelectorAll(".list__item").length;
  var emptyList = document.querySelector(".list__empty");
  if (itens == 0) {
    emptyList.style.display = "block";
  }
}