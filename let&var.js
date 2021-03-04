let let_global = "Global let variable";

console.log(let_global);

if(true){
    hi = "Hello World";   // Declaration like this is also possible
    let let_local = "Local let variable";
    console.log(let_global);
    console.log(let_local);
    let_global = "Global let changed inside the loop";      // let is like static declaration
    console.log(let_global);

}

console.log(let_global);
console.log(hi);
//console.log(let_local);      // let_local is not accessible outside the loop

if(true){
    var var_local = "Local var";
}

console.log(var_local);         // local var is accessible outside the loop