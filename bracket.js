var bracket = '((())';
 
function testBrackets (str)
{
var numOpen = numClose = 0;
for (var j = 0, J = str.length; j < J; j++)
   {
   if (str [j] == '(') numOpen++; 
   if (str [j] == ')') if (++numClose > numOpen) return false;
   }

if (numClose != numOpen) return false
return true;
}
 
document.write (testBrackets (bracket))