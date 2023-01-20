//Functions for Preset Donation Amounts Buttons
function firstValue(){
  document.getElementById("donationAmount").value = 10;
}
function secondValue(){
  document.getElementById("donationAmount").value = 25;
}
function thirdValue(){
  document.getElementById("donationAmount").value = 50;
}
function fourthValue(){
  document.getElementById("donationAmount").value = 100;
}
//Function for Submit donation
function submitReceipt(){
  var inputName = document.getElementById("nameInput").value;
  var inputEmail = document.getElementById("emailInput").value;
  var inputDonation = document.getElementById("donationAmount").value;
  //Pattern to recognize valid email
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  //Form validation
  if (inputName == '' || inputEmail == '' || inputDonation == '') {
    alert("Please fill in all the details before submitting.");
  }else if (!inputEmail.match(pattern)) {
    alert("Invalid email.");
  }else {
    window.location.href="donationReceipt.html";
    document.getElementById("nameOutput").textContent = inputName;
    document.getElementById("emailOutput").textContent = inputEmail;
    document.getElementById("donationOutput").textContent = inputDonation;
  }
}
//Function For returning to Donation Page
function returnFunc(){
  window.location.href="donation.html";
}
//Function for Printing Receipt
function printDiv() {
            var divContents = document.getElementById("donReceipt").innerHTML;
            var a = window.open('', '', 'height=500, width=500');
            a.document.write('<html>');
            a.document.write(divContents);
            a.document.write('</body></html>');
            a.document.close();
            a.print();
}
