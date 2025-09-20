var count = 0;
var time = 0
pfp.addEventListener("click", (event) => {
  count++;
  timenow = Math.round(new Date().getTime() / 1000)
  if ((timenow - time) > 2 && document.getElementById("qr").hidden) {
    count = 0
  }
  if (count >= 5) {
    // count = 0;
    document.getElementById("qr").hidden = false;
    document.getElementById("qr").children[1].focus();
    document.getElementById("qr").children[1].addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        document.getElementById("qr").children[2].click();
      }
    })
  } 
  time = Math.round(new Date().getTime() / 1000)
})

document.getElementById("qr").children[2].addEventListener("click", (event) => {
  if (document.getElementById("qr").children[1].value != "") {
    document.getElementById("qr").children[2].disabled = true;
  }
  var value = document.getElementById("qr").children[1].value;
  if (value.length > 0) {
    fetch('https://api.gorzog.com/v1/qr/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        qr: value
      })
    })
    .then(response => response.json())
    .then(data => {
      // console.log('Success:', data);
      if (data.url.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i)) {
        window.location.href = data.url;
        
      } else if (!(data.url === "invalid")) {
        
        var textarea = document.createElement("textarea");
        textarea.value = data.url;
        document.getElementById("qr").appendChild(textarea);
        document.getElementById("qr").children[2].hidden = true;

        navigator.clipboard.writeText(data.url).then(function() {}, function(err) {
          console.error('Could not copy text: ');
          textarea.style.background = "red"
          textarea.style.color = "white"
        });
      } else {
        window.location.href = "/";
      }

    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
})