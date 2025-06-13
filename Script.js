let name1;
let name2;
let loveCalculatorResult;
let randomPick;
let randomPickIndex;
let findPartnerResult;
const alertResult = "Masukan Nama Terlebih Dahulu!";
const malePartner = ["Gibran","Luhut Panjaitan","Jimin","Akmal","Jefri Nichole","Dipta","Ali","Rakabuming","Ravendra","Akbar"]
const femalePartner = ["Anika","Mawar","Nami","Hoshina","Chitanda","Ada Wong","Lara","Nina","Novia","Salsabila"]

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");


function loveCalculator() {
    name1 =document.getElementById("name1").value;
    name2 =document.getElementById("name2").value;
    if(name1 && name2){
        percentage = Math.round(Math.random()*100);
        loveCalculatorResult = `Tingkat Kecocokan ${name1} dan ${name2} adalah ${percentage}%`;
        document.getElementById("result").innerHTML = loveCalculatorResult;
    } else {
        document.getElementById("result").innerHTML = alertResult;
    }

}


function findFemalePartner(){
    
    btn1.className = "clicked";
    if(btn1.className == "clicked"){
        randomPickIndex = Math.round(Math.random()*9);
        randomPick = femalePartner[randomPickIndex];
        findPartnerResult = `Jodoh Kamu adalah ${randomPick}`;
        btn2.classList.replace("clicked","notClicked");
    }
    else {
        findPartnerResult = "Pilih Gender Terlebih Dahulu!"
    }
    console.log(btn1.className);

}
function findMalePartner(){
    
    btn2.className = "clicked";
    if(btn2.className == "clicked"){
        randomPickIndex = Math.round(Math.random()*9);
        randomPick = malePartner[randomPickIndex];
        findPartnerResult = `Jodoh Kamu adalah ${randomPick}`;
        btn1.classList.replace("clicked","notClicked");
    }
    else {
        findPartnerResult = "Pilih Gender Terlebih Dahulu!"
    }
    console.log(btn2.className);

}

function partnerResult(){
    if(findPartnerResult){
        document.getElementById("result").innerHTML = findPartnerResult;
    }
    else {
        findPartnerResult = "Pilih Gender Terlebih Dahulu!"
    }
}
    
