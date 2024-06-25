const product_category = require ('./product-category-list.json');
const baby_products = require ('./baby-products.json').data;

// var products = product_category.data;

// products.forEach ((product, idx) => {
//     console.log ((idx+1) + ": " + product.name);
// });
console.log (baby_products.products.length);

baby_products.products.forEach (console.log)