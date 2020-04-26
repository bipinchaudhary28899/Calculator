var button = document.getElementsByClassName('btn1');
var display = document.getElementById('display');
var operand1=0;
var operand2=null;
var operator=null;

for(var i=0;i<button.length;i++){
    button[i].addEventListener('click',function(){
       var value = this.getAttribute('data-value');
        var text = display.textContent.trim();
        if(value=='+'){
            operator='+';
            operand1=parseFloat(display.textContent); 
            display.innerHTML=" ";
        }
        else if(value=='-'){
            operator='-';
            operand1=parseFloat(display.textContent);
          display.innerHTML=" ";
        }
        else if(value=='*'){
            operator='*';
            operand1=parseFloat(display.textContent);
            display.innerHTML=" ";
        }
        else if(value=='/'){
            operator='/';
            operand1=parseFloat(display.textContent);
             display.innerHTML=" ";
        }
        else if (value == "+/-") {
            operand1 = parseFloat(text);
            operand1 = -1 * operand1;
            display.textContent = operand1;
        } 
        else if (value == ".") {
            if (text.length && !text.includes('.')) {
                display.textContent = text + '.';
            }
        } else if (value == "%") {
            operand1 = parseFloat(text);
            operand1 = operand1 / 100;
            display.textContent = operand1
        }
        else if(value == '='){
            operand2=parseFloat(display.textContent);
            display.innerHTML=eval(operand1 + " " + operator + " " + operand2);
        }
        else if(value=='AC'){
            display.innerHTML=" ";
        }
        else
            display.innerHTML+= value;
    });
}