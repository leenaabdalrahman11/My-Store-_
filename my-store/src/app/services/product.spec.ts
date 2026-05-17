import { Product } from '../models/product'

describe('Product', () => {
  it('should create a product object', () => {
    const product: Product = {
      id: 1,
      name: 'Test Product',
      price: 20,
      url: 'https://via.placeholder.com/300',
      description: 'Test description'
    };

    expect(product).toBeTruthy();
    expect(product.name).toBe('Test Product');
    expect(product.price).toBe(20);
  });
});