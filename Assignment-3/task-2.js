// Write a program to display following output as shown in figure

// 1
// 2 3
// 4 5 6
// 7 8 9 10
let b=1;
let s="";
for(let i=4;i>0;i--){
    for(let j=4;j>=i;j--){
         s+=b+" ";
        b++;
    }
     console.log(s);
     s="";
}

// 1
// 2 2
// 3 3 3
// 4 4 4 4
  s="";
 for(let i=4;i>0;i--){
     for(let j=4;j>=i;j--){
          s+=b+" ";
     }
      b++
      console.log(s);
      s="";
 }
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

 s="";
for(let i=5;i>=1;i--){
    b=1;
    for(let j=1;j<=i;j++){
         s+=b+" ";
         b++;
    }
     console.log(s);
     s="";
}
for(let i=5;i>=1;i--){
     b=1;
    for(let j=4;j>=i-1;j--){
         s+=b+" ";
         b++;
    }
     console.log(s);
     s="";
}