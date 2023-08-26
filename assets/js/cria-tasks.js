var inputTask = document.querySelector("#input__box");
var buttonInputTask = document.querySelector(".input__button");

function criaTask(task) {
  // cria elementos HTML
  var itemList = document.createElement('div');
  var inputItem = document.createElement('input');
  var buttonEdit = document.createElement("button");
  var buttonSave = document.createElement("button");
  var buttonDel = document.createElement("button");

  //desabilita input do item.
  inputItem.disabled = true;

  //busca pai dos elementos
  var listOfItems = document.querySelector(".list__items");

  //adiciona classe aos elementos
  itemList.classList.add("list__item");
  inputItem.classList.add("item__input");
  buttonEdit.classList.add("item__button-edit");
  buttonSave.classList.add("item__button-save");
  buttonDel.classList.add("item__button-delete");

  //Insere textContent dos botões criados.
  buttonEdit.textContent = "edit";
  buttonSave.textContent = "save";
  buttonDel.textContent = "delete";

  listOfItems.appendChild(itemList);
  itemList.appendChild(inputItem);
  itemList.appendChild(buttonEdit);
  itemList.appendChild(buttonSave);
  itemList.appendChild(buttonDel);

  inputItem.value = task;

  editaTask();
}

function editaTask() {
  var buttonsEdit = document.querySelectorAll(".item__button-edit");
  var buttonsSave = document.querySelectorAll(".item__button-save");
  var inputsItem = document.querySelectorAll(".item__input");

  for (let i = 0; i < buttonsEdit.length; i++) {
    const edit = buttonsEdit[i];
    const save = buttonsSave[i];
    const input = inputsItem[i];

    edit.addEventListener("click", function () {
      input.disabled = false;
      input.focus();
      edit.style.display = "none";
      save.style.display = "inline-block";
    })

    save.addEventListener("click", function (){
      input.disabled = true;
      edit.style.display = "inline-block";
      save.style.display = "none";
    })
  }
}

function ocultaEmptyList () {
  var emptyList = document.querySelector(".list__empty");
  emptyList.style.display = "none";
}

buttonInputTask.addEventListener("click", function(){
  var task = inputTask.value;
  criaTask(task);
  inputTask.value = "";
  inputTask.focus();  
  ocultaEmptyList();
})