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

  it('should return 320 for buying 4 different books', () => {
    const expected = 320;
    const actual = utils.PotterShoppingCart(1, 1, 1, 1);
    expect(actual).toEqual(expected);
  });

  it('should return 375 for buying 5 different books', () => {
    const expected = 375;
    const actual = utils.PotterShoppingCart(1, 1, 1, 1, 1);
    expect(actual).toEqual(expected);
  });

  it('should return 370 for buying 3 different books and the other one is duplicated', () => {
    const expected = 370;
    const actual = utils.PotterShoppingCart(1, 1, 2);
    expect(actual).toEqual(expected);
  });

  it('should return 460 for buying 3 + 2 different books', () => {
    const expected = 460;
    const actual = utils.PotterShoppingCart(1, 2, 2);
    expect(actual).toEqual(expected);
  });

  it('should return 845 for buying 5 + 3 + 1 + 1 different books', () => {
    const expected = 845;
    const actual = utils.PotterShoppingCart(1, 2, 2, 1, 4);
    expect(actual).toEqual(expected);
  });
});
