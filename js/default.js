var number = Math.floor(Math.random()*3);
var loop = true;

var message;
while(loop){
  var answer = parseInt(window.prompt('数あてゲィム'));

  if(answer === number){
    message = 'ATARI';
    loop = false;
  }
  else if (answer < number) {
    message = 'oops, more Big';
  }
  else if(answer > number){
    message = 'oh, more Small';
  }
  else {
    message = 'hey, please enter number';
  }

  document.getElementById('choice').textContent = message;
}
