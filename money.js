// function clickBtnCalculate(){

// }
 document.getElementById('btn-calculate').addEventListener('click', function(){
    const incomeMoney= document.getElementById('income').value ;
    const income = parseFloat(incomeMoney)
    // console.log(income)

    const foodBuy = document.getElementById('food').value ;
    const food = parseFloat(foodBuy) 

    const rentBuy = document.getElementById('rent').value ;
    const rent = parseFloat(rentBuy) 

    const clothesBuy = document.getElementById('clothes').value ;
    const clothes = parseFloat(clothesBuy) 
    // validation 
    if(isNaN(food) || isNaN(rent) || isNaN(clothes)){
        alert('your Balance is not Expanses...!')
        return ;
    }
    const totalCalculate = food + rent + clothes ; 
    // console.log(totalCalculate)
    
    
    
    // total expenses 
    const totalExpanses = document.getElementById('total-expenses')
    totalExpanses.innerText = `${totalCalculate}tk`
    
    // balance 
    const totalBalance = income - totalCalculate ;
    console.log(totalBalance)
    // get value balance
    const balance = document.getElementById('balance')
    balance.innerText = `${totalBalance}tk`;
   
    document.getElementById('btn-save').addEventListener('click',function(){
    const savePercent = document.getElementById('input-save').value ;
    const saveAverage = parseFloat(savePercent) / 100 * income ;
    const saveMoney = totalBalance -saveAverage ;
    const romaining = saveMoney - totalBalance
    const addSave = document.getElementById('saving-amount') 
    const romainingBalance = document.getElementById("remaining-balance") 
    addSave.innerText = saveMoney 
    romaining.innerText = romainingBalance
    })
 })


// function saveMoney(){
//     const savePercent = document.getElementById('input-save').value ;
//     const saveAverage = parseFloat(savePercent) / 100 * income ;
//     const saveMoney = totalBalance -saveAverage ;
//     const romaining = saveMoney - totalBalance
//     const addSave = document.getElementById('saving-amount') 
//     const romainingBalance = document.getElementById("remaining-balance") 
//     addSave.innerText = saveMoney 
//     romaining.innerText = romainingBalance
// }
// saveMoney()