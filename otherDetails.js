

let phoneTextArea = document.getElementById('localStorageTextAreaPhone');
let phoneSetLocalStorage = document.getElementById('PhoneSet');
let phoneDelLocalStorage = document.getElementById('PhoneDel');
let phoneCheckLocalStorage = document.getElementById('PhoneCheck');



//Text Area
phoneTextArea.addEventListener('click', function (e) {
  navigator.clipboard.writeText(phoneTextArea.innerHTML);

});



//Controls

//Set Item
phoneSetLocalStorage.addEventListener('click', function (e) {
    localStorage.phone = phoneTextArea;
    // localStorage.phone = {}
    let PhoneTextAreaSelection = phoneTextArea.innerHTML;
    localStorage.setItem('phone', `${PhoneTextAreaSelection}`);
    console.log(PhoneTextAreaSelection)
  
  // localStorage.setItem('phone', phoneTextArea.innerHTML);
});

//Del Item
phoneDelLocalStorage.addEventListener('click', function (e) {
  localStorage.removeItem('phone')
});

//Check Item
phoneCheckLocalStorage.addEventListener('click', function (e) {
  phoneTextArea.innerHTML = localStorage.phone
});