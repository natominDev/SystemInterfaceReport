// general settings
const panels = document.querySelectorAll('.panel');
const checktest = document.getElementById('isFixed');

function toggleOpen() {
    console.log('Hello');
    if(!checktest.checked) this.classList.toggle('open');
}

function toggleActive(e) {
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));


// name
const addItems = document.querySelector('.add-items');
const namePlate = document.querySelector('.name-plate');

function addItem(e){
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    namePlate.innerHTML = text;
    this.reset();
}

addItems.addEventListener('submit', addItem);


// age
const ageBar = document.getElementById('example');
const ageDisplay = document.getElementById('current-value');

const setCurrentValue = (val) => {
  ageDisplay.innerText = val;
}

const rangeOnChange = (e) =>{
  setCurrentValue(e.target.value);
}

ageBar.addEventListener('input', rangeOnChange);


// date
const dateInput = document.getElementById('date-input');
const dateDisplay = document.getElementById('date-display');

const setCurrentDate = (val) => {
  dateDisplay.innerText = val;
}

const dateChange = (e) =>{
  setCurrentDate(e.target.value);
}

dateInput.addEventListener('input', dateChange);

// confirm
const confirmInput = document.getElementById('confirm-input');

// submit
const submitInput = document.getElementById('submit-button');
const resetInput = document.getElementById('reset-button');

function doSubmit() {
    alert('Send this form!');
}

function doReset() {
    namePlate.innerHTML = "John Doe";
    ageDisplay.innerText = "1";
    dateDisplay.innerText = "";
    confirmInput.checked = false;
}