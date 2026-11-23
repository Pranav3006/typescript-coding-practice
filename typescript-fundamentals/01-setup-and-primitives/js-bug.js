// js-bug.js
function totalWithTax(price, taxRate) {
  return price + price * taxRate;
}
console.log(totalWithTax("100", 0.18)); // "10018"  (should be 118)