const discont = [0, 1, 0.95, 0.9, 0.8, 0.75];

const PotterShoppingCart = (first = 0, second = 0, third = 0, forth = 0, fifth = 0, total = 0) => {
  const orders = [first, second, third, forth, fifth];
  const onSaleSet = orders
    .map(order => order > 0 ? 1 : 0)
    .reduce((prev, next) => prev + next);

  if (onSaleSet === 0)
    return total;

  total += onSaleSet * 100 * discont[onSaleSet];
  return PotterShoppingCart(first - 1, second - 1, third - 1, forth - 1, fifth - 1, total);
};

module.exports = {
  PotterShoppingCart,
};
