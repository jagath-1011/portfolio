//26.11
// change to dark mod
//<button onclick="godark();">click here</button>(to access the js function in html)
// function godark() {
//     let a = document.querySelector("body");
//     a.style.color="orange";
//     a.style.backgroundColor="black"
// }




// // to change text and style
// function change(){
//     let a=document.querySelector('h1')
//     a.textContent="hii hlo"
//     a.style.color="brown"
// }


//27.11
// // To add and remove box (div size is mentioned in css)
// //<button onclick="add();">add </button>
// function add(){
//     let a = document.querySelector('body')
//     newdiv = document.createElement('div')
//     a.appendChild(newdiv)
// }


// //<button onclick="remove();">remove</button>
// function remove(){
//     let a = document.querySelector("body")
//     divitem=document.querySelector("div")
//     a.removeChild(divitem)
// }


// mouse events
document.querySelector("#j").addEventListener("dblclick",() => {

    j=document.querySelector("#j")
    j.classList.add("active")


    p=document.querySelector("#p")
    p.classList.remove("active")
 
    c=document.querySelector("#c")
    c.classList.remove("active")

    g=document.querySelector("#g")
    g.classList.remove("active")
})

document.querySelector("#p").addEventListener("mouseover",() => {
    p=document.querySelector("#p")
    p.classList.add("active")

    j=document.querySelector("#j")
    j.classList.remove("active")


    c=document.querySelector("#c")
    c.classList.remove("active")

    g=document.querySelector("#g")
    g.classList.remove("active")
})
document.querySelector("#c").addEventListener("mouseout",() => {
    c=document.querySelector("#c")
    c.classList.add("active")

    j=document.querySelector("#j")
    j.classList.remove("active")

    p=document.querySelector("#p")
    p.classList.remove("active")

    g=document.querySelector("#g")
    g.classList.remove("active")

})
document.querySelector("#g").addEventListener("mousemove",() => {
    g=document.querySelector("#g")
    g.classList.add("active")

    c=document.querySelector("#c")
    c.classList.remove("active")

    j=document.querySelector("#j")
    j.classList.remove("active")

    p=document.querySelector("#p")
    p.classList.remove("active")
})


// Key board events

// document.addEventListener("keydown", (event) => {
//     alert(`Key pressed: ${event.key}`);
// });


// document.addEventListener("keyup", (event) => {
//     alert(`Key released: ${event.key}`);
// });


//windoew events
// document.addEventListener("DOMContentLoaded", () => {
//     alert("DOM fully loaded and parsed!");
// })

// document.addEventListener("resize", () => {
//     alert("Window resized!");
// })

// document.addEventListener("scroll", () => {
//     alert("user is scrolling");
// })

// document.addEventListener("scroll", () => {
//     alert("user is scrolling");
// })


//form events
// document.querySelector("#myinput").
// addEventListener('focus', () => {
// alert(`Key released: `);
// })

// document.querySelector("#myinput").
// addEventListener('blur', () => {
// alert(`input field lost `);
// })

// document.querySelector("#myinput").
// addEventListener('input', (event) => {
// alert(`current value:${event.target.value}`);
// })


// document.querySelector('form').

// addEventListener('submit', (event) => {
// event.preventDefault(); // Prevents page refresh
// console.log('Form submitted!');

// em = document.querySelector("#email").value;

// pw= document.querySelector ("#password").value;

// alert("Email: " + em);

// alert("Password:" + pw);
// });



// // form validation
// document.querySelector('form').addEventListener('submit', (event) => {
//     event.preventDefault(); // Prevents page refresh
//     console.log('Form submitted!');

//     let na = document.querySelector("#name").value;
//     let em = document.querySelector("#email").value;
//     let pw = document.querySelector("#password").value;

//     alert("Email: " + em);
//     alert("Password: " + pw); // Corrected concatenation
// });

// html
// <form>
// <input type="text" id="name" placeholder="name">
// <input type="email" id="email" placeholder="Email">
// <input type="password" id="password" placeholder="Password">
// <button type="submit">Submit</button>
// </form>

