const nums = document.querySelectorAll('.nums')
const ops = document.querySelectorAll('.ops')
const dops = document.querySelectorAll('.dops')
const resultElement = document.querySelector('#result')
// const plusBtn = document.querySelector('#plus')
// const minusBtn = document.querySelector('#minus')
// const multBtn = document.querySelector('#mult')
// const devBtn = document.querySelector('#dev')
const submitBtn = document.querySelector('#submit')
const ac = document.querySelector('#ac')
const percent = document.querySelector('#percent')
const change = document.querySelector('#change')
let input = 0
let operator = '+'
let currentValue = ''
let previousValue = ''

// plusBtn.onclick = function() {
//     operator = '+'
//     clearActiveClasses ();
//     plusBtn.classList.add('active')
//     console.log(operator)
//     resultElement.innerHTML = 0
// }
// minusBtn.onclick = function() {
//    operator = '-'
//    clearActiveClasses ();
//    minusBtn.classList.add('active')
//    resultElement.innerHTML = 0
// }
// multBtn.onclick = function() {
//    operator = '*'
//    clearActiveClasses ();
//    multBtn.classList.add('active')
//    console.log(operator)
//    resultElement.innerHTML = 0
// }
// devBtn.onclick = function() {
//    operator = '/'
//    clearActiveClasses ();
//    devBtn.classList.add('active')
//     console.log(operator)
//    resultElement.innerHTML = 0
// }

function clearActiveClasses () {
    ops.forEach( (op) =>{
        op.classList.remove('active')
    })
}
function clearTouchClasses () {
    dops.forEach( (dopElement) =>{
        dopElement.classList.remove('touch')
    })
}

function clickTheNumber(num) {
    currentValue += num
    clearActiveClasses ()
    const formatedValue = formatNumber(parseFloat(currentValue))
    resultElement.innerHTML = formatedValue
}

function formatNumber(number){
    return number.toLocaleString('ru-RU')
}

function clickTheOperator(op) {
    operator = op
    if(resultElement.innerHTML.trim() != ''){
    input = parseFloat(currentValue) // Сохраняем текущее значение в input
    currentValue = '' // Обнуляем текущее значение
    }
}

ac.addEventListener('click',()=>{
    clearActiveClasses ()
    resultElement.innerHTML = 0
    currentValue = ''
})

change.addEventListener('click', ()=>{
    resultElement.innerHTML = - resultElement.innerHTML 
    currentValue = -currentValue
})

percent.addEventListener('click', ()=>{
    currentValue = input*(currentValue/100)
     resultElement.innerHTML = currentValue
})



nums.forEach( (num) =>{
    resultElement.innerHTML = 0
    num.addEventListener('click', () =>{
        clickTheNumber(num.innerHTML)
        clearTouchClasses ()
        num.classList.add('touch')
        setTimeout(()=>{
            num.classList.remove('touch')
        }, 350)
    })
    
})

ops.forEach(opElement => {
    opElement.addEventListener('click', () => {
        clickTheOperator(opElement.innerHTML)
        clearActiveClasses ()
        opElement.classList.add('active')
    })
})

dops.forEach(dopElement => {
    dopElement.addEventListener('click', () => {
        clearTouchClasses ()
        dopElement.classList.add('touch')
        setTimeout(()=>{
             dopElement.classList.remove('touch')
        }, 350)
    })
})




function calculateResult() {
    const num2 = parseFloat(currentValue) // Получаем второе число
    let result;
    if(operator == '+'){
        result =  +(input + num2).toFixed(2)
    }else if(operator == '-'){
         result = input - num2
    }else if(operator == '*'){
        result = input * num2
    }else if(operator == '/'){
        result = +(input / num2).toFixed(2)
    }
    const formatedResult = formatNumber(parseFloat(result))
    resultElement.innerHTML = formatedResult
    // Обновляем input для начала нового цикла
    input = result
    currentValue = ''
}




submitBtn.addEventListener('click', calculateResult);