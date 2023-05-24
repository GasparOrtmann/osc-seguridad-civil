function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const obj = document.getElementById("counter");
  animateValue(obj, 0, 200, 1000);




  var speed = 1;

// function incEltNbr(id) {
//   elt = document.getElementById(id);
//   endNbr = Number(document.getElementById(id).innerHTML);
//   incNbrRec(0, endNbr, elt);
// }

// function incNbrRec(i, endNbr, elt) {
//   if (i <= endNbr) {
//     elt.innerHTML = i;
//     setTimeout(function() {
//       incNbrRec(i + 1, endNbr, elt);
//     }, speed);
//   }
// }

// function incNbr(){
//   incEltNbr("nbr");
// }

// incEltNbr("nbr");


function incEltNbr(id) {
    elt = document.getElementById(id);
    endNbr = Number(document.getElementById(id).innerHTML);
    incNbrRec(0, endNbr, elt);
  }
  
  function incNbrRec(i, endNbr, elt) {
    if (i <= endNbr) {
      elt.innerHTML = i;
      setTimeout(function() {
        incNbrRec(i + 1, endNbr, elt);
      }, speed);
    }
  }
  
  function incNbr(){
    incEltNbr("nbr1");
  }
  
  incEltNbr("nbr1");

  function incEltNbr(id) {
    elt = document.getElementById(id);
    endNbr = Number(document.getElementById(id).innerHTML);
    incNbrRec(0, endNbr, elt);
  }
  
  function incNbrRec(i, endNbr, elt) {
    if (i <= endNbr) {
      elt.innerHTML = i;
      setTimeout(function() {
        incNbrRec(i + 1, endNbr, elt);
      }, speed);
    }
  }
  
  function incNbr(){
    incEltNbr("nbr2");
  }
  
  incEltNbr("nbr2");