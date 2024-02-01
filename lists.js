let workweek = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"];
console.log(workweek[4]);

// for in loop
for (day in workweek){
    console.log("Day - " + workweek[day]);
}

// for loop
for(let count =0; count < workweek.length; count++){
    console.log(count+1 + " Day - " + workweek[count]);
}

// for each loop
let txt = "My work day - ";

workweek.forEach((data) =>{
    console.log(`${txt} ${data}`);
})


// edit array
workweek[4] = "SATURDAY"; // change element 4
workweek.push("SUNDAY"); // append sunday

let workcount = workweek.length;
console.log(`You work ${workcount} days`);

workweek.forEach((data)=>{
    console.log(` - - ${data}`)
})


// // pass array data to the DOM
// let getweek = document.getElementById("week");

// let markup="";
  
// workweek.forEach((item)=>{ 
//     markup += `<li>${item}</li>`;
// });

// console.log(markup);
// getweek.innerHTML = markup;


// pass array data to the DOM
let getweektable = document.getElementById("week-table");

let markup = `${getweektable.innerHTML} <tbody>`;

workweek.forEach((data) =>{
    markup += `<tr>
        <th>${data}</th>
        <th><button>start time</button></th>
</tr>`
})

markup += "</tbody>"

getweektable.innerHTML = markup;