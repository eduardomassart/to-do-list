var inputTask = document.querySelector("#input__box");
var buttonInputTask = document.querySelector(".input__button");
var listOfItems = document.querySelector(".list__items");
var emptyList = document.querySelector(".list__empty");
var task;
var redimensionou;

function criaTask() {
  // cria elementos HTML
  var itemList = document.createElement('li');
  var inputItem = document.createElement('input');
  var buttonEdit = document.createElement("button");
  var buttonSave = document.createElement("button");
  var buttonDel = document.createElement("button");

  //desabilita input do item.
  inputItem.disabled = true;

  //adiciona classe aos elementos.
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

  //aloca elementos em sua tag pai.
  listOfItems.appendChild(itemList);
  itemList.appendChild(inputItem);
  itemList.appendChild(buttonEdit);
  itemList.appendChild(buttonSave);
  itemList.appendChild(buttonDel);

  //Atribui texto do input principal ao input da task e prepara input principal para nova task.
  inputItem.value = inputTask.value;
  inputTask.value = "";
  inputTask.focus();  
}

function ocultaEmptyList() {
  emptyList.style.display = "none";
}

function executaTask() {
  task = inputTask.value;
  if (!task.length == 0) {
    criaTask();
    ocultaEmptyList();
    editaTask();
  } else {
    alert("Por favor, insira um texto no campo para criar sua Task!")
  }
}

//eventos de criação das tasks.
buttonInputTask.addEventListener("click", function(){
  executaTask();
  handleResize();
})

inputTask.addEventListener("keydown", function (event){
  if (event.key === "Enter") {
    executaTask();
    handleResize();
  }
})