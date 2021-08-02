let values = document.querySelector(".value")
const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
const input = document.querySelector(".input")
const input2 = document.querySelector(".input-minus")
const input3 = document.querySelector(".input-delenie")
const input4 = document.querySelector(".input-umnozh")
const sub = document.querySelector(".submit")
const form = document.querySelector(".form")
const remove = document.querySelector(".remove")
const bg = document.querySelector(".change-bg")
const normalBg = document.querySelector(".normal-bg")
const body = document.querySelector("body")
value = 0;

plus.addEventListener('click', ()=>{
    console.log("hi")
    value += 1;
    values.innerHTML = value;
})

minus.addEventListener('click', ()=>{
    console.log("bye")
    value -= 1;
    values.innerHTML = value;
})

sub.addEventListener('click', () => {
    value += Number(input.value);
    value -= Number(input2.value);
    if (Number(input3.value)!==0) {
          value /= Number(input3.value);
    }
    if (Number(input4.value)!==0) {
          value *= Number(input4.value);
    }

    values.innerHTML = value;
    form.reset()
})

remove.addEventListener('click', () => {
    value = 0;
    values.innerHTML = value
})
function generateColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16)
}

bg.addEventListener('click', () => {
    body.style.background = generateColor();
})

normalBg.addEventListener('click', () => {
    body.style.background = 'white';
})