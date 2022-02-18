var isSecond = false;
var arr = [];
function clearScreen() {
  document.getElementById("result").value = "";
  arr = [];
}

// This function display values
function display(val) {
  if (isSecond) {
    document.getElementById("result").value = val;
    isSecond = false;
  } else {
    document.getElementById("result").value += val;
  }
  
}
function result() {}
function calculate() {
  arr.push(parseInt(document.getElementById("result").value));

  var i = 0;
  var length = arr.length;
  var re = 0;
  while (arr.length > 1) {
    if (arr.length == 1) {
      break;
    }
    var first = arr[i];
    var op = arr[i + 1];
    var second = arr[i + 2];
    switch (op) {
      case "+":
        re = first + second;
        break;
      case "-":
        re = first - second;
        break;
      case "/":
        re = first / second;
        break;
      case "*":
        re = first * second;
        break;
    }
    var removed = arr.splice(0, 3, re);
  }
  arr = [];
  document.getElementById("result").value = re;
}
function execute(){
    console.log('length>3');
    var first = arr[0];
    var second = arr[2];
    var op = arr[1];
    var result = 0;
    switch (op) {
      case "+":
        result = first + second;
        break;
      case "-":
        result = first - second;
        break;
      case "/":
        result = first / second;
        break;
      case "*":
        result = first * second;
        break;
    }
    return result;
}
function displayop(value) {
    arr.push(parseInt(document.getElementById("result").value));
    isSecond=true;
    console.log('clicked op arr=',arr);
    if (arr.length == 3) {
        var result = execute();
        console.log('result=',result);
        var removed = arr.splice(0, 3, result);
        document.getElementById("result").value = result;
        }
      else{
        console.log('lemgth<3',arr);
      }
      arr.push(value);
      console.log('arr updated:',arr);
  //console.log(arr);
  //document.getElementById("result").value = value;
}
