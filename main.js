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
    mole1 = moleCalculation(convertToMass(per1), elm1);
    mole2 = moleCalculation(convertToMass(per2), elm2);
    mole3 = moleCalculation(convertToMass(per3), elm3);
    mole4 = moleCalculation(convertToMass(per4), elm4);
    let min = Math.min(mole1, mole2, mole3, mole4);
    ratio1 = mole1 / min;
    ratio2 = mole2 / min;
    ratio3 = mole3 / min;
    ratio4 = mole4 / min;
}

submit.onclick = () => {
    ratioCalculation();
    alert(`${ratio1} ${ratio2} ${ratio3} ${ratio4}`);
}