/* window.onload = function() {
    document.getElementById('input-disabled').disabled = true;
    document.getElementById('input-readonly').readOnly = true;
}

  <input type="text" id="input-disabled">
  <input type="text" id="input-readonly">

*/

// Opção para ativar e desativar edição no input da task item.
var inputTask = document.querySelector("#input__box");
var buttonInputTask = document.querySelector(".input__button");

function criaTask(task) {
  // cria elementos HTML
  var itemList = document.createElement('div');
  var inputItem = document.createElement('input');
  var buttonEdit = document.createElement("button");
  var buttonSave = document.createElement("button");
  var buttonDel = document.createElement("button");

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
}

function ocultaEmptyList () {
  var emptyList = document.querySelector(".list__empty");
  emptyList.style.display = "none";
}

buttonInputTask.addEventListener("click", function(){
   var task = inputTask.value;
   criaTask(task);
   ocultaEmptyList();
})