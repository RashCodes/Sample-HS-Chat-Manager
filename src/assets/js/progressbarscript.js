const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");

// Show/Hide Functions for the switching between Forms
function showpage(x) {
    if(x==1){
                // document.getElementById("headingval").innerHTML = "Customer Onboarding Process";
                document.getElementById("personalandcorporateinfo").style.display="block";
                document.getElementById("referenceinfo").style.display = "none";
                document.getElementById("Financingapplication_SandD").style.display = "none";
                document.getElementById("Businessop").style.display = "none";
                document.getElementById("endpage").style.display = "none";
                one.classList.remove("active");
                two.classList.remove("active");
                three.classList.remove("active");
                four.classList.remove("active");
                topdoc();
            }
    
    else if(x==2){
                // document.getElementById("headingval").innerHTML = "Document Submission";
                document.getElementById("personalandcorporateinfo").style.display = "none";
                document.getElementById("referenceinfo").style.display = "block";
                document.getElementById("Financingapplication_SandD").style.display = "none";
                document.getElementById("Businessop").style.display = "none";
                document.getElementById("endpage").style.display = "none";
                one.classList.add("active");
                two.classList.remove("active");
                three.classList.remove("active");
                four.classList.remove("active");
                topdoc();
            }
    
    else if(x==3) {
                // document.getElementById("headingval").innerHTML = "Document Verification";
                document.getElementById("personalandcorporateinfo").style.display="none";
                document.getElementById("referenceinfo").style.display = "none";
                document.getElementById("Financingapplication_SandD").style.display = "block";
                document.getElementById("Businessop").style.display = "none";
                document.getElementById("endpage").style.display = "none";
                one.classList.add("active");
                two.classList.add("active");
                three.classList.remove("active");
                four.classList.remove("active");
                topdoc();
            }
   
    else if(x==4) {
                // document.getElementById("headingval").innerHTML = "Application Approval";
                document.getElementById("personalandcorporateinfo").style.display="none";
                document.getElementById("referenceinfo").style.display = "none";
                document.getElementById("Financingapplication_SandD").style.display = "none";
                document.getElementById("Businessop").style.display = "block"; 
                document.getElementById("endpage").style.display = "none";
                one.classList.add("active");
                two.classList.add("active");
                three.classList.add("active");
                four.classList.remove("active");
                topdoc();
            }    
    
    else if(x==5) {
                // document.getElementById("headingval").innerHTML = "Return Page";
                document.getElementById("personalandcorporateinfo").style.display="none";
                document.getElementById("referenceinfo").style.display = "none";
                document.getElementById("Financingapplication_SandD").style.display = "none";
                document.getElementById("Businessop").style.display = "none";
                document.getElementById("endpage").style.display = "block";
                one.classList.add("active");
                two.classList.add("active");
                three.classList.add("active");
                four.classList.add("active");
                topdoc();

            }  
}

//Scroll to top on button click
function topdoc() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}