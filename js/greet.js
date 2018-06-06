var textField = document.querySelector(".addName");
//var English = document.querySelector(".English");
// var Afrikaans = document.querySelector(".Afrikaans");
// var IsiXhosa = document.querySelector(".IsiXhosa");
var greeting = document.querySelector(".greeting");
var clearBtn = document.querySelector(".clearBtn");
var greetingElement = document.querySelector(".messageArea");
var language = document.querySelector("optradio")
var countElem = document.querySelector(".counts")




var users = localStorage.getItem('namesGreeted');
var usersGreeted = users ? JSON.parse(users) : {};
var user = NamesGreeted(usersGreeted);

countElem.innerHTML = user.counts();


// function greet(firstName){
//   if (firstName.length > 2){
//       return "Hi, " + firstName;
//   }
// }

greeting.addEventListener('click', function() {

  var checkedRadioBtn = document.querySelector("input[name='language']:checked");
  if (checkedRadioBtn) {
    var language = checkedRadioBtn.value;
    if(textField.value === "") {
       return greetingElement.innerHTML = "Please enter your name";

    }
    var greetingString = user.greets(language, textField.value.toUpperCase());
    //getGreetingNames.innerHTML = NamesGreeted;
    greetingElement.innerHTML = greetingString;
    textField.value = '';


    countElem.innerHTML = user.counts()
    localStorage.setItem('namesGreeted', JSON.stringify(user.getNames()));
      //localStorage.setItem('counts', JSON.stringify(user.counts()));
}

 else {

  greetingElement.innerHTML = "Please select a language";

}


});


clearBtn.addEventListener('click', function() {
  localStorage.clear();
  location.reload();

})

window.addEventListener('load', function() {
  //var user = NamesGreeted(usersGreeted);

  // console.log(usersGreeted);


  countElem.innerHTML = user.counts()

})
