// Write a program to print all even number first and then all odd numbers using only one iteration
let even="";
let odd="";
for(let i=0;i<100;i++){
    if(i%2==0){
        even=even+i+" ";
    }
    else{
        odd=odd+i+" ";
    }
}
console.log(even+odd);