document.addEventListener('DOMContentLoaded', function() {
    console.log("HELLO!!!");
  
    var leftCanvas = document.querySelector('.left-content'),
        rightCanvas = document.querySelector('.right-content');
  
    var leftCtx = leftCanvas.getContext('2d');
    var rightCtx = rightCanvas.getContext('2d');
  
    leftCanvas.width = window.innerWidth / 2;
    leftCanvas.height = window.innerHeight;
  
    rightCanvas.width = window.innerWidth / 2;
    rightCanvas.height = window.innerHeight;
  
    var letters = 'DATAMOSH';
    letters = letters.split('');
  
    var fontSize = 50;
    var columns = leftCanvas.width / fontSize; 
    var drops = [];
    for (var i = 0; i < columns; i++) {
      drops[i] = 1;
    }
  
    function drawLeft() {
      leftCtx.fillStyle = 'rgba(26, 26, 29, 1)';
      leftCtx.fillRect(0, 0, leftCanvas.width, leftCanvas.height);
  
      leftCtx.font = fontSize + 'px monospace';
      for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        leftCtx.fillStyle = '#E80F88';
        leftCtx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > leftCanvas.height && Math.random() > .95) {
          drops[i] = 0;
        }
      }
    }
  
    function drawRight() {
      rightCtx.fillStyle = 'rgba(26, 26, 29, 1)';
      rightCtx.fillRect(0, 0, rightCanvas.width, rightCanvas.height);
  
      rightCtx.font = fontSize + 'px monospace';
      for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        rightCtx.fillStyle = '#E80F88';
        rightCtx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > rightCanvas.height && Math.random() > .95) {
          drops[i] = 0;
        }
      }
    }
  
    setInterval(function() {
      drawLeft();
      drawRight();
    }, 70);
  });
  