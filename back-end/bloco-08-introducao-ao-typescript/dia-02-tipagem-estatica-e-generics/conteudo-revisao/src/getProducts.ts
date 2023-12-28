import { ProductType } from "../src/types/ProductType";

function getProduct() {
  const product: ProductType = {
    barcode: '123c456b789a',
    price: 10,
  };
  return product
}

console.log(getProduct());