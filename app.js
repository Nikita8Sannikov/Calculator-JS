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
const btnSwitch = document.querySelector(".btn-toggle")
let input = null
let operator = '+'
let currentValue = ''

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
function clearActiveLightClasses () {
    ops.forEach( (op) =>{
        op.classList.remove('active-light')
    })
}
function clearTouchClasses (elems) {
    elems.forEach( (element) =>{
        element.classList.remove('touch')
    })
}
function  clearTouchLightClasses (elems) {
    elems.forEach( (element) =>{
        element.classList.remove('touch-light')
    })
}
// function clearTouchClasses () {
//     dops.forEach( (dopElement) =>{
//         dopElement.classList.remove('touch')
//     })
// }

function clickTheNumber(num) {
    currentValue += num
    clearActiveClasses ()
    const formatedValue = formatNumber(parseFloat(currentValue))
    console.log('current:',currentValue)
    resultElement.innerHTML = formatedValue
}

function formatNumber(number){
    return number.toLocaleString('ru-RU')
}

function clickTheOperator(op) {
    if (currentValue !== ''){
        if (input !== null){
            input = calculateResult(input, currentValue, operator)
            console.log('newInput:',input)
        }else{
            input = parseFloat(currentValue) // Сохраняем текущее значение в input
            console.log('input:',input)
        }
    }
    operator = op
    // if(resultElement.innerHTML.trim() != ''){
    // input = parseFloat(currentValue) // Сохраняем текущее значение в input
    currentValue = '' // Обнуляем текущее значение
    // }
}

ac.addEventListener('click',()=>{
    clearActiveClasses ()
    resultElement.innerHTML = 0
    currentValue = ''
    input = null
    // console.log('current:',currentValue)
    // console.log('input:',input)
})

change.addEventListener('click', ()=>{
    resultElement.innerHTML = - resultElement.innerHTML 
    currentValue = -currentValue
})

percent.addEventListener('click', ()=>{
    currentValue = input*(currentValue/100)
     resultElement.innerHTML = currentValue
})



// nums.forEach( (num) =>{
//     resultElement.innerHTML = 0
//     num.addEventListener('click', () =>{
//         clickTheNumber(num.innerHTML)
//         // clearTouchClasses ()
//         num.classList.add('touch')
//         setTimeout(()=>{
//             clearTouchClasses(nums)
//             // num.classList.remove('touch')
//         }, 350)
//     })
    
// })

nums.forEach( (num) =>{
    resultElement.innerHTML = 0
    num.addEventListener('click', () =>{
        clickTheNumber(num.innerHTML)
        if(num.classList.contains('light-theme')){
            console.log(true)
            
        num.classList.add('touch-light')
        setTimeout(()=>{
            clearTouchLightClasses(nums)
        }, 350)
    
    }else{
        num.classList.add('touch')
        setTimeout(()=>{
            clearTouchClasses(nums)
        }, 350)
    }
    })
    
})


ops.forEach(opElement => {
    opElement.addEventListener('click', () => {
        clickTheOperator(opElement.innerHTML)
        if(opElement.classList.contains('light-theme')){
            console.log(true)
            clearActiveLightClasses ()
            opElement.classList.add('active-light')
    }else{
        clearActiveClasses ()
        opElement.classList.add('active')
    }
        
    })
})
// ops.forEach(opElement => {
//     opElement.addEventListener('click', () => {
//         clickTheOperator(opElement.innerHTML)
//         clearActiveClasses ()
//         opElement.classList.add('active')
//     })
// })

dops.forEach(dopElement => {
    dopElement.addEventListener('click', () => {
        if(dopElement.classList.contains('light-theme')){
            console.log(true)
            dopElement.classList.add('touch-light')
        setTimeout(()=>{
            clearTouchLightClasses(dops)
        }, 350)
    }else{
        dopElement.classList.add('touch')
        setTimeout(()=>{
            clearTouchClasses (dops) 
        }, 350)
    }
    })
})

// btnSwitch.addEventListener('click', () => {
//     document.body.classList.toggle('light-theme')
//     resultElement.classList.toggle('light-theme')
//     btnSwitch.classList.toggle('light-theme')
//     submitBtn.classList.toggle('light-theme')
//     nums.forEach( (num) =>{
//         num.classList.toggle('light-theme')
//     })
//     dops.forEach( (dop) =>{
//         dop.classList.toggle('light-theme')
//     })
//     ops.forEach( (op) =>{
//         op.classList.toggle('light-theme')
//     })
//   })



function calculateResult(input, current, operator) {
    const num2 = parseFloat(current) // Получаем второе число
    let result;
    if(operator == '+'){
        result =  +(input + num2)
        // console.log('plus',typeof(result))
    }else if(operator == '-'){
         result = input - num2
        //  console.log('minus',typeof(result))
    }else if(operator == '*'){
        result = input * num2
        // console.log('mul',typeof(result))
    }else if(operator == '/'){
        result = +(input / num2).toFixed(2)
        // console.log('dev',typeof(result))
    }
    const formatedResult = formatNumber(parseFloat(result))
    resultElement.innerHTML = formatedResult
 // Обновляем input для начала нового цикла
    // input = result
    // currentValue = ''
    return parseFloat(result)
}


submitBtn.addEventListener('click', () => {
    if(input !== null && currentValue !== ''){
    calculateResult(input, currentValue, operator)
    console.log('=current:',currentValue)
    console.log('=input:',input)
    }
});


nums.forEach( (num) =>{
    if(num.classList.contains('light-theme')){
        console.log(true)
        num.addEventListener('click', () =>{
    num.classList.add('touch-light')
    setTimeout(()=>{
        clearTouchLightClasses(nums)
    }, 350)
})
}
})


