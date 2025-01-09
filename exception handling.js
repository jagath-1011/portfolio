// // set time for output
// console.log("hii");

// setTimeout(function(){
//     console.log("hlo"); 
// },3000);

// console.log("how are you");

// exception handling
// function add(){
//    try{
//     a=10
//     b=20
//     c=a+b
//     console.log(dd);
//    }
//    catch(ex){
//     console.log(ex.message);
//    }
//    finally{
//     console.log("occurs for both try and catch block");
    
//    }
// }
// console.log("function start");
// add()
// console.log("function end");


// function valiadate(a){
//     if (a>=18){
//         console.log("eligible to vote");
//     }
//     else{
//         throw new Error("not eligible")
//     }
// }
// console.log("program start");
// try{
//     valiadate(15)
// }
// catch(ex){
//     console.log(ex.message);
// }
// console.log("program ends");


// call back hell or pyramid of doom
// setTimeout(function searchh() {
//     console.log("I am searching...");
//     setTimeout(function select() {
//         console.log("I am selected...");
//         setTimeout(function add_to_cartt() {
//             console.log("Adding to cart...");
//             setTimeout(function payment() {
//                 console.log("Payment...");
//             }, 2000);
//         }, 2000);
//     }, 2000);
// }, 2000);




// using arrow function
// setTimeout(()=>{
//     console.log("choosing a movie");
//     setTimeout(()=>{
//         console.log("choose time and date");
//         setTimeout(()=>{
//             console.log("seleating seats");
//             setTimeout(()=>{
//                 console.log("making payment");
//                 setTimeout(()=>{
//                     console.log("enjoy movie");
//                 },2000)
//             },2000)
//         },2000)
//     },2000)
// },2000)



// promises

p=new Promise((resolve,reject)=>{
    payment="success"
    if (payment === "success")
        resolve("payment successful")
    else
        reject("payment failed")
}
)

p
.then((result)=>{
    console.log(result);
})
.catch((result)=>{
    console.log(result);
})


