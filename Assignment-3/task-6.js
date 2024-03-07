//Write a program to display prime numbers from 1 to 50
let flag=false;
for(let i=2;i<=50;i++){
    flag=false;
    for(let j=2;j<=i/2;j++){
        if(i%j==0){
            flag=true;
        }
    }
    if(flag==false){
        console.log("prime no ",i);
    }
}