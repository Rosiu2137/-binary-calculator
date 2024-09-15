const result = document.querySelector(".result")
const input = document.querySelector(".input")
const decimalButton = document.querySelector("#decimal")
const binaryButton = document.querySelector("#binary")
let lastInputValue = input.value

const checkLetterSize = ()=>
{
    const container = document.querySelector(".container")
    if(window.innerWidth > 550)
    {
        if(container.clientWidth/window.innerWidth > 0.5)
            {
        
                result.style.fontSize = `${window.innerWidth/result.innerHTML.length}px`
            }
            else
            {
                result.style.fontSize =`5rem`
            }
    }
    else
    {
        console.log()
        if(result.innerHTML.length>10)
        {
            result.style.fontSize = `${window.innerWidth/result.innerHTML.length*1.3}px`
        }
        else
        {
            result.style.fontSize =`5rem`
        }
    }
   
}

const convertToBinary = ()=>
{
    let value = input.value
    if(value != '' && value != 0)
    {
        const binaryArray = []

        while (value != 1)
        {
            if(value % 2 == 1)
            {
                binaryArray.push('1')
            }
            else
            {
                binaryArray.push('0')
                
            }
            value = Math.floor(value/2)
        }
        binaryArray.push('1')
        result.innerHTML = binaryArray.reverse().join('')
        checkLetterSize()
    }
    else
    {
        result.innerHTML = `0`
        checkLetterSize()
    }

    
    
}

const convertToDecimal = ()=>
{

    const array = input.value.split('').reverse()
    let power = 0
    let value = 0
    for(let i =0;i<array.length;i++)
    {
        value += array[i] * 2**power
        power++
    }
    result.innerHTML = value
    checkLetterSize()
}


const inputChanged = (e)=>
{
    if(decimalButton.classList.contains("chosen"))
    {
        
        const value = input.value.split('')
        let isOk = true

        value.forEach(x => {
            if(x != 0 && x != 1)
            {
                isOk = false
            }
        });

        if(isOk)
        {
            convertToDecimal()
        }
        else
        {
            for(let i=0;i<value.length;i++)
            {
                if(value[i] != 0 && value[i] != 1)
                {
                    value.splice(i,1,'0')
                }
            }
    
            input.value = value.join('')
        }
        
        
    }
    else
    {   
        convertToBinary()
    }
}

const setBinarySystem = ()=>
{
    decimalButton.classList.remove("chosen")
    binaryButton.classList.add("chosen")
    input.value = ``
    result.innerHTML = `0`
    checkLetterSize()
}   

const setDecimalSystem = ()=>
{
    decimalButton.classList.add("chosen")
    binaryButton.classList.remove("chosen")
    input.value = ``
    result.innerHTML = `0`
    checkLetterSize()
}

binaryButton.addEventListener("click",setBinarySystem)
decimalButton.addEventListener("click",setDecimalSystem)

setInterval(() => {
    if(input.value != lastInputValue)
    {
        inputChanged()
    }
    lastInputValue = input.value
}, 10);
