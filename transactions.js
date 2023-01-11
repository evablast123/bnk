debit1 = "<span class='text-danger'>";
debit2 = "<i class='os-icon os-icon-arrow-down'></i></span>";
credit1 = "<span class='text-success'>";
credit2 = "<i class='os-icon os-icon-arrow-up2'></i></span>";
var array = [


  /////////// EDITABLE SECTION //////////////

  ["Marathon oil"   ,   ""+debit1+"$780,000"+debit2+"" , "Contract payment"      ,    "2022-03-02 14:20:12"],
  ["EMINE BETTEN"   ,   ""+credit1+"$525,000"+credit2+"" , "Payment for drilling materials."  , "2022-03-02 09:54:52"],
  ["Candid enterprise" ,   ""+debit1+"$2,800"+debit2+""   , "Adjustment tool box"   ,   "2021-11-02 19:40:11"],
  ["Oliver Dante"      ,   ""+credit1+"$7,300"+credit2+""   , "Warehouse purchase"    ,   "2021-02-02 16:37:47"],
  ["Honda PLC."        ,   ""+credit1+"$210,000"+credit2+"" , "17 drilling machines"  ,   "2020-11-02 16:32:38"],
  ["Stanley Kelechi"   ,   ""+debit1+"$3,700"+debit2+""   , "Deployment allowance"  ,   "2020-08-02 23:35:59"],
  ["Salisu Mohammed"   ,   ""+debit1+"$145,000"+debit2+"" , "Delivery fee"          ,   "2020-05-02 16:29:51"],
  ["Kurk Dittman"      ,   ""+debit1+"$460,000"+debit2+"" , "Fictional industry Robots"    ,   "2019-02-02 17:26:13"],
  ["Ford motors"       ,   ""+debit1+"$27,000"+debit2+""  , "Car purchase"          ,   "2019-02-02 16:17:8"],

  //////////// END OF EDITABLE SECTION ///////////
  

  
  ]
table = document.getElementById("table");
        
       
        // rows
        for(var i = 1; i < table.rows.length; i++)
        {
          // cells
          for(var j = 0; j < table.rows[i].cells.length; j++)
          {
              table.rows[i].cells[j].innerHTML = array[i - 1][j];
          }
        }