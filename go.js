
var Days =30
var pennys =0.01;
pennys = pennys * 100;


for (var i= Days;i>0; i--) {
  pennys = Math.trunc(pennys);
  pennys = pennys*2;
 console.log( pennys)

}

// ---------------------------------
//
//  function printRange(rangeStart, rangeStop){
//    var text = "";
//    for (var i = rangeStart; i <= rangeStop; i++) {
//      text+ = i + ',';
//      return text.slice(0,-1)
//    }
//  }
//
//  document.write(printRange(2,10,2));
