
  /////////// EDITABLE SECTION ///////////////

  accName = "Stanley Evablast";
  accNumber = "Account No.: 1234111890";
  currentDateTime = "Date:  13th of October 2022 <br> Time: 14:49 pm UTC";
  availableBalance = "$ 5,485,700.00"

  ///////////// END OF EDITABLE SECTION ///////////


  
  
  
  document.getElementById("acctname").innerHTML = accName;
  document.getElementById("acctnum").innerHTML = accNumber;
  document.getElementById("currentdate").innerHTML = currentDateTime;
  document.getElementById("avbal").innerHTML = availableBalance;

  window.onload = addText();
  function addText(){
  document.getElementById("searchv").value = "Welcome " + accName;
  document.getElementById("namenumber").value =  "<div class='logged-user-name'><h6>" + acctName + "</h6></div><div class='logged-user-role'>296710170000</div>";
}