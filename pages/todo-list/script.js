const d = document;

// Place the corresponding date.
const dateNumber = d.querySelector('.date-number');
const dateMonth = d.querySelector('.date-month');
const dateYear = d.querySelector('.date-year');
const dateName = d.querySelector('.date-name');

const date = new Date();

dateNumber.textContent = date.toLocaleString("en", { day: "numeric" });
dateName.textContent = date.toLocaleString("en", { weekday: "long" });
dateMonth.textContent = date.toLocaleString("en", { month: "short" });
dateYear.textContent = date.toLocaleString("en", { year: "numeric" });

// We managed to create a task on the to-do list.
const $form = d.getElementById("form");
const $organize = d.getElementById('form-organize');
const $todoBox = d.querySelector('.todo-box');

$form.addEventListener('submit', e => {
  e.preventDefault();
  const { value } = e.target.formInput;
  if(!value) return;
  const divTag = d.createElement('div');
  divTag.textContent = value;
  divTag.classList.add('todo');
  divTag.addEventListener('click', done);

  const spanTag = d.createElement('span');
  spanTag.innerHTML = `<i class='todo-icon bx bx-trash'></i>`;
  spanTag.addEventListener('click', trash);
  divTag.appendChild(spanTag);

  $todoBox.prepend(divTag);

  e.target.reset();
})

// Function to delete a task.
const trash = (e) => e.target.parentNode.parentNode.remove(e.target);


// Function to change the status of the task (done or to do).
const done = (e) => e.target.classList.toggle('done');

// We create a function to order the tasks in such a way,
// that the tasks to be done are placed first and the ones already done last.
const order = () => {
  let doneArr = [];
  let todoArr = [];
  const $todoArrAll = d.querySelectorAll('.todo');

  $todoArrAll.forEach(el => {
    if (el.classList.contains('done')) {
      doneArr.push(el)
    } else {
      todoArr.push(el)
    };
  });
    
  return [...todoArr, ...doneArr]
};

const orderAll = () => {
  order().forEach(el => $todoBox.appendChild(el))
};

$organize.addEventListener('click', orderAll);

