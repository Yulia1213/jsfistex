const a = parseFloat(prompt('Enter value for A'));
const b = parseFloat(prompt('Enter value for B'));
const c = parseFloat(prompt('Enter value for C'));
const result = solveQuadrEq(a, b, c);

if (Number.isNaN(a, b, c)){
 alert('Incorrect data');
}

alert(' You Enter : A=' + a + '; B=' + b + '; C=' + c);
alert( 'RESULT: ' +result);


function solveQuadrEq(a, b, c){
if ( a == 0)
 return ' A= 0 ! No solutions. Please, enter another value for A.';
const d = calcDiscr(a, b, c);
let x1, x2;
if (d > 0){
 x1 = (-b + Math.sqrt(d)/ (2 * a));
 x2 = (-b - Math.sqrt(d)/ (2 * a));
 return 'Solution is: X1=' + x1 + ', X2=' + x2;
} else if (d == 0){
 x1 = b/ 2*a;
 return 'Solution is: X1=' + x1;
} else if ( d < 0)
return ' No Solutions. D=' + d;
function calcDiscr(a, b, c){
    return (b * b) - (4 * a * c);
}

}


