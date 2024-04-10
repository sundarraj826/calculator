const display = document.getElementById('display');

function appendToDispaly(input){
      display.value += input;
    //   console.log(display.value = input);
    //   console.log(display.value += input);

}

function clearDispaly(){
    display.value = '';
}

function calculate(){
    try{

        display.value = eval(display.value);
    }
    catch{
        display.value = 'Error';
    }
}