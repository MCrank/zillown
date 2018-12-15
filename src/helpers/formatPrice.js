const formatPrice = dollars => dollars.toLocaleString('en-us', {
  style: 'currency',
  currency: 'USD',
});

export default formatPrice;
