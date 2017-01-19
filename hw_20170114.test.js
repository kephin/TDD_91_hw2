const expect = require('expect');

const utils = require('./utils');

describe('Shopping cart for Harry Potter books', () => {
  it('should return 100 for buying 1 book', () => {
    const expected = 100;
    const actual = utils.PotterShoppingCart(1);
    expect(actual).toEqual(expected);
  });
});
