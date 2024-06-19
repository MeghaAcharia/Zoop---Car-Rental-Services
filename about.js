var typeWriter = document.getElementById('type-writer');
var dataText = typeWriter.getAttribute('data-text');

var count = 0;
var dataTextLength = dataText.length;

var setText = function () {
  setTimeout(function () {
    typeWriter.textContent = typeWriter.textContent + dataText.charAt(count);
    count++;
    if (count <= dataTextLength) {
      setText();
    }
  }, 10);
}

window.onload = () => {
  setText()
}

      let modalBtns = [...document.querySelectorAll(".button")];
      modalBtns.forEach(function (btn) {
        btn.onclick = function () {
          let modal = btn.getAttribute("data-modal");
          document.getElementById(modal).style.display = "block";
        };
      });
      let closeBtns = [...document.querySelectorAll(".close")];
      closeBtns.forEach(function (btn) {
        btn.onclick = function () {
          let modal = btn.closest(".modal");
          modal.style.display = "none";
        };
      });
      window.onclick = function (event) {
        if (event.target.className === "modal") {
          event.target.style.display = "none";
        }
        
      };