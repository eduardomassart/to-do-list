var inputTask = document.querySelector("#input__box");
var buttonInputTask = document.querySelector(".input__button");
var task;

function criaTask(task) {
  // cria elementos HTML
  var itemList = document.createElement('li');
  var inputItem = document.createElement('input');
  var buttonEdit = document.createElement("button");
  var buttonSave = document.createElement("button");
  var buttonDel = document.createElement("button");

  //desabilita input do item.
  inputItem.disabled = true;

  //adiciona classe aos elementos
  itemList.classList.add("list__item");
  inputItem.classList.add("item__input");
  buttonEdit.classList.add("item__button-edit");
  buttonEdit.classList.add("active");
  buttonSave.classList.add("item__button-save");
  buttonDel.classList.add("item__button-delete");

  //Insere textContent dos botões criados.
  buttonEdit.textContent = "edit";
  buttonSave.textContent = "save";
  buttonDel.textContent = "delete";

  //busca pai dos elementos
  var listOfItems = document.querySelector(".list__items");

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

function executaTask () {
  task = inputTask.value;
  if (!task.length == 0) {
    criaTask(task);
    inputTask.value = "";
    inputTask.focus();  
    ocultaEmptyList();
    editaTask();
  } else {
    alert("Por favor, insira um texto no campo para criar sua Task!")
  }
}

//eventos de criação das tasks.
buttonInputTask.addEventListener("click", function(){
  executaTask();
})

inputTask.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    executaTask();
  }
})

