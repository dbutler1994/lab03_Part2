
function welcome(data, num){
    console.log(`Welcome to my site ${data}`);
    if(num >17){
        console.log(`${data} is allowed to vote.`)
    } else {
        console.log(`${data} is NOT allowed to vote.`)
    }
}

welcome("David", 16);


// return function
function calVAT(cost){
    return cost *0.2;
}

let costprice = 120;
let newprice = calVAT(costprice);

let total = costprice + newprice;
console.log(`£${total}`)

// using function expression
let ecalvat = function(para1, para2){
    let vat = para1 * para2;
    let res = Math.floor(vat + para1);
    return res;
};

console.log(`New price with VAT added: £${ecalvat(120, .2)}`);

// using arrow function
let acalvat = (d1, d2) => {
    let vat_total = d1 *d2;
    let result = Math.floor(vat_total +d1);
    return result;
}

console.log(`New price using arrow function expression £${acalvat(109,.2)}`);