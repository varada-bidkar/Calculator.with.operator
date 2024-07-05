var expr=document.querySelector('#expression')
var actions=document.querySelectorAll('.calculator .buttons .actions button')

actions.forEach((button) =>{
    button.addEventListener('click',function(){
        let previousValue=expr.value
        previousValue= previousValue + button.value
        expr.value=previousValue
})
})

var numbers =document.querySelectorAll('.calculator .buttons .numbers .btn1')
numbers.forEach((button)=>{
    button.addEventListener('click',function()
    {
        let previousValue=expr.value
        previousValue=previousValue+button.value
        expr.value=previousValue
    })

})

function calculate(){
    let expression=expr.value
    let result=eval(expression)
    expr.value=result.toString()
}
function clearText(){
    expr.value=''
}