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
let mass1;
let mass2;
let mass3;
let mass4;
let mole1;
let mole2;
let mole3;
let mole4;

function convertToMass(percent, store){
    store = percent.value * 0.01 * mass.value;
}

function moleCalculation(eleMass, moleMass, store){
    store = eleMass / moleMass;
}