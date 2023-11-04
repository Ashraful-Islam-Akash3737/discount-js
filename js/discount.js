function inputText(inputId){
    const inputValue = document.getElementById(inputId);
    const inputValueString = inputValue.innerText;
    const inputValueIs = parseFloat(inputValueString);
    return inputValueIs;
}

function innerText (inputId, newValue){
    const pay = document.getElementById(inputId);
    pay.innerText = newValue ; 
}

document.getElementById('apply-btn').addEventListener('click', function(){
    const totalPrice = inputText('total-price');
    const totalDiscount = inputText('total-discount');
    
    const totalDiscountAmount = (totalPrice * totalDiscount) / 100;
    const totalDiscountAmountValue = totalPrice - totalDiscountAmount;

    
    const totalPay = inputText('total-pay');
    const totalPayAmount = totalPay + totalDiscountAmountValue;
    
    innerText ('total-pay', totalPayAmount);
    
    // const text = event.target.value;
    const btn = document.getElementById('apply-btn');
    btn.setAttribute('disabled', true);


})

document.getElementById('apply-btn').addEventListener('keypress', function(event){

})
