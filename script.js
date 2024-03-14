const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

// buttons.forEach((item)=>{
//     item.onclick = () =>{
//         if(item.id == 'clear'){
//             display.innertext = '';
//             else if (item.id == 'backspace'){
//                 let string = display.innerText.tostring();
//                 display.innerText = string.substr(0, string.length - 1);
//                 else if(display.innerText !='' &&item.id == 'equal'){
//                     display.innerText= eval(display.innerText);
//                     else if(display.innerText == '' &&item.id == 'equal'){
//                         display.innerText = 'Empty';
//                         setTimeout(()=> (display.innerText = ''), 2000);
//                         else{
//                             display.innertext+=item.id;
//                         }}}}}}})

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id === "clear") {
      display.innerText = "";
    } else if (item.id === "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (item.id === "equal") {
      try {
        display.innerText = eval(display.innerText);
      } catch (error) {
        display.innerText = "Error";
        setTimeout(() => (display.innerText = ""), 2000);
      }
    } else {
      display.innerText += item.id;
    }
  };
});

// const themeTogglebtn = document.querySelector(".theme-toggler");
// const calculator = document.querySelector(".calculator");
// const toggleIcon = document.querySelector(".toggle-icon");
// let isDark = true;
// themeTogglebtn.onclick = () => {
//   calculator.classList.toggle("dark");
//   themeTogglebtn.classList.toggle("active");
//   isDark = !isDark;
// };
