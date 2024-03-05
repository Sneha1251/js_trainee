// All of the above questions from 3-6 needs to be done with arrow functions also

//3
const inner=()=>{
    return 'hello world!';
}
const outer=(inner)=>{
    console.log(inner());
}
outer(inner);

//4
const square = (length)=>{
    return length * length;
};

console.log("Sqaure of number is ",square(5));

// 5
const sum = (first,second)=>{
    return first + second;
};

console.log("Sum of number is ",sum(5,6));

//6
const check =  (number)=>{
    if(number%2==0)return true;
    else return false;
};

console.log(check(5));