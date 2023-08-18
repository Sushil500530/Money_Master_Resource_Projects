
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
    if(totalCalculate > income){
        alert('Your income is less than expenses...!')
        return ;
    }
    const totalExpanses = document.getElementById('total-expenses')
    totalExpanses.innerText = `${totalCalculate}tk`
    
    // balance 
    const totalBalance = income - totalCalculate ;
    // console.log(totalBalance)
    // get value balance
    const balance = document.getElementById('balance')
    balance.innerText = `${totalBalance}tk`;
    document.getElementById('btn-save').addEventListener('click',function(){
    const savePercent = document.getElementById('input-save').value ;
    const saveAverage = parseFloat(savePercent) / 100 * income ;
    // const saveMoney = income -saveAverage ;
    const immediatlySave = totalBalance - saveAverage
    if(saveAverage > immediatlySave){
        alert('Saving Amount is not available...!')
        return ;
    }
    const addSave = document.getElementById('saving-amount') 
    addSave.innerText = saveAverage 
    // console.log(addSave)
    const romainingBalance = document.getElementById("remaining-balance") 
    romainingBalance.innerText = immediatlySave ;
    
    })
 })


