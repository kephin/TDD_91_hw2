const expect = require('expect');

const utils = require('./utils');

describe('Shopping cart for Harry Potter books', () => {
  it('should return 100 for buying 1 book', () => {
    const expected = 100;
    const actual = utils.PotterShoppingCart(1);
    expect(actual).toEqual(expected);
  });

  it('should return 190 for buying 2 different books', () => {
    const expected = 190;
    const actual = utils.PotterShoppingCart(1, 1);
    expect(actual).toEqual(expected);
  });

  it('should return 270 for buying 3 different books', () => {
    const expected = 270;
    const actual = utils.PotterShoppingCart(1, 1, 1);
    expect(actual).toEqual(expected);
  });
});
