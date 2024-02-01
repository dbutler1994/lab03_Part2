console.log( 45 > 40 );    
console.log( 45 == 44 );  
console.log( 99 != 100 );  
console.log( 99 < 100 );   
console.log( 90 >= 100 );  

let a = 0;
let b = false;

console.log(a==b);
console.log(a===b);

// some date work
let curr_yr = new Date().getFullYear();
console.log(curr_yr);

if(curr_yr > 2022){
    console.log("We are in a year after 2022");
}


// check user roles
let user_role = "admin";

if(user_role === "member"){
    console.log("User has member rights.");
}else{
    console.log("User is admin, give them all access.");
}





// tenerary operator
let user_age = 21;
let access;

let result = (user_age > 18) ? true : false;
console.log(result);


// assign user role response
let user_response = "";
user_response = (user_role === "member") ? "User has member rights." : "User is admin, give them all access."  ;


// pass values to the DOM
let dynamicYear = document.getElementById("current_year");
dynamicYear.innerHTML = curr_yr;

let dynamicAccess = document.getElementById("access_rights");
dynamicAccess.innerHTML = user_response;