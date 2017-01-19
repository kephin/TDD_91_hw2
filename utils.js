const discount = (numberOfBooks) => {
  switch (numberOfBooks) {
    case 2:
      return 0.95;
      break;
    case 3:
      return 0.9;
      break;
    case 4:
      return 0.8;
      break;
    case 5:
      return 0.75;
      break;
    default:
      return 1;
  }
};

// const discount = [0, 1, 0.95, 0.9, 0.8, 0.75];

const PotterShoppingCart = (first = 0, second = 0, third = 0, forth = 0, fifth = 0, total = 0) => {
  const orders = [first, second, third, forth, fifth];

  const onSaleSet = orders
    .map(order => order > 0 ? 1 : 0)
    .reduce((prev, next) => prev + next);

  if (onSaleSet === 0)
    return total;

  total += onSaleSet * 100 * discount(onSaleSet);
  return PotterShoppingCart(first - 1, second - 1, third - 1, forth - 1, fifth - 1, total);
};

module.exports = {
  PotterShoppingCart,
};
