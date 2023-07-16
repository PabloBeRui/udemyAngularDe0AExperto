export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Nokia A1",
  price: 150,
};

const tablet: Product = {
  description: "ipad",
  price: 550,
};

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

// function taxCalculation(options: TaxCalculationOptions): number[] {
//   let total = 0;
//   options.products.forEach((product) => {
//     total += product.price;
//   });
//   return [total, total * options.tax];
// }

export function taxCalculation(options: TaxCalculationOptions): [number, number] {
  let total = 0;
  options.products.forEach(({ price }) => {
    total += price;
  });
  return [total, total * options.tax];
}

const shoppingCart = [phone, tablet];

const tax = 0.15;

// const result = taxCalculation({
//   products: shoppingCart,
//   tax: tax,
// });

const [total, taxTotal] = taxCalculation({
  products: shoppingCart,
  tax: tax,
});
console.log("Total", total);
console.log("Tax", taxTotal);


