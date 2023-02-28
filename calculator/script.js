var textarea = document.querySelector('#text-area');

function operatorShow(elementId) {
    console.log(elementId);
    if (elementId == 'plus') {
        textarea.innerHTML += "+";
    }
    if (elementId == 'minus') {
        textarea.innerHTML += "-";
    }
    if (elementId == 'mul') {
        textarea.innerHTML += "*";
    }
    if (elementId == 'divide') {
        textarea.innerHTML += "/";
    }
}

function operandShow(elementId) {
    if (elementId == 'one') {
        textarea.innerHTML += '1';
    }
    if (elementId == 'two') {
        textarea.innerHTML += '2';
    }
    if (elementId == 'three') {
        textarea.innerHTML += '3';
    }
    if (elementId == 'four') {
        textarea.innerHTML += '4';
    }
    if (elementId == 'five') {
        textarea.innerHTML += '5';
    }
    if (elementId == 'six') {
        textarea.innerHTML += '6';
    }
    if (elementId == 'seven') {
        textarea.innerHTML += '7';
    }
    if (elementId == 'eight') {
        textarea.innerHTML += '8';
    }
    if (elementId == 'nine') {
        textarea.innerHTML += '9';
    } if (elementId == 'zero') {
        textarea.innerHTML += '0';
    }
}

function dotShow() {
    textarea.innerHTML += '.';
}

function clearButton() {
    textarea.innerHTML = ' ';
}

function evaluateExp() {
    var expression = textarea.value;
    var answer = eval(expression);
    textarea.innerHTML = answer;
}


var jsonF = {"employees":[
    { "firstName":"John", "lastName":"Doe" },
    { "firstName":"Anna", "lastName":"Smith" },
    { "firstName":"Peter", "lastName":"Jones" }
  ]};

  jsonF = {'Name': "paras"};

  console.log(jsonF);