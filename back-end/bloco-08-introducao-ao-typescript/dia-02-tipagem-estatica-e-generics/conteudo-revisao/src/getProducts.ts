import { ProductType } from './types/ProductType';

function getProduct(): ProductType {
  const product: ProductType = {
    barcode: '123c456b789a',
    price: 10,
  }

  return product;
}

console.log(getProduct());