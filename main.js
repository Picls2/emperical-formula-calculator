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
let PercentDiv = document.getElementById("convertPercent");
let molesDiv = document.getElementById("convertMoles");
let ratioDiv = document.getElementById("convertRatio");
let mole1;
let mole2;
let mole3;
let mole4;
let ratio1;
let ratio2;
let ratio3;
let ratio4;
let min;

function convertToMass(percent){
    return percent.value * 0.01 * mass.value;
}

function moleCalculation(eleMass, ele){
    return Math.round(eleMass / pTable[ele.value]["mass"] * 10000) / 10000;
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
    min = Math.min(...arr);
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
     PercentDiv.innerHTML = 
     `${elm1.value != "" ? elm1.value + ": ": ""} ${per1.value > 0 ? per1.value + " * " +  0.01 + " * " + mass.value + " = " + convertToMass(per1) + "g" : ""} <br />
     ${elm2.value != "" ? elm2.value  + ": " : ""} ${per2.value > 0 ? per2.value + " * " + 0.01 + " * " + mass.value + " = " + convertToMass(per2) + "g" : ""} <br />
     ${elm3.value != "" ? elm3.value + ": " : ""} ${per3.value > 0 ? per3.value + " * " + 0.01 + " * " + mass.value + " = " + convertToMass(per3) + "g" : ""} <br />
     ${elm4.value != "" ? elm4.value + ": " : ""} ${per4.value > 0 ? per4.value + " * " + 0.01 + " * " + mass.value + " = " + convertToMass(per4) + "g" : ""}`
     molesDiv.innerHTML = 
     `${elm1.value != "" ? elm1.value + ": " : ""} ${per1.value > 0 ? convertToMass(per1) + " / " + pTable[elm1.value]["mass"] + " = " + moleCalculation(convertToMass(per1), elm1) + " moles" : ""} <br />
     ${elm2.value != "" ? elm2.value + ": " : ""} ${per2.value > 0 ? convertToMass(per2) + " / " + pTable[elm2.value]["mass"] + " = " +  moleCalculation(convertToMass(per2), elm2) + " moles" : ""} <br />
     ${elm3.value != "" ? elm3.value + ": " : ""} ${per3.value > 0 ? convertToMass(per3) + " / " + pTable[elm3.value]["mass"] + " = " +  moleCalculation(convertToMass(per3), elm3) + " moles" : ""} <br />
     ${elm4.value != "" ? elm4.value + ": " : ""} ${per4.value > 0 ? convertToMass(per4) + " / " + pTable[elm4.value]["mass"] + " = " +  moleCalculation(convertToMass(per4), elm4) + " moles" : ""}`
    ratioDiv.innerHTML = 
    `${elm1.value != "" ? elm1.value + ": " : ""} ${per1.value > 0 ? mole1 + " / " + min + " = " + ratio1 : ""} <br />
    ${elm2.value != "" ? elm2.value + ": " : ""} ${per2.value > 0 ? mole2 + " / " + min + " = " + ratio2 : ""} <br />
    ${elm3.value != "" ? elm3.value + ": " : ""} ${per3.value > 0 ? mole3 + " / " + min + " = " + ratio3 : ""} <br />
    ${elm4.value != "" ? elm4.value + ": " : ""} ${per4.value > 0 ? mole4 + " / " + min + " = " + ratio4 : ""} <br />
    `
    answerDiv.innerHTML = `Answer: ${elm1.value != "" ? elm1.value : ""}<sub>${ratio1 != 1 && ratio1 != 0  && ratio1 != undefined ? ratio1 : ""}</sub>${elm2.value != "" ? elm2.value : ""}<sub>${ratio2  != 1 && ratio2 != 0  && ratio2 != undefined ? ratio2 : ""}</sub>${elm3.value != "" ? elm3.value : ""}<sub>${ratio3  != 1 && ratio3 != 0  && ratio3 != undefined? ratio3 : ""}</sub>${elm4.value != "" ? elm4.value : ""}<sub>${ratio4  != 1 && ratio4 != 0 && ratio4 != undefined ? ratio4 : ""}</sub>`;
}