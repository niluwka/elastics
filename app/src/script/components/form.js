try {
  let inputDate = document.querySelector('.book__form-input');
let inputTime = document.querySelector('.book__form-time');
inputDate.onfocus = function () {
    document.getElementById('form-date').type = 'date'
}
inputTime.onfocus = function () {
    document.getElementById('form-time').type = 'time'
}
inputDate.onblur = function () {
    document.getElementById('form-date').type = 'text'
}
inputTime.onblur = function () {
    document.getElementById('form-time').type = 'text'
}  
} catch (e) {
    console.log(e);
}
