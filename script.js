function togglePasswordVisibility() {
  var input2 = document.getElementById("key");
  var toggleButton = document.querySelector(".toggle-password-visibility");

  if (input2.type === "password") {
    input2.type = "text";
    toggleButton.innerHTML = '<i class="fa fa-eye-slash"></i>';
  } else {
    input2.type = "password";
    toggleButton.innerHTML = '<i class="fa fa-eye"></i>';
  }
}


function toggleDarkMode() {
  var body = document.body;
  var toggleButton = document.querySelector(".toggle-dark-mode");

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
      toggleButton.innerHTML = '<i class="fas fa-sun" style="color: white"></i>';
  } else {
      toggleButton.innerHTML = '<i class="fas fa-moon" style="color: black"></i>';
  }
}

function Encode() {
    var password = document.getElementById("pass").value;
    var key = document.getElementById("key").value;
  
    var enc = [];
    for (var i = 0; i < password.length; i++) {
      var key_c = key[i % key.length];
      enc.push(String.fromCharCode((password.charCodeAt(i) + key_c.charCodeAt(0)) % 256));
    }
    var encoded = btoa(enc.join(""));
    document.getElementById("result").textContent = encoded;
}

function Decode() {
    var password = document.getElementById("pass").value;
    var key = document.getElementById("key").value;
    var dec = [];
    var decoded = atob(password);
    for (var i = 0; i < decoded.length; i++) {
        var key_c = key[i % key.length];
        dec.push(String.fromCharCode((256 + decoded.charCodeAt(i) - key_c.charCodeAt(0)) % 256));
    }
    document.getElementById("result").textContent = dec.join("");
}

