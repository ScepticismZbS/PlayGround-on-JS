let right = function() {
 
 console.log(parseInt(document.getElementById('aim').style.left));
 var val = (parseInt(document.getElementById('aim').style.left) || 25) + 100;
 let parsed = parseInt(parseInt(document.getElementById('aim').style.left));
 console.log('left:', parseInt(document.getElementById('aim').style.left));
 if ((val) > 425) {
    var val = 425;
   }

 document.getElementById('aim').style.left = val + "px";
}

let left = function() {
 
 console.log(parseInt(document.getElementById('aim').style.left));
 var val = (parseInt(document.getElementById('aim').style.left) || 25) - 100;
 let parsed = parseInt(parseInt(document.getElementById('aim').style.left));
 console.log('left:', parseInt(document.getElementById('aim').style.left));
 if ((val) < 25) {
    var val = 25;
   }

 document.getElementById('aim').style.left = val + "px";
}

let down = function() {
 
 console.log(parseInt(document.getElementById('aim').style.top));
 var val = (parseInt(document.getElementById('aim').style.top) || 25) + 100;
 let parsed = parseInt(parseInt(document.getElementById('aim').style.top));
 console.log('top:', parseInt(document.getElementById('aim').style.top));
 if ((val) > 425) {
    var val = 425;
   }

 document.getElementById('aim').style.top = val + "px";
}

let up = function() {
 
 console.log(parseInt(document.getElementById('aim').style.top));
 var val = (parseInt(document.getElementById('aim').style.top) || 25) - 100;
 let parsed = parseInt(parseInt(document.getElementById('aim').style.top));
 console.log('top:', parseInt(document.getElementById('aim').style.top));
 if ((val) < 25) {
    var val = 25;
   }

 document.getElementById('aim').style.top = val + "px";
}

