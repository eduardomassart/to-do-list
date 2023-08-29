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
        edit.style.display = "none";
        save.style.display = "inline-block";
      })
  
      save.addEventListener("click", function (){
        if (!input.value == 0) {
            input.disabled = true;
            edit.style.display = "inline-block";
            save.style.display = "none";
        } else {
            itemList.remove();
        }
      })

      del.addEventListener("click", function () {
        itemList.remove();
      })
    }
}