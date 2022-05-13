import pTable from './periodictable.json' assert {type: 'json'};

let elm1 = document.getElementById("elm1");
let elm2 = document.getElementById("elm2");
let elm3 = document.getElementById("elm3");
let elm4 = document.getElementById("elm4");
let per1 = document.getElementById("per1");
let per2 = document.getElementById("per2");
let per3 = document.getElementById("per3");
let per4 = document.getElementById("per4");
let mass = document.getElementById("mass");
const submit = document.getElementById("submit");
let answerDiv = document.getElementById("answer");
let mole1;
let mole2;
let mole3;
let mole4;
let ratio1;
let ratio2;
let ratio3;
let ratio4;

function convertToMass(percent){
    return percent.value * 0.01 * mass.value;
}

function moleCalculation(eleMass, ele){
    return eleMass / pTable[ele.value]["mass"];
}

function ratioCalculation(){
    let arr = []
    if(per1.value > 0){
        mole1 = moleCalculation(convertToMass(per1), elm1);
        arr.push(mole1);
    }
    if(per2.value > 0){
        mole2 = moleCalculation(convertToMass(per2), elm2);
        arr.push(mole2);
    }
    if(per3.value > 0){
        mole3 = moleCalculation(convertToMass(per3), elm3);
        arr.push(mole3);
    }if(per4.value > 0){
        mole4 = moleCalculation(convertToMass(per4), elm4);
        arr.push(mole4);
    }
    let min = Math.min(...arr);
    if(per1.value > 0){
        ratio1 = Math.round(mole1 / min * 100) / 100;
        if(ratio1 - Math.round(ratio1) <= 0.1){
            ratio1 = Math.round(ratio1);
        }
    }
    if(per2.value > 0){
        ratio2 = Math.round(mole2 / min * 100) / 100;
        if(ratio2 - Math.round(ratio2) <= 0.1){
            ratio2 = Math.round(ratio2);
        }
    }
    if(per3.value > 0){
        ratio3 = Math.round(mole3 / min * 100) / 100;
        if(ratio3 - Math.round(ratio3) <= 0.1){
            ratio3 = Math.round(ratio3);
        }
    }if(per4.value > 0){
        ratio4 = Math.round(mole4 / min * 100) / 100;
        if(ratio4 - Math.round(ratio4) <= 0.1){
            ratio4 = Math.round(ratio4);
        }
    }
}

submit.onclick = () => {
    ratioCalculation();
    answerDiv.innerHTML = `Answer: ${elm1.value != "" ? elm1.value : ""}<sub>${per1.value > 0 ? ratio1 : ""}</sub>${elm2.value != "" ? elm2.value : ""}<sub>${per2.value > 0 ? ratio2 : ""}</sub>${elm3.value != "" ? elm3.value : ""}<sub>${per3.value > 0 ? ratio3 : ""}</sub>${elm4.value != "" ? elm4.value : ""}<sub>${per4.value > 0 ? ratio4 : ""}</sub>`;
}