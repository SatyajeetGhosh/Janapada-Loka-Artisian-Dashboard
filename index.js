let toggle = document.querySelector('.toggle-btn-container');
let sideMenuSection = document.querySelector('.side-menu-section');
let detailsSection = document.querySelector('.details-section');
let hideItem1 = document.querySelector('.hide1');
let hideItem2 = document.querySelector('.hide2');
let hideItem3 = document.querySelector('.hide3');
let hideItem4 = document.querySelector('.hide4');
let hideItem5 = document.querySelector('.hide5');
// let hideItem = document.querySelector('.hide1');

toggle.onclick = function(){
    sideMenuSection.classList.toggle('active')
    hideItem1.classList.toggle('displayNone')
    hideItem2.classList.toggle('displayNone')
    hideItem3.classList.toggle('displayNone')
    hideItem4.classList.toggle('displayNone')
    hideItem5.classList.toggle('displayNone')
}

function validation(){
    var bank = document.forms["form2"]["bank_name"].value;
    var acc = document.getElementById("acc_no").value;
    var hold = document.getElementById("hold_name").value;
    var branch = document.getElementById("branch").value;
    var adhar = document.getElementById("adhar").value;
    var ifsc = document.getElementById("ifsc").value;
    var micr = document.getElementById("micr").value;

    if(bank == null || bank==""){
        alert("Bank Name is Empty");
        return false;
    }
    else if(acc== null || acc==""){
        alert("Account Number is Empty");
        return false;
    }
    else if(hold== null || hold==""){
        alert("Holder Name is Empty");
        return false;
    }
    else if(branch== null || branch==""){
        alert("Branch Name is Empty");
        return false;
    }
    else if(adhar== null || adhar==""){
        alert("Adharcard Number is Empty");
        return false;
    }
    else if(ifsc== null || ifsc==""){
        alert("IFSC code is Empty");
        return false;
    }
    else if(micr== null || micr==""){
        alert("MICR code is Empty");
        return false;
    }
}

const personalSection = document.getElementById('personal-details');
const uploadsSection = document.getElementById('upload');
const paymentInfoSection = document.getElementById('payment-info');

const personalSectionButton = document.getElementById('personal-section-btn');
const uploadsSectionButton = document.getElementById('upload-section-btn');
const paymentSectionButton = document.getElementById('payment-section-btn');

function redirect1(){
    personalSection.classList.remove('displayNone');
    uploadsSection.classList.add('displayNone');
    paymentInfoSection.classList.add('displayNone');
}

function redirect2(){
    personalSection.classList.add('displayNone');
    uploadsSection.classList.remove('displayNone');
    paymentInfoSection.classList.add('displayNone');
}

function redirect3(){
    personalSection.classList.add('displayNone');
    uploadsSection.classList.add('displayNone');
    paymentInfoSection.classList.remove('displayNone');
}

// personalSection.addEventListener("click", function() {
//     personalSection.classList.remove('displayNone');
//     uploadsSection.classList.add('displayNone');
//     paymentInfoSection.classList.add('displayNone');
//   });

// uploadsSection.addEventListener("click", function() {
//     personalSection.classList.add('displayNone');
//     uploadsSection.classList.remove('displayNone');
//     paymentInfoSection.classList.add('displayNone');
//   });

// paymentInfoSection.addEventListener("click", function() {
//     personalSection.classList.add('displayNone');
//     uploadsSection.classList.add('displayNone');
//     paymentInfoSection.classList.remove('displayNone');
//   });