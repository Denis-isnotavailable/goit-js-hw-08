import throttle from "lodash.throttle";

const LOCAL_STORAGE_KEY = "feedback-form-state";
const LOCAL_STORAGE_DATA = { email: '', message: '', };

const frameEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');

startFormFullfilling(LOCAL_STORAGE_KEY, LOCAL_STORAGE_DATA, inputEl, textareaEl);

frameEl.addEventListener('input', throttle(saveDataToLocaleStorage, 500));
document.addEventListener('submit', clearForm);



function startFormFullfilling(LOCAL_STORAGE_KEY, LOCAL_STORAGE_DATA, inputEl, textareaEl) {
    const inputData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));    

    if (inputData?.email) {    
        inputEl.value = inputData.email;
        LOCAL_STORAGE_DATA.email = inputData.email;
    }

    if (inputData?.message) {
        textareaEl.value = inputData.message;
        LOCAL_STORAGE_DATA.message = inputData.message;
    }
}

function saveDataToLocaleStorage(e) {    
    if (e.target.getAttribute('name') === 'email'){    
        LOCAL_STORAGE_DATA.email = e.target.value;
    }
    if (e.target.getAttribute('name') === 'message') {
        LOCAL_STORAGE_DATA.message = e.target.value;
    }
    
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(LOCAL_STORAGE_DATA));
}

function clearForm(e) {
    e.preventDefault();    

    console.log(LOCAL_STORAGE_DATA);

    e.target.reset();
    localStorage.clear(LOCAL_STORAGE_KEY);
}