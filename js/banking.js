function inputFild(inputId){
   const inputfild=document.getElementById(inputId);
   const inputFildInValue=Number(inputfild.value);
   inputfild.value = '';
   return inputFildInValue;
}

function getInnerTextValue(fildId){
   const innerTextvalue =document.getElementById(fildId);
   const innerTextvalueText = Number(innerTextvalue.innerText);
   return innerTextvalueText;
}

function totalFild(totalfild,amount){
   const total=document.getElementById(totalfild);
   const totalInnerText = Number(total.innerText);
   const newtotal = totalInnerText + amount;
   total.innerText = newtotal;
}


function updateBalance(amount,isin){
   const balanceTotal=document.getElementById('blance-total');
   const balanceTotalText =Number(balanceTotal.innerText);
   let newBalance;
   if(isin){
      newBalance =balanceTotalText + amount;
   }else{
       newBalance =balanceTotalText - amount;
   }
   balanceTotal.innerText = newBalance;
}


//deposit-button
document.getElementById('deposit-button').addEventListener('click',function(){
   const depositInput= inputFild('deposit-input');
   if(depositInput > 0){
      totalFild('deposit-Total',depositInput);
      updateBalance(depositInput,true)
   }

})

//withdrow-button
document.getElementById('withdrow-button').addEventListener('click',function(){
   const withdowInput=inputFild('withdow-input');
   const blance =getInnerTextValue('blance-total');
   if(withdowInput > 0  && withdowInput <= blance){
      totalFild('withdrow-total',withdowInput);
      updateBalance(withdowInput,false);
   }
})