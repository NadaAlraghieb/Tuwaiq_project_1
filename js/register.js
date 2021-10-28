//button product

$('#addOne').click(function () {
  // console.log('inside addOne function');
  let qty = parseInt($('#qty').text());
  qty += 1;
  $('#qty').text(qty);
  // console.log(qty);
})


$('#subOne').click(function () {
  let qty = parseInt($('#qty').text());
  qty -= 1;
  if (qty < 1)
    qty = 1;
  $('#qty').text(qty);
})
$(document).ready(function () {
  $('.mdb-select').materialSelect();
  $('.select-wrapper.md-form.md-outline input.select-dropdown').bind('focus blur', function () {
    $(this).closest('.select-outline').find('label').toggleClass('active');
    $(this).closest('.select-outline').find('.caret').toggleClass('active');
  });
});


//for register

function store() {

  let name = $('#userName').val();
  let email = $('#email').val();
  let password = $('#password').val();
  let rePassword = $('#rePassword').val();


  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);
  localStorage.setItem('rePassword', rePassword);

 
}


function check() {

  // stored data from the register-form
  let name = $('#userName').val();
  let email = $('#email').val();
  let password = $('#password').val();
  let rePassword = $('#rePassword').val();


  localStorage.getItem('name', name);
  localStorage.getItem('email', email);
  localStorage.getItem('password', password);
  localStorage.getItem('rePassword', rePassword);
  

}
//for login
function st() {

  email = $('#email').val();
 
  password = $('#password').val();
 


 localStorage.gitItem('email',email);
 localStorage.gitItem('password', password);

}
