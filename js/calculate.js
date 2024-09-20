
// Add money Js
document.getElementById('addMoneybtn').addEventListener("click", function(e){
    e.preventDefault()

    let addAmount = document.getElementById('addAmount').value
    let userPassword = document.getElementById('userPassword').value
    let currentBalance = document.getElementById('currentBalance').innerText

    if(userPassword === '1234'){
        let temp = parseFloat(currentBalance) + parseFloat(addAmount);
        document.getElementById('currentBalance').innerText = temp
        
        // Clear the input fields
        document.getElementById('userPassword').value=""
        document.getElementById('addAmount').value=""
    }else{
        alert("Enter Correct password")
    }
})



// Add money Js
document.getElementById('outMoneyBtn').addEventListener("click", function(e){
    e.preventDefault()

    let outMoney = document.getElementById('outMoney').value
    let userPin = document.getElementById('userPin').value
    let currentBalance = document.getElementById('currentBalance').innerText

    if(userPin === '1234'){
        if(parseFloat(currentBalance) >= parseFloat(outMoney)){
            let temp = parseFloat(currentBalance) - parseFloat(outMoney);
            document.getElementById('currentBalance').innerText = temp

            console.log(userPin)
            
            // Clear the input fields
            document.getElementById('userPin').value=""
            document.getElementById('outMoney').value=""
        }else{
            alert("Insufficient Balance!")
        }
    }else{
        alert("Enter Correct password")
    }
})



// Toggle Add - Out

document.getElementById('cashBtn').addEventListener('click', function(){

    document.getElementById('cashOutSection').style.display="block"
    document.getElementById('addMoneySection').style.display="none"

})


document.getElementById('addBtn').addEventListener('click', function(){
    document.getElementById('cashOutSection').style.display="none"
    document.getElementById('addMoneySection').style.display="block"
})