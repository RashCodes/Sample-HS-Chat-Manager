//Upload document functions in the document submission process section
function ctos_upload1() {
    let uploadButton = document.getElementById("ctosupload");
    let fileName = document.getElementById("ctosfile");

    uploadButton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        chosenImage.setAttribute("src",reader.result);
    }
    fileName.textContent = uploadButton.files[0].name;
    //Change the "Pending" status to "successful"
    document.getElementById("ctosuploaded").innerText="Uploaded";
    document.getElementById("ctosuploaded").style.background="#5dfd65";
    document.getElementById('previewlink_P1').classList.remove("disabledbutton");
    document.getElementById('previewlink_P1').classList.add("previewbtn");
    document.getElementById('prev_eye_P1').classList.remove("fa-eye-slash");
    document.getElementById('prev_eye_P1').classList.add("fa-eye");
    }
}

function ssmregdoc_upload2() {
    let uploadButton = document.getElementById("ssmregdocupload");
    let fileName = document.getElementById("ssmregdocfile");

    uploadButton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        chosenImage.setAttribute("src",reader.result);
    }
    fileName.textContent = uploadButton.files[0].name;
    //Change the "Pending" status to "successful"
    document.getElementById("ssmuploaded").innerText="Uploaded";
    document.getElementById("ssmuploaded").style.background="#5dfd65";
    document.getElementById('previewlink_P2').classList.remove("disabledbutton");
    document.getElementById('previewlink_P2').classList.add("previewbtn");
    document.getElementById('prev_eye_P2').classList.remove("fa-eye-slash");
    document.getElementById('prev_eye_P2').classList.add("fa-eye");
    
    }
}

function dirIDdoc_upload3() {
    let uploadButton = document.getElementById("dirIDdocupload");
    let fileName = document.getElementById("dirIDdocfile");

    uploadButton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        chosenImage.setAttribute("src",reader.result);
    }
    fileName.textContent = uploadButton.files[0].name;
    //Change the "Pending" status to "successful"
    document.getElementById("didocuploaded").innerText="Uploaded";
    document.getElementById("didocuploaded").style.background="#5dfd65";
    document.getElementById('previewlink_P3').classList.remove("disabledbutton");
    document.getElementById('previewlink_P3').classList.add("previewbtn");
    document.getElementById('prev_eye_P3').classList.remove("fa-eye-slash");
    document.getElementById('prev_eye_P3').classList.add("fa-eye");
    
    }
}

function bankstate_upload4() {
    let uploadButton = document.getElementById("bankstateupload");
    let fileName = document.getElementById("bankstatefile");

    uploadButton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        chosenImage.setAttribute("src",reader.result);
    }
    fileName.textContent = uploadButton.files[0].name;
    //Change the "Pending" status to "successful"
    document.getElementById("bankstateuploaded").innerText="Uploaded";
    document.getElementById("bankstateuploaded").style.background="#5dfd65";
    document.getElementById('previewlink_P4').classList.remove("disabledbutton");
    document.getElementById('previewlink_P4').classList.add("previewbtn");
    document.getElementById('prev_eye_P4').classList.remove("fa-eye-slash");
    document.getElementById('prev_eye_P4').classList.add("fa-eye");
    }
}

function picofBusinessprem_upload5() {
    let uploadButton = document.getElementById("picofBusinesspremupload");
    let fileName = document.getElementById("picofBusinesspremfile");

    uploadButton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        chosenImage.setAttribute("src",reader.result);
    }
    fileName.textContent = uploadButton.files[0].name;
    //Change the "Pending" status to "successful"
    document.getElementById("picofbuspremuploaded").innerText="Uploaded";
    document.getElementById("picofbuspremuploaded").style.background="#5dfd65";
    document.getElementById('previewlink_P5').classList.remove("disabledbutton");
    document.getElementById('previewlink_P5').classList.add("previewbtn");
    document.getElementById('prev_eye_P5').classList.remove("fa-eye-slash");
    document.getElementById('prev_eye_P5').classList.add("fa-eye");
    }
}

function picofPP_upload6() {
    let uploadButton = document.getElementById("picofPPupload");
    let fileName = document.getElementById("picofPPfile");

    uploadButton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        chosenImage.setAttribute("src",reader.result);
    }
    fileName.textContent = uploadButton.files[0].name;
    //Change the "Pending" status to "successful"
    document.getElementById("pipassuploaded").innerText="Uploaded";
    document.getElementById("pipassuploaded").style.background="#5dfd65";
    document.getElementById('previewlink_P6').classList.remove("disabledbutton");
    document.getElementById('previewlink_P6').classList.add("previewbtn");
    document.getElementById('prev_eye_P6').classList.remove("fa-eye-slash");
    document.getElementById('prev_eye_P6').classList.add("fa-eye");
    }
}







//Preview uploaded docs

//Uploaded Ctos file
const upinput1 = document.getElementById('ctosupload');
const downlink1 = document.getElementById('previewlink_P1');
let objectURL_P1;

upinput1.addEventListener('change', function () {
if (objectURL_P1) {
    // revoke the old object url to avoid using more memory than needed
    URL.revokeObjectURL(objectURL_P1);  
}

const file = this.files[0];
objectURL_P1 = URL.createObjectURL(file);
// downlink.download = file.name; // this name is used when the user downloads the file
downlink1.href = objectURL_P1;
downlink1.window.open(objectURL_P1,'_blank').focus();
});


//Uploaded SSM Registration file
const upinput2 = document.getElementById('ssmregdocupload');
const downlink2 = document.getElementById('previewlink_P2');
let objectURL_P2;

upinput2.addEventListener('change', function () {
if (objectURL_P2) {
    // revoke the old object url to avoid using more memory than needed
    URL.revokeObjectURL(objectURL_P2);  
}

const file = this.files[0];
objectURL_P2 = URL.createObjectURL(file);
// downlink.download = file.name; // this name is used when the user downloads the file
downlink2.href = objectURL_P2;
downlink2.window.open(objectURL_P2,'_blank').focus();
});




//Uploaded Director Identification Doc file
const upinput3 = document.getElementById('dirIDdocupload');
const downlink3 = document.getElementById('previewlink_P3');
let objectURL_P3;

upinput3.addEventListener('change', function () {
if (objectURL_P3) {
    // revoke the old object url to avoid using more memory than needed
    URL.revokeObjectURL(objectURL_P3);  
}

const file = this.files[0];
objectURL_P3 = URL.createObjectURL(file);
// downlink.download = file.name; // this name is used when the user downloads the file
downlink3.href = objectURL_P3;
downlink3.window.open(objectURL_P3,'_blank').focus();
});




// Bank Statement (3 months) file
const upinput4 = document.getElementById('bankstateupload');
const downlink4 = document.getElementById('previewlink_P4');
let objectURL_P4;

upinput4.addEventListener('change', function () {
if (objectURL_P4) {
    // revoke the old object url to avoid using more memory than needed
    URL.revokeObjectURL(objectURL_P4);  
}

const file = this.files[0];
objectURL_P4 = URL.createObjectURL(file);
// downlink.download = file.name; // this name is used when the user downloads the file
downlink4.href = objectURL_P4
downlink4.window.open(objectURL_P4,'_blank').focus();
});





//Pic of Premesis file
const upinput5 = document.getElementById('picofBusinesspremupload');
const downlink5 = document.getElementById('previewlink_P5');
let objectURL_P5;

upinput5.addEventListener('change', function () {
if (objectURL_P5) {
    // revoke the old object url to avoid using more memory than needed
    URL.revokeObjectURL(objectURL_P5);  
}

const file = this.files[0];
objectURL_P5 = URL.createObjectURL(file);
// downlink.download = file.name; // this name is used when the user downloads the file
downlink5.href = objectURL_P5;
downlink5.window.open(objectURL_P5,'_blank').focus();
});



//Pic of Passport file
const upinput6 = document.getElementById('picofPPupload');
const downlink6 = document.getElementById('previewlink_P6');
let objectURL_P6;

upinput6.addEventListener('change', function () {
if (objectURL_P6) {
    // revoke the old object url to avoid using more memory than needed
    URL.revokeObjectURL(objectURL_P6);  
}

const file = this.files[0];
objectURL_P6 = URL.createObjectURL(file);
// downlink.download = file.name; // this name is used when the user downloads the file
downlink6.href = objectURL_P6;
downlink6.window.open(objectURL_P6,'_blank').focus();
});