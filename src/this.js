this keyword  is different and in javascript and considered a notorious thing here
because it is quite difficul to understand and it could be differnt for different scopes

//just log this keyword on console


console.log(this); // it will give us the global context

//ans[object Window]


function sayName(){
let name="sameer"
console.log(this);
}
sayName()// ans [object Window]

sayName()// ans [object Window]


if we run this code on node server we get an empty scope "{}"
