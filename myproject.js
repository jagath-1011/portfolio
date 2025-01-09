// a="hii"
// console.log("a=  "+a);

// let b=10
// console.log("b=  "+b);

// const c=9.99
// console.log("c=  "+c);

// var d=true
// console.log('d=  '+ d);

// a=10
// b=20
// console.log("add = ",(a+b));
// console.log("sub = ",(a-b));
// console.log("mul = ",(a*b));
// console.log("mod = ",(a%b));
// console.log("div = ",(a/b));

// a=5
// b=5
// c="5"
// console.log(a==b);
// console.log(b==c);
// console.log(a===c);
// console.log(5**5);
// console.log(a);
// console.log(a++);
// console.log(a);
// console.log(a--);
// console.log(a);


// let a=10
// let b=15
// if (a>=b){
//  console.log("true");
// } else {
//  console.log("false");
// }
 

// a=function(a,b){
//     console.log(a+b);
    
// }
// a(10,12)
// function add() {
//     a=20
//     b=9
//     c=a-b
//     console.log(c);

// ternary operater
// a=10
// b=20
// c=a>b? a:b ;
// console.log(c);



// no argument  + no return value
// function add(){
//     a=10
//     b=20
//     c=a+b
//     console.log(c);  
// }
// add()
// argument  + no return value
// function sum(a,b){
//     c=a-b
//     console.log(c);    
// }
// sum(10,20)
// no argument  + return value
// function mul(){
//     a=10
//     b=20
//     c=a*b
//     return c
// }
// console.log(mul());
// argument  + return value
// function mod(a,b) {
//     c=a%b
//     return c
// }
// console.log(mod(10,20));

// different way to declare variable
// a=function () {
//     console.log("Hello,World!"); 
// }
// a()
// b=function(a,b){
//     c=a+b
//     console.log(c);
// }
// b(10,20)
// diff=function () {
//    let a=10
//    let b=20
//     let d=a-b
//     return d
// }
// console.log(diff());

// arrow function
// a=()=>{
//     a=10
//     b=10
//     c=a+b
//     console.log(c); 
// }
// a()

// diff=(a,b)=>{
//     c=a-b
//     return c
// }
// console.log(diff(20,10));


// }
// add()
// res1= () => {
// a=10
// b=20
// c=a+b
// console.log(c);


// object
// ob={
//     name:"jagath",
//     roll_num:102,
//     age:22
// }
// console.log(ob);
// console.log(ob.age);






//ar=[10,6.44,"js",true]
// console.log(ar.length);
// ar.unshift("aaa")//to add elememt at first
// console.log(ar);
// ar.shift("aaa")//to remove first element
// console.log(ar);
// ar.push(1000)//add element at last
// console.log(ar);
// ar.pop()//remove element at last
// console.log(ar)
// ar[3]="sj" //replace a particular element
// console.log(ar);
// delete ar[1]//delete a particular element
// console.log(ar);
//ar=["white","blue","grey","pink"]
//console.log(ar);

// console.log(ar.slice(1,4));// slicing
// console.log(ar.indexOf("grey"));
// console.log(ar.indexOf("green"));
// console.log(ar.includes("blue"));
// console.log(ar.includes("green"));
// console.log(ar.sort());
// console.log(ar.reverse());
// ar.splice(2,2,"jagath","hari","kishore")//(starting of the index,how many elements to be deleted, what to be replaced)
// console.log(ar);


//Array Iteration Methods
//1.normal for loop method
// ar=["white","blue","grey","pink"]
// for (i=0;i<ar.length;i++) {
//     console.log(ar[i]+" color"); 
// }
////2.forEach():
// ar.forEach(a => {
//     console.log("color"+a);
    
// });
//3.map function

// b=[10,20,30,40,50]
// b1=b.map(num=>num**2)
// console.log(b1);

//4.filter function
// a=[1,2,3,4,5,6]
// b=a.filter(num=>num%2==0)
// console.log(b);


//5.reduce
// a=[1,2,3,4,5]
// res=a.reduce((sum,ele)=>sum * ele,1)
// console.log(res);

// 6.concat
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let combined = arr1.concat(arr2);
// console.log(combined);

// 7.join()
// let words = ["Hello", "world"];
// let sentence = words.join("-------");
// console.log(sentence);

// array debugging
// let fruits = ["apple", "banana", "cherry"];
// let [a, ,b] = fruits;
// console.log(a); 
// console.log(b);


// if else ladder
// age=59
// if (age<=5)
//     console.log("baby");
// else if (age<=17)
//     console.log("children");
// else if(age<=50)
//     console.log("adult");
// else
//     console.log("senior citizen");


// a=-11
// if (a>0 ){
//     console.log("positive number ");
//     if(a%2==0){
//         console.log("even number");
//     }
//     else{
//         console.log("odd number");
//     }
// }
// else{
//     console.log("negative number");
    
// }   

// month=12
// switch (month) {
//     case 1:
//     case 2:
//     case 3:
//     console.log("winter");
        
//     break;
//     case 4:
//     case 5:
//     case 6:
//     console.log("summer");
//     break;
//     case 7:
//     case 8:
//     case 9:
//     console.log("monsoon");
//     break;
//     case 10:
//     case 11:
//     case 12:
//     console.log("spring");
//     break;
                                   
//     default:
//     console.log("invalid input");
//     break;
// }
    
//  for loop   
// for(i=1;i<=5;i++){
//     console.log("hello world");
    
// }

// while loop
// i=1
// while(i<=5){
//     console.log("hell0");
//     i++
// }


// do while loop  
// i=1
// do{
//     console.log("hell0");
//     i++
// }   while(i<=5)


// array using for loop
// let numbers=[1,2,3,4,5,6]
// for(n of numbers){
//     console.log(n); 
// }

//break
// for(i=1;i<=5;i++){
//     if(i==3)
//         break
//         console.log(i);
// }

//

//continue
// for(i=1;i<=5;i++){
//     if(i==3)
//         continue
//         console.log(i);
// }



// hoisting

// console.log("a = "+a);
// a=10//ReferenceError: a is not defined
// //var a=10 //a = undefined
// //let a=10 //Cannot access 'a' before initialization
// //const a=10 //Cannot access 'a' before initialization
// console.log("a = "+a);



// function overloading (same function name but different parameters)
// function fun(){
//     console.log("no parameter"); 
// }
// function fun(a){
//     console.log("1 - parameter"); 
// }
// function fun(a,b){
//     console.log("2- parameter"); 
// }
// fun()
// in js function overloading is not allowed



// to access same functions different with different parameters(spread operator)
// function add(...args){
//     sum=0
//     for (i=0;i<args.length;i++)
//         sum = sum + args[i]
//     console.log(sum);
// }
// add(10,20)
// add(10,20,30)
// add(10,20,30,40)


// // global scope(access any where in a program)
// var a=10
// function display(){
// local scope(access inside the function)
//     var b=20
//     console.log(a);
//     console.log(b);
// if(3<5){
// //block scope (access inside the if block only)
// var c=30
// }
// }
// display()
// console.log(a);
// console.log(b);// we cannot access a variable out side the function  which declare inside a function 


// var a =10
// function outer() {
//     var b=10

//     function inner(){
//         var c=30
//         console.log("global scope = "+a);
//         console.log("outer function var = "+b);
//         console.log("inner function var = "+c); 
//     }
//     inner()
//     console.log("global scope = "+a);
//     console.log("outer function var = "+b);
//     console.log("inner function var = "+c); // cannot access inner function outside the function
// }
// outer()


// add=(a,b)=>a+b
// res= add(10,20)
// console.log(res);

// area=(a,b)=>(a*b)
// res=area(10,20)
// console.log(res);



