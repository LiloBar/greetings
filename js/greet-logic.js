function NamesGreeted(usersGreeted) {

  //var firstName = textField.value;
  var namesGreeted = usersGreeted || {};
  //var greetingz ="";
  var names = "";
  var counts = 0;

  //when the greet button is pressed check if this user was already greeted befo  //by looking if the userName exists in namesGreeted if not increment this counter and update the screen
  function greetedNames(language, firstName) {


    if (firstName != '') {
      names = firstName;

      if (namesGreeted[names] === undefined) {
        counts++;

        //add an entry for the user that was greeted in the Object Map
        namesGreeted[names] = 0;
      }

    }
    if (language === 'IsiXhosa') {
      // greetingz === 'Molo ' + name
      return 'Molo, ' + names

    }

    if (language === 'English') {
      // greetingz === 'Hello ' + name
      return 'Hello, ' + names
    }
    if (language === 'Afrikaans') {
      // greetingz === 'hallo ' + name
      return 'Hallo, ' + names

    }
  }

  function getGreetingNames() {
    return namesGreeted;
  }

  function countNames() {
    return Object.keys(namesGreeted).length;
  }

  function clearBtn() {
    return namesGreeted = {};
  }



  return {
    getNames: getGreetingNames,
    greets: greetedNames,
    cleared: clearBtn,
    //displaying,
    counts: countNames,
    sa :greetedNames
  }


}
