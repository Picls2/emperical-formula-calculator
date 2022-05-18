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
let capybara = document.getElementById("capybara");
let body = document.getElementById("body");
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

capybara.onclick = () => {
    body.style.background = "URL('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFRUZGRgaHBgYGRoaGhwYGhkaGhgZGRgaHBwcIS4lHB8rHxoYJjgmKzAxNTU1HCQ7QDs0Py40NTEBDAwMEA8QHhISHzQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUGBwj/xABBEAABAgQEAwYEBAQEBQUAAAABAhEAAyExBBJBUWFxgQUTIpGhsQYywfAUQtHhB1Ji8RVygqIjJJKT0hYzU2Oy/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAlEQADAQACAgICAgMBAAAAAAAAARECEiEDMUFhMlET4XGhsQT/2gAMAwEAAhEDEQA/AKRRUwgiLCkXiBRHJTpgLLDFEH7uGCIKEAmXDZIs5IiZcFHAGWGKIMRESIAhXKIcCCkQ4RAKDJTESiDBMTCIKEKoRD5Ys91DGTBQhXywgmDiVEjKgoQABDKRBxLh+7goQq5YWWLC0RAogo4DaIqTBMkNlgFAOWIlEGyw/dwAVskIxYyRBaIAAkREpgwRDmXDABkiOSLCNjDqRBQBhEPkgqREmhUIAyQgiCwzQABVLiHdxZaEUwAV+7iPdxYAhNCpJsqRUwgiDlNYfLCpsB7uIlEWMsLLBRQrZYfJBssIwUZWVLgapcWjETBRFXJEkJiymW8LuIKEB91C7qDANDfiBYcoKNIgWFTFbFdoy5bZ1M/B/aHnTxqYzZqkEuWOrmv3rErao+Dhr50moMOA8ct2l2zkBQgeIgMdEvr5RY7B7bzLTIIJBBAKlFSswSVVJqQwMaLLapDaTh0Pdw4RFoIiKkxNKK60QIoiypMNlgooVVogRTF4y3gUyVC5CaKrQwiwlAh1SxC5IEgERIiwEPaEJZJoIFpBxKZELLFv8KX9P3iS8Kf1PDWK5C4lEyngiUNBESFO8RXIIgb6BZI5BA1qAgiMOowy5ELmVCJIiClCJGXDCXC5igwUIcqEP3cIopC5CgwUIi4g4ljLxgOWBuBDpFoiATF9Ut4H3UFLKvSGKYu93Ee6go4VkohzKi2JbRIS4YoZ6sPtDdxGkJcMUwhwpplw5RFlSdY5ztXtoOUIqzufcCKyqyddGX8Rdt5FhCS/zAtuNIyh20WzH7o0QxuFSoksb3NSb3eK6JIYkpoA5b16RTWfQZei8jGqWaO17E8dIU+cwYkkmjW97xmntaczSpakpNAoJck82YcotYXBKygqXmVc1dn/ACvrYxL8fHtlrd6QDEgFJzfNbizecWuxJDrSsIZvzPqzUB5+sHOFJN60LsANIv8AZxCWSwIq7V9BrA9NZFxuqbmHxJFFA/fIRdQpJ194ykopmABB2uDegAvq1IP3tPzcDRYPLX3hrsGoaBQBAlHaFLxJ/Mx8m9TDTselFTlB01fi0TroEqMtJiKZJIqYHLxD1L1++kSVijrSJTpXEInCh3P3wgqpSSPOKv4oAV/SJInA78xDSQnkOjKnpEFzgNB+3SILUgDWu/28AATt9PYRXQQtGbw9ICmYVKZi33ppDJU2/lSCZ/6fVq+3tDFA6TTQcNYSsODUg84EhaTa/MU5+0OsgMW/XWKFAqUCzGIzMG/Hh/eHlzHZz6/RotIOxHUN6xm0OGacCWrSKq5d2FI6MoBFXPT94rz8KDamwiWoEOfEs7QsnAxdxIKLAmAYbEBRrSBcSXUBIGx8ohTaL65wTtA/xSeED4/sXZ1PcREy9IvKQ8MJcTyNoUO7iQl6RdyCEZcHIIVDJgZQY0EoaEJb1goQppEMuXtFiZLIiExOVClbJJbkCYpMTRg9qzHBQCwHzVYk3AcfSOZmSg7BmFHG1dNqxWxPbwUpisAl3fjasPhlOuhzA1IfUN6UEbtccmKd0RnYZROjXH6WiaMLlHGxYcOvlGolFApTAUbhwdukBmLSKAEsCeLB/wApvXatI5lp06ePRkzZKmYGjs1eQDaXEERKJADW8rNXXWLBnXYBtmvZqu7Nx5bEicNmTm4Xc/La9ze962iuRPHoqFbE01qDy9dP2g6Q5BBG7gU4gtb9OsJeEZT8aaVf74bPrJGEIDvazXDsC+wsddYb0mNZZo4dYdnAf+aqT9W+7iCLmgfM+xAqpJ3ayxQaVcFrwKW2XxUHzeROYDoGYuGgk9QYpcGjDcuE5We/zCnraDImgE6eQwzOS1QVA81Jez/ZtGZLmKWuoZjQV4sePWloeajOzKcHwsfCoqOV0jUG7j/Nd4tYJKwnxKUqxHiBLVBDUpQuDtR4vr2yF+jTw4JDEEdIitKXcKDjQEEjzrClFwA1TYKZzQsxNYLmdNQWYs4IIOoULgxLShSbKveVuaWFzfm3nBQQrVb7At7XivMkoFQGbQGvqaiHlIF0mgvoU/6dOdBE2DlDoQfyqrqFVHItY9Ik606ZeADg9WiL5rV6udOo2gkrEGgT1Bce4b+8VQhBJch1GujUudhS0FRId68eJr614w605ro5PTqFD2oYEiZXKykHifNjrygoQOpCgBQH0I0tvB5C8wIULattu+sVkVqF5uDDN03giFrFQSphqw9usFDiOvChNQwrXQV4io9IMZmQCpL8SacxFZOLJPyEMKsxvuNbcYcBCnY0Iqnca0F9wdIb1SUp6LgxAFa73P6Rblzgq3V4zJEkAZSptnKXoaGt/ODJQtJu4++HLjA1RlrF4ULFR6xg4ns4hZSn0dhHRycQLEfUft6RbRIQTmAqdYhJNxk6y5UcP+GVmykF4sf4UdjHWzMMM2YCsNMmF7RovAv2YvbNGZMa0U1TVF7xcWptHeJBJ1blHO0dVKXeFoZM1Qa/WLfd1v8ApEyktQDlBGFIy5j3ETNLRBCn0ZokTDSEJKniM1QAtA1KiSE6w7APB+3MIJU1aGqlawHowd0+hEXOw1mgKqC2teUdF/ETsdlmelLhQBU38wGVm4hvIxysieEpBAFFMo2ukH1AbpHUnywYNcdHVqnAAbNXbax2t5wMpSWcgNrrsfoekZCO0GfUP61BB5uYAvGVo7a7hqdaN5Ry/wAbp1rSh0CJTbXqWI/KxIFWqK+tovy6ClRdi3psfQ76xzcvtOgL/Zr6N6wRXaYJ/qH+4avzF+IiHnRVR0uUKuP356u3tA5aPduBH0obbk7RXw0/Nla24vSvs3rFydMLKpoT18VH3qmJSYNlQTGSCHNVBSbFqEX1KQU8xDLWMue5RQ0JcBiQeOr7GBzi7pUzFQtRydOFTfhE5koMASWo/GjW0oBTUAaxsjJlfCS0j5lOQSMxuHUa83N+DQYcUl3JpXYuxvydwxh1C4YXatiHQQdtTEs7MxPSrPseb9CIuihYSkJDoDMSWFeNH1uehiYWaHUihNlirpPKvGhgaZhYqADMKAF6777n9YkhTXcgErIu1mIfkOFRziWxpElozChyGhADNy5XDcKForiWpBcqZT2U7B9+HECL65YJTo5Y8XArT78miC1EkpUNcoNOY5g/dIVHCMtJdyrYghiQ/EGovxprFhZDVBPJy3N/EOcClAJAZwwdgXFRWh01iaRUMR0NTqGr6DygvY4KYsFPzN/U7vzTwb6wNLN4sqnqK0szMqkEQKlg73oK8xv00ga5BclJKCbgElJ1tVta0HCBMmEu6SlVUKTuaLSeCgPoxrBFzSPCA/Jy1dioEQCRiq+J0qtloocxQsGiyuelw4Dn8tPs8obf7GvoGs1ZagCXajN0ennAlyg4qltLua1qRTm8WFTkgsHexHhHOiv3iGRQtvp7FIZj5wkDArDqAdxcZg+bko16Rcwqg3gUQLAO5BuRW2lNmgKAdXY2UwIKhVlDU8aQQIUDRIqLvRX9KvIkG9oqkwvompV8xY7gPw8Q+tI0MIrLchtwXB+ojGk5gosf9CtDqxNenlwuyplRRtS1/LUU5wmNG/lDOzwLKP5YFJOYUVT72iS876ecdXj1Ucu8xku8aBqnRWXM3h5SS7npHHDeh+91h0zoZ4BNSXcQ4OlzO9YYrikmZtBRPEIVDMIZ4GVQyJ6c2TMMw0cP5QBSa5IUkhQBB0IcRyHbXwZJWVGX/wAIqYnKHS4BA8LsLm0dkpYEZkztbD5yiYVA6HKW84vC18E70jgV/B6ZQdeI/wBhanWn7nqCVhpBUQCpStLB97x3KuxjOBKJqD/KFA25vA/8JnSRSTImEVJdo0edP2Z856OZmdnIICcgHUA/fWMbHYEoWaMHp7R6AvtUoSCrDygp/wApdvKM/tNQmpJKEpPB3iNZWe0zTG23GYeAmM2+g0LA/wDiOhi6vEu+gLs3HOlR8inzjNMsoVWjfZMFlGrHy2DJB8rRgjpZflICnzaih0UCVgnnlAPSHmGgc5SFMTo2Vw/Cqh0iOEbKkvZAvvko3/UrzMQXPYkGr5WfXwpu27rbpGq7M2HBALPegB1CQAw+6+0SHs1WI/6ajyzeRiqZ2c5gCClT2FCgkLS2tCOYOlGvSGIpbwtx0fcc/wBTA+hLsuYZAqANHCRR6WHMa7gbQJRq3Eo2+ajcCXB5ne6loLsDQ24GrD7s2kNOlmqqhwPNKmT1Z+dYhmiLFwkOz0BoCk0b3f8A1RIh/EqzVpQPc8nFrhhu0CRNzhufXMkgMf8AMB67wlzDRQv+Ybu4rs6gOpMIB1TGd6tqC9Neur8S0IrGz3p+/WHKAS6b1IBoWLAgjgWrCU4Dkat4aNx2s3tyBk5hSSDZRArZ2epvv9YirMPmBGx0PW3T9YZCntoRryNONdYKiaGIIvVm22I/R4VAGqSlSfmLs2oPq1bawyFAeFRJG5SCRzcVHGDizhLasDQ8hpSK/ePoDxDgi4Yh9tBQsYqihFZOaviGwALcntyt7xJSUsxL7Fm5A/ynjoxpArlqPUhtOXDcdRBE5XYpajjVJHSjP05UhpiaGE1z4ga0cinIl6GzUpB0zVCiVAm+UgsrhR97VOo2hky38KqW3IIHEiv3aGSQgkO3Ngl/p+8FCD/iErYNlXdIO4uAXre1DFzDYktY8QatyNxFDFFChVL2chgoGteg4nrEMNNUk0OZBq4JzA/XW8NslHS4bEZreo99HipiRMzFlpA2Lv7wPBzhoSxsRcD6/d4szcO5fMPL94S1A1mmf2b2qlY8YZQuDpz2jWTMePPMFgjLl0UXS5ClKJ0qOAN2jqvhvtBc1KwQMyFZX3FWfjSBJ9/JGkumb2U7wJUxrwXu/DesYPxJ2guUlAADrVlfYUduNYcJZPtLtUIHgDqNm15DWMNXb5JOZRAFCBQgmM7G4IzJdVF1MSoKI09htD4TspQl+BBJFsyiM5GpJ0PtCWau2aevSKvYvxVNXOUVrUEqzBKKBKWZg7OVXrF3B9nk4mViJM1QVn/4gWoqdB+YJfcPQ2LbRjGVlWpE8ywsEqGTKEoDEeOgzHRhW/CCTceZagBpoCDsQ1RvcbxvtNO5/ozzNZj/ALPTpuKUgZhLWsaMw9TFLH9szZoyolIR/UpQfo0efzviWbMASVnIHoDrUa3/ALxBWPWwqQDxZ/tonlpKLoOGbWztpMierw/i5aeAAI84PJ+H5gCv+cQyrvr5mkeeDHqBuejnk/7RoYPt9aCMzEbKAP0hqr2v9ieE/TOxn4ZcpGT8TJyjZPi9zAJMxCz41rUdwnw+31i32B24ieyEiUlWykUPIx1BlTkkDupRBuQSG6NFrK0ujNt5fZwfaOFR8yH4OPtvvnGEsEENuB0Dkn1UY9Q7Qw+ZwqQ/EKLPHC9q4AglWQg1ADUAND516RhvHFnT498kZ/e+FuB9AfYgxAoBDEP4RR9UmlOhivMLMk8SfVn+94WHW4Jq7H2BHUuYWXCtKmkhQufmJY8QQSCroR5htosSJgLtoQQCLVKaWpQPv6xUQoHUAUDFjrfStQ/IQeWK5tavqw22YDNX+kXhsSNBMyrUbQG4NDXelQeJ2gpmmpsRpobCh9YohbKTzIYvRT006cq8ySVsClQ1LGjgO4fcCu8ZaNERT5U6ZiVZteL+USHiKjZKgHfTMAx6G/Mw01BBIN1B3G5BY7XBtY8xFcLAWXqCHrVnUyg3Nj52pAgZbSskFhVg766O+9ubawVExRAL0ar0PQjlFVE1iAag5k70NvQny5RNM1Om4cf5i5TwL+IHWEAZZADgEcQbH93t7Q6TQF6j8wdxs+3OAiYxIBpUEGoIJpyO4u7w8uY/hJqLHUg6Fqb13gAsFZu9dOPMen3SnMnDiLu1wdwNH4X2iRmbEFiw05A+n3erMxFXAfQ7kF6HRx+sNAywhZu7i4Var7tx6QReI2pV2LkO1aaOOY1ipIWrSxfkfPVmvvFjMycyb6pduJvQaljr1goQKqaQHOl0moI3479XY3ihNx6irKFMNUFiGGqbuncekNiMSMrCmySLEmoY2r9Q+2ShG5Yggbs9iDdtIpEs3ETgsOKLSw/pWAXALm+xfW8IFOUkJoPE1Q1Xp1HQgxSQguFAVDoUDVw/ynfWvLlFrDKBo76sa+FQ1PQjrDEauGnsAp21O+j1G9+u4jYl4lJD/R/WObM5KRk12LVFi25ZqRcwWC8A/wCIGFA920hd/A6l7MEYtK/ygKB5A3cEflMdZ8PYQoQSQ2clXTR44Lu1S2ObMX8RIqR+XMxYm8dd8Kdr53lnT5eFLRS6ZGu0dK0ZPxDhCtAID5CFdNWjcyFo5T4r7XyNLGvzcaWgpCXZhHFpR+UFRPMC1h+YvC/xJQVlXmCjv4b0evWM7u1THObKXGUgOQPzZXLA20hsFg+71JUVupSi6lAAsCdNPWFxTXbNOTT6RWxPYa5k0qQ6gU+Muygp6sON7amOg7Y7NROQB8qgMrgWAo1q6Q0oVB9wItrmBqmlGrR+YNPfnFPenPoM5yr9nPYX4VN1zABqwJJ2vrG1L7OkIDZSrnRzy+/0JKxNwAwFLiK018126DUPqfYQcnr2HHK9BVFFghFNAPciKs7BSlu6QHH5SX8iCDraCEn819KD6s8CWgbtXU3LWqKQ4JsycRhFSWWhTj+YBm2esdx8Lz5mKQcmIUhaQHSSWOxEcxMWpPzChuR9aWYa/wBm+HFplYlAzFKFnKcpIyvZm4tFJ99kaz10durCdoJVcqD2cFxF2di5ik5V4Vb6keKtr+cXF4MAsjGTUnZ83uIfuJyUn/nFnYmW7dAKxqs/5MORwnb3ZgU6koUgsBa/ha8YM3wADWqiOCQP/ER6ZPnLsvEZhxw6i/UCMDtXslC/EFcfkUgmooxjDWZ2jfHkvTObQhqE331o56VV6RaQs+E1N+eYNQjc248HgOOWErB0TU8205APFaXP/KK0tuKsPImujQl2qW+maXf0Zs31Sdn1IqOIbaHRigSFByCxeujCo0Iq/KM+aoCyjR+YCr2sXq/KI4aYHLkB67A0cZhz1GwfgtLopM11rGUjao4MQSG0DB2/SmfPxLTBsz80kVHofsUHiMZkLFxZj7Cm1GI9Ip4jFBRCiOo/TS0RnLK0zQlzhQFiLE6O4FerKfb1JNm14Gx53BGtagjfehxUYtvDrpsdL6UYHkOMOrFNY04+o5+/WLeCeRufiqZSa78r/fF4kmaMoKSKH62O3622jI/FvwIr6X5X6dGkjEba0IrtQfToIniVTUnTqvoaEcz8w5KIpz4RFC81eLKG+xD705xmJnUYfehHUEdHjTlLBLUB9DuH41hNQEy0mWwpqfXQ+TeXmMzH63oKnfnuOogpWGFbio5Wb9OVneKqwFVBv5G33v7lQdGEmvDho3E8r8IdckCiiBmBSDZiTTzMOhfhPLc6aP7H9IHMnFyk2odqWceh501ctCYkrWA4ukssHZ2cNpRuDDeJCaUkKQQ+lLijpPv0gUuYQrYmnBXN9f3gsjCLWoABquTZqnSHpwlKgwvOolQDAuNQHr6bRaRiUNVIJ3dvSLWJwCkIqgtqf7RPB4VeQNIKhu1/SJVM9u+jmsRNodadfug+zD/C/efjJaUOa51kmgSL2oeu4jaxHwstTFExIds1Ekh73V9I3+w+w0YYKKCpS1NmUpnpoAPlHCOjKaXaJ1pN9M2853jyv4oz/jJiVuD86CCapNr08tjHp2XzjK7c7DRiQkrKkrS+VSWeuhBoocIWehM4XDzKDRx1+6n7EaeGQ9S4ryHrrFjD/Cq0uVzElny0SCW5K+jRWnhSAx5FrGoFPvSI3U4a5aaqDKygENfX6jeh+zAZiixb/wDPQgu+kUUrcmoZ1aPvob1d+UTGIzHian0B+o6QJA2Mmab+nADcReSsqArd2IZj+9qA+0AKEkWAPzVpWgrZj98ImhbPR9wlwfNj9WhgTLg0Uz6GoJYO1eX3WCMbOLflIckf0n6Hzh6GzMWLGjtoSDSvqdIcJe9R1Khzbj7NDEVMQmlqORR6abAiv94x8QChQPEK4uDQ8+PWOnXLyhzfiMzhv6esYnaoBDpZtNR0Jty5wkxw9Ww07vJaCcWEEpTRIS9RuXi4ns92fFTTsxSH5sKxm/CnaKE4OUVEPlGhNv8AKItr7XUapJKR/LImqPnQR15aipyaTrL3+HKf/wB+a2zpb1TBv8ODMVrPPL+kc9N7bnJV4Up/1SZyVH3DwVPbOKDEy08si34XIg5ZFGZ3xP8ADCVS15RViSf7R5MhbMNi/Wj20ePb8TPnrQcyJdQf/kJHRJvHiGOklE9aCKoUoG+9L14xLyr0WtOdlhWJL/V7Hfr91gc5RSMw6Br6W50isDVuNrNGz2ThFzVJlBTZzqKCjxm+jVdkexkzMQruSA5BKQqj0qB521i2fhmdnICFAg+7Cm4v5R2+E+FcShSFBUkZag92XB6NvG0ezcWaifKfhL087w14/pkvy/Z5fM+Ep4U2UWBpxLejwHD/AAzPUnMEG5zg0tf0rHqcnsTFhTqxCFXpkP0V9tGjL7NWkMcinZ2K0WdjrvFrx39iflPJ0fCGIplS5FqtY2rDr+EcSmollqG4oXc0vpHqeeYg0wylcRMQeP5mMI4+cWAwiv8AuIH1MH8S/bF/Lo8Ux0peHWRNSUm4BDWd+enpAcP2mHyk6DzdSgedjHpvxv2RMxcpu4CFIzKSQtJLtV6WjxaaFIWQoMUliDcEU+kR/Gq0aLfVOwwmJKhbY0PD+9K0e8aKEP7v5safSn1wOy8clQChQgjRxZyOVekbyZuoqDo7NuARatQRvHPrMcNc6oXuw77/AGRyqIaZhgz6dCRxppbpDmZRnY3D0L6KD6ttSvnVOKdyKK0IL+bexrEwpsmjC2chn0LNtflG3gJaQKqAbiz8aQDsTJNos+KNLEyJKRlV0pA83tk63OkZGIBWvKJjvap6Bo3ZHY85KQPxBTwymnpGAjCyys3CRVmd67vHR4aXKKQc6/8AuLHo8X4knTDTZPG9rzmHdoDGgPcLIbnmrFjDhZDrUlSjXMlORJBqCAbUI6vF2T2rdPczEMzZ0MDxcEj1gXeP+0bbf3ScL6Bd2N6+kQxAWA6FJSoVzKTnSAKkkCpoC3Fotd2Gv+sRExuXGIXTLeejPwXa05j3iAwoT3CwG3fNSK+MwkrEpIBBUasAA3FhUdY3Z/alk9zMW7vkQ4HHMSB6wBWGQtRaUpJLBWY5AeJyq8Ua6zyUtIy+Lp5r2n2cqX4Robj7+6xkKUUvpYR6F8YIlyEINGJINXqwr97xw+LWhQzIrQO2zxglrLjN6tKoDKmq1t97RdlYj9Li1/b9jGOldWdm9ItpmDfb+4h6EjU76thxFwRzu33zLKW5Nel/e1IzErTp6aeenL9YMudlDuXq1WPn5Qii9OxDJICt2DljWz3Bd715xzuImqJ86m7PYxexJKgVU0r5f3iGBwxmqCBfoX/X94aEeq/w6xI/BISojMCoNSviLER1gmA6Rz/wf2aZWHCFOKvUNeN8SxvHbi8Ucm/yY1NvWJhoEqXtE0J4RRJJo8E/iDhDL7SngWXkWP8AWgA+oMe6LK3ZIl/6lH6CPGv4lBR7RL5cxlygcpJA+Y6gVYj0ideh49nLSEkqAPnHT/A8hS8eiWPyoK+QBD/pFPA4UIVmIcAFXOlBB/4YYzN2lmUQCuXMYcXSpvIExhhcmb6fHJ7pk394iaV9hCChEJoLeEgcwT7GOk5hkrc/Io8aD3LwZSdvUmKWab/9fksfUvBpSlVzZeaQfrAhhFJAuHhxwESUNTaIu9oAITEBVCKR5h/En4NCkqxMhPiSHWkD5gGDgbiLHxZ8bYzD4ydh5SJBRLTLLrRMUomYgKrkWNSatSMBP8R8dMRmCMKfmdOWY4CUqV4mmUfLTQuKwmgWocD2fi8iuDv98I63AzMyQpNRcDWlHHWn3TncX2ZOmTnUmXLMxTZUqASC4z5UlRLB3PVqROVKxKQCMoSxIOYZcuTNmd7MPPSMt+Ll2vZpjy8fZ2QQSkLFd2q3PYefs/PdpT2cgM12c8teEVsPPxJJIKUkLUhVVeEpCSSWNQokDVy24hpqcUXzIl1IBctV2I+a4N+erxnnwNey9eZM2/g7GLmzgh6sSDclq9aR2ePw62fMCbEszfvHnfYmJxGHnIWESkkZmzhShUZWUAsGy3vpwIjdV8b41YLSsIRRnSoFWZWVIbvCxUXZ6U5QvJ/59a/ES8y+TZw+HU7MCdHGv6Rtfh5388v/AKP2jz9HxJjCApMrDkqVlDBRB8OYHNnsbc7tHqGAxKFS0Fy5SklklnIBMYZ8G8fl/wBK55foeSjLZzRnUpSjxvBQoaftChRq2zRJC7wOzp8xDEj7tChQkAOejNdxRnSpSTwtFFeNUhYRnvUAoKieAUKK94UKNM6ZGsqHMfxIx4WiUgghXjUoFKkM+UCiuIMcx2dICEISSMy6kFwoZk5g7ijACHhRXk+SMfBs9h/DX4pa0qISkJccyaffCNXGfw2UPkmkcFB9/wBoUKL8eE12TvbT6M6f/D/EJByrBOzEUcB/X0jOxPwfiZKFTphSUpZw5dnAH0hQob8eYw5umeMSEUCqmg2vrtHoP8N+xwpCsQsAuopRTRNCeJzOKbQoUZePK5Fb04d+hGym4NBClW8KFHWYETn3EIKWxoCdnb6QoUICZP2S0eB9uY04nFzZoBIUs5NfChko/wBqRDQoz8vpF+P5JdrYvu5BcEKUwTzDP7v0jN+Ap6k9oSSlGbMogjZJFVA6ZbvwbWFCiPF+Jfl9n0UlbgV0hwWhQo3MBZzo0MVq2eFChgRUtZ/KGhgo/wBmpDwoAOV7c+DcLiZ6p81U0TFhIVlXkBCEhAZLbCM5P8PMClNFzgmrATiACxBsGBYnzhQoBHmvxxg/w2IVJlTZhlshYzLKiFFgXP5mKARtGBKWSMpWrL/KCWtl32pyhQozbNVlG7icNh1ypJw/eiaSozipZIB8LFNBVRDk/wBIiaez7OubXK5zmwLjy0hQoxe9GnDMOv7A+C5M2T3k9c45lqUgd4U5UVAJoS5cl9lCLv8A6JwQZKFYjKHHhmkgPchIFt4UKNW2Z8URPwhhEqYqxQXm0nF1UYGzpLACugjqMNNkBISJVE+H5VG1KlKmeHhRPv2Eh//Z')"
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundSize = 'cover';
}