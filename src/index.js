module.exports = function solveEquation(equation) {  
  var a;
  var b;
  var c;
  var d;
  var x1;
  var x2;

  var tmp;
  var res;

  tmp = equation.replace(/\ /g,"");
  
  tmp = tmp.split('x');

  for (var i=0; i<tmp.length; i++) {
    tmp[i] = tmp[i].replace("*","");
    tmp[i] = tmp[i].replace(/^(.*)-/,"-");
    tmp[i] = tmp[i].replace(/^(.*)\+/,"");
    //console.log(tmp[i]);
  }

  a = +tmp[0];
  b = +tmp[1];
  c = +tmp[2];

  d = Math.pow(b,2) - 4*a*c;

  if(d > 0) {
    x1 = Math.round((-1*b + Math.sqrt(d))/(2*a));
    x2 = Math.round((-1*b - Math.sqrt(d))/(2*a));
  }

  //console.log(equation);
  //console.log(a,b,c,d,x1,x2);

  res = [x1,x2];


  res.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  //console.log(res);
  return res;

}
