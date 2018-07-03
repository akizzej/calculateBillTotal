/**Escribe una función llamada calculateBillTotal.

Dado el pre impuesto y la cantidad antes de propina de una comida, calculateBillTotal devuelve la cantidad total debida después de impuestos y propina.

Notas:

Suponga que el impuesto de ventas es 9.5% y la propina es 15%.
NO incline el impuesto sobre las ventas, solo sobre la cantidad de propina.
var output = calculateBillTotal(20);
console.log(output); // -> 24,9 */
function calculateBillTotal(preTaxAndTipAmount) {
    //Suponga que el impuesto de ventas es 9.5% y la propina es 15%.
    let tip = (preTaxAndTipAmount/100)*15;
      let taxes = (preTaxAndTipAmount/100)*9.5;
      let total = (preTaxAndTipAmount+tip+taxes);
      return total;
  }
  console.log(calculateBillTotal(20));//-> 24,9 
  