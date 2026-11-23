// ts-fix.ts
function totalWithTax(price: number, taxRate: number): number {
  return price + price * taxRate;
}
const priceFromForm = "100";
// totalWithTax(priceFromForm, 0.18);  // ❌ TS2345 – caught before running
console.log(totalWithTax(Number(priceFromForm), 0.18)); // 118