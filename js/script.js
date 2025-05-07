let first_select = document.querySelector(".first_select");
let second_select = document.querySelector(".second_select");
let button = document.querySelector(".submit");
let input = document.querySelector("input.enter-amount");
let arrow = document.querySelector(".arrow button");
let para = document.querySelector("p.write-content");





fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
.then(response => response.json())
.then(data =>{
    let obj = Object.entries(data);
    for(let[i,j] of obj){
        let option = document.createElement("option");
        option.value = i;
        option.innerText = j
        first_select.appendChild(option);
    }
})
.catch(error => console.error('Error:', error));


fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
.then(response=>response.json())
.then(data =>{
    let obj2 = Object.entries(data);
    for(let[i,j] of obj2){
        let option = document.createElement('option');
        option.innerText = j;
        option.value = i;
        second_select.appendChild(option);
    }

})

function all_load(e){
    e.preventDefault();
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${first_select.value}.json`)
    .then(response=>response.json())
    .then(data =>{
        const exchange = data[first_select.value][second_select.value]*input.value;
        para.innerText= input.value + first_select.value + " = " + exchange + second_select.value;

    })

    console.log('this worked');
}

arrow.addEventListener('click',function(){
    let first_value= first_select.value;
    first_select.value = second_select.value;
    second_select.value = first_value; 
})

button.addEventListener('click',all_load);






