//var Buffer = require('buffer/').Buffer;
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

var coins = {
  base: "",
  compareTo: ""
};

function dropdwon_1_Action() {
  document.getElementById("Dropdown_1_div").classList.toggle("show");
}

function HandleBitcoin_1() {
  //console.log("BTC 1 clicked");
  $("#selection_1").text("Bitcoin");
  coins.base = "btc";
}
function HandleEthereal_1() {
  $("#selection_1").text("Ethereal");
  coins.base = "eth";
}
function HandleLitecoin_1() {
  $("#selection_1").text("Litecoin");
  coins.base = "ltc";
}

////////////////////
function dropdwon_2_Action() {
  document.getElementById("Dropdown_2_div").classList.toggle("show");
}
function HandleBitcoin_2() {
  $("#selection_2").text("Bitcoin");
  coins.compareTo = "btc";
}
function HandleEthereal_2() {
  $("#selection_2").text("Ethereal");
  coins.compareTo = "eth";
}
function HandleLitecoin_2() {
  $("#selection_2").text("Litecoin");
  coins.compareTo = "ltc";
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

function compare() {
  console.log("Submit button clicked");
  $.ajax({
    url: "http://localhost:8080/api/historyBuilder?coinBase=" + coins.base + "&&coinCompareTo=" + coins.compareTo,
    type: "GET",
    success: function(data){
      console.log("Ajax calling success");
      $("#compare_btn").text(JSON.stringify(data));
    }
  });
}

function correlate() {
  console.log("Submit button clicked");
  $.ajax({
    url: "http://localhost:8080/api/correlationCode",
    type: "GET",
    success: function(myArrayData){
      console.log("Ajax calling success");
      //console.log(myArrayData.keys());
      //var myJsonData = JSON.parse(myArrayData);
      //$("#correlate_btn").text(myArrayData);
        var table = $('#correlateTable'); //give this ID to your table
        console.log(myArrayData.length);
        for (var i = 0; i < myArrayData.length; i++) {
          table.append("<tr>")
          for (var j = 0; j < myArrayData[i].length; j++) {
            table.append("<td>" + myArrayData[i][j] + "</td>");
          }
          table.append("</tr>");
        }
    }
  });
}