var myName="saif";//it is scoped globally
function scope(myName)
{
  var name=myName;//it is scoped locally
  console.log(name);
}  

scope("sameer");

console.log(myName)//saif due to global scope


function check(){

    var checking="good";
}

console.log(checking);//Uncaught ReferenceError: checking is not defined due to local scope