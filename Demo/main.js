function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}



const element = document.getElementById("Covid-Experience");
const checkVal = element.options[element.selectedIndex].value; //This targets the choices and saves it to a variable
const checkText = element.options[element.selectedIndex].text; //This is an updater for the text
// element.addEventListener("change", (e) => { //This is a function that targets an event listener
//     const value = e.target.value;
//     const text= element.options[element.selectedIndex].text;
//     if (value) {
//         document.getElementById("pick").innerHTML = value;
//     }
//     else {
//         document.getElementById("pick").textContent = "";
//     }
// });

let statement = "These are resources that are talored for your specific problem."
let temp = "";
element.addEventListener("change", (e) => { //This is a function that targets an event listener
    const value = e.target.value;
    const text= element.options[element.selectedIndex].text;
    if (value) {
        temp = value;
        }
    else {
        temp = "";
        }
});
console.log(temp);

function input(){
    let a = document.getElementById("boi")
    a.title = 'Hello'
    
    
    if (temp =="Isolation"){
        a.href = "https://www.webmd.com/lung/handle-isolation-and-anxiety#"


    }
    else if(temp == "Loss of Family"){
        a.href = "https://www.webmd.com/lung/handle-isolation-and-anxiety#1";
        
    }
    else if(temp == "Having Covid"){
        a.href = "https://www.reddit.com/r/COVID19positive/";
        
    }
    document.getElementById("pick").innerHTML = temp;
    console.log(temp);
    document.getElementById('boi').innerHTML = statement;
    event.preventDefault();

}


// storage = "";
// function input() {
//     value = document.getElementById("input");
//     if (value == "Isolation") {
//         console.log("Isolation");
//     }
//     else if (value == "Loss of Family") {
//         console.log("LOSS OF FAMILY");
//     }
//     else if(value == "Having Covid"){
//         console.log("Having covid");
//     }
// 