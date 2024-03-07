// Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)

const str="hello join doe";
let result="";

for(let i=0; i<str.length; i++){
    if(str[i] === ' '){
        result+= str[i+1].toUpperCase();
        i++;
    }
    else{
        result = result+str[i];
     }
    
}
console.log(result);

