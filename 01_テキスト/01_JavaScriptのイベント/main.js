const button = document.getElementById("button")

const alertMessage = function() {
  alert("クリックしたね")
}

button.onclick = alertMessage

// input 要素と input イベント
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

document.onkeydown = function(e) {
  console.log(e.key)
}

inputText.oninput = onkeydown
inputDate.oninput = onkeydown
