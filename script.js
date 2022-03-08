window.onload = init;
document.addEventListener("click", clickNumber);

var pressedButton = document.querySelector(".btn");
   pressedButton.addEventListener("click", function (event) {
      alert("Thank you for submiting your details ☺")
   })


function clickNumber(event) {
  var addNo = event.explicitOriginalTarget.textContent;
  var s = [0,1,2,3,4,5,6,7,8,9]
  if (s.includes(parseInt(addNo))) {
      document.getElementById("code").value += parseInt(addNo);
    } else {
        document.getElementById("code").value += '';
  }
}



function init() {
  var char = "0123456789";
  keyValue = "";
  for (i = 0; keyValue.length < 10; i++) {
    rand = Math.round(Math.random() * 10); //3
    if (keyValue.indexOf(rand) > -1) continue;
    keyValue += char.substring(rand, rand + 1);
  }
  console.log(keyValue);

  for (j = 0; j < keyValue.length; j++) {
    document.querySelectorAll(".number")[j].textContent = keyValue[j];
  }
}
// function showClickedButton(btn) {
//   clickedButton((nonChar += btn));
// }

// function clearPassword() {
//   clickedButton((nonChar = ""));
// }
// function deleteChar() {
//   clickedButton((nonChar = nonChar.substring(0, nonChar.length - 1)));
// }

// function clickedButton(btn) {
//   psword.value = btn;
// }
// function displayPassword() {
//   box = document.querySelector("#plainPsWord");
//   if (box.checked == false) {
//     psword.type = "password";
//   } else {
//     psword.type = "text";
//   }
// }
