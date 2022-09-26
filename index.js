document.querySelector(".generate-btn").addEventListener("click", function() {

  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var symbols = `!@#$%^&*()_+=-{[}]:;"'|\<,>.?/`;

  var size = 0;

  var final = [];

  var length = document.getElementsByName("pass-length")[0].value;
  var pass = Array.apply(null, Array(length));
  const ucase = document.getElementsByName("upp-case")[0];
  const lcase = document.getElementsByName("low-case")[0];
  const no = document.getElementsByName("num")[0];
  const sym = document.getElementsByName("symbol")[0];

  if (ucase.checked) {
    for (var i = 0; i < 26; i++) {
      final[size] = upperCase[i];
      size++;
    }
  }
  if (lcase.checked) {
    for (var i = 0; i < 26; i++) {
      final[size] = lowerCase[i];
      size++;
    }
  }
  if (no.checked) {
    for (var i = 0; i < 10; i++) {
      final[size] = numbers[i];
      size++;
    }
  }

  if (sym.checked) {
    for (var i = 0; i < 16; i++) {
      final[size] = symbols[i];
      size++;
    }
  }
  var randomValue = 0;

  for (var j = 0; j < length; j++) {
    randomValue = Math.floor((Math.random()) * 100);
    if (randomValue > size)
      j--;
    else {
      pass[j] = final[randomValue];
    }
  }
  var str = pass.join("");

  document.getElementsByName("password")[0].value = str;

});
