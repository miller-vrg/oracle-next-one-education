(() => {
  const cardsList = document.querySelector(".cardsList");
  const agregar = document.querySelector(".btnCreate");
  const contenido = document.querySelector(".inputForm");

  const add = (evento) => {
    evento.preventDefault();

    const task = document.createElement("li");
    task.classList.add("card");

    const taskDiv = document.createElement("div");
    taskDiv.appendChild(checkComplete());

    const taskSpan = document.createElement("span");
    taskSpan.classList.add("task");
    taskSpan.innerText = contenido.value;
    taskDiv.appendChild(taskSpan);

    task.appendChild(taskDiv);
    task.appendChild(taskSpan);
    task.appendChild(checkDelete());
    cardsList.appendChild(task);
  };

  const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTest);
    return i;
  };

  const checkDelete = () => {
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", deleteBtn);
    return i;
  };

  const deleteBtn = (evento) => {
    const parent = evento.target.parentElement;
    parent.remove();
  };

  const completeTest = (evento) => {
    const elemento = evento.target;
    elemento.classList.toggle("fas");
    elemento.classList.toggle("completeIcon");
    Element.classList.toggle("far");
  };

  agregar.addEventListener("click", add);
})();
