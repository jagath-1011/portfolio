//high order functions(one function accepts other function as a parameter is called high order function)

//call back function
// function display(data){
//     console.log(data);   
// }
// //high oredr function
// function accept_name(name,show){
//     show(name)
// }
// accept_name('deep',display)

// function add(a,b){  
//     return a+b
// }
// function sub(a,b){
//     return a-b
// }
// function mul(a,b){
//     return a*b
// }
// function div(a,b){
//     return a/b
// }

// arrow function
// add=(a,b)=>a+b;
// sub=(a,b)=>a-b;
// div=(a,b)=>a/b;
// mul=(a,b)=>a*b;
// function calculate(a,b,op){
//     res=op(a,b)
//     console.log(res);
// }
// calculate(20,10,add)
// calculate(20,10,sub)
// calculate(20,10,mul)
// calculate(20,10,div)

// area=(r)=>Math.PI*r^2
// perimeter=(r)=>2*Math.PI*r
// diamete=(r)=>2*r

// function op_circle(r,op){
//     res=op(r)
//     console.log(res);
// }
// op_circle(10,area)
// op_circle(10,perimeter)
// op_circle(10,diamete)

//map,filter,reduce,foreach function
// numbers=[10,20,30,40]
// d=numbers.map(num=>num*2)
// c=numbers.filter(num=>num>20)
// b=numbers.reduce((total,num)=>total +num,0)
// a=numbers.forEach(numbers => console.log(numbers));

// console.log(d);
// console.log(c);
// console.log(b);
// console.log(a);


// function outer(){
//     a=10
//     return function inner(){
//         console.log(a);
        
//     }
// }
// res=outer()
// console.log(res);
// res()
