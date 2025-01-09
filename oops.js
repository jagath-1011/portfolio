// st={
//     //states
//     roll:1,
//     name:"jagath",
//     cgpa:7.90,
// //behaviour
//     study:function(){
//         console.log("i am studing");
//     },
//     intro:function(){
//         console.log("roll number : "+this.roll+" Name : "+this.name+" CGPA : "+this.cgpa); 
//     }
// }
// st.study()
// st.intro()



// class student{
//     //constructor
//     constructor(roll,name,cgpa){
//         //states
//         this.roll=roll
//         this.name=name
//         this.cgpa=cgpa
//     }
//     //behaviours
//     study(){
//         console.log("i am studing");
//     }
//     intro(){
//         console.log("roll number : "+this.roll+" Name : "+this.name+" CGPA : "+this.cgpa); 
//     }
// }
// st=new student(1,"jagath",7.90)
// st.study()
// st.intro()
    


//inheritance
// class electronic{
//     charged(){
//         console.log("plug in to charge");
//     }
//     use(){
//         console.log("use for making");
//     }
// }
// class laptop extends electronic{
//     use(){
//         console.log("use for study and work");
//     }
//     trade(){
//         console.log("use for tradung");
//     }
// }
// lp=new laptop
// lp.charged()
// lp.use()
// lp.trade()


//to call constructure class we want use super()key word
class parent{
    constructor(){
        console.log("consdtuctor class");
    }
}
class child extends parent{
    constructor(){
        super()
        console.log("child constructor");
    }

}
c= new child()