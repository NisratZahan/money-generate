const incomeInput=document.getElementById('income-Amount');
const foodAmount=document.getElementById('food-Amount');
const rentAmount=document.getElementById('rent-Amount');
const clothesAmount=document.getElementById('clothes-Amount');
const calculateBtn=document.getElementById('calculate-Btn');
const totalExpanse=document.getElementById('total-Expanse');
const totalBalance=document.getElementById('total-Balance');
const saveInput=document.getElementById('save-Input');
const saveBtn=document.getElementById('save-Btn');
const saveAmount=document.getElementById('save-Amount');
const remainingBalance=document.getElementById('remaining-Balance');

calculateBtn.addEventListener('click',function(){
    const income=incomeInput.value;
    const food=foodAmount.value;
    const rent=rentAmount.value;
    const cloth=clothesAmount.value;
    
    if(income===""||food===""||rent===""||cloth===""){
        alert("Please Fill Up All the Field");
        return;
    }
    if(isNaN(income)||isNaN(food)||isNaN(rent)||isNaN(cloth)){
        alert("please Enter a Valid Number");
        return;
    }

    const totalExp=(parseFloat(food) + parseFloat(rent) +parseFloat(cloth)).toFixed(2);
    totalExpanse.innerText=totalExp;
    const totalBal=(parseFloat(income)-parseFloat(totalExp)).toFixed(2);
    totalBalance.innerText=totalBal;

    if(totalBalance<0){
        alert("You Have No Balance");
        totalBalance.innerText="";
        totalExpanse.innerText="";
    }
    incomeInput.value="";
    foodAmount.value="";
    rentAmount.value="";
    clothesAmount.value="";

    saveBtn.addEventListener("click",function(){
        const save=saveInput.value;
        const totalBal=parseFloat(totalBalance.innerText);
        const percentage=parseFloat(save)/100;
        const saveBalance=(totalBal*percentage).toFixed(2);
        saveAmount.innerText=saveBalance+"taka";
        const remainingBal=(parseFloat(totalBal
        )-parseFloat(saveBalance)).toFixed(2);
        remainingBalance.innerText=remainingBal+"taka";

        if(save===""||isNaN(save)){
            alert("Please inter valid number");
            return;
        }
        if(remainingBal<0){
            alert("You have no money left for savings");
            saveAmount.innerText="";
            remainingBalance="";
        }
        saveInput.value=""
    })
})

