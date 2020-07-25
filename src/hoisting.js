//hoistint
//1)functions are scaned and made available
//2) variable are scaned but made undefined
sayMyName();

 function sayMyName(){
   console.log("Sameer Asad");
 }

 sayMyName()

//now comes towards variables

myName(); 
/*if we call this function here it will not works
bcz it is not scoped funnctionally it is scoped with variable
  */
 
const myName=()=> console.log("my name is sameer asad");

  
myName()//it will work properly after declartion