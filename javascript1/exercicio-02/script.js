//reverse a string

let newStr = '';
let resultado = reverseAString('Hello Gama Academy')

function reverseAString(str){
for(let i = str.length -1; i >= 0; i--){
    newStr += str[i];
    
}

console.log("String revertida: " + newStr);
}

