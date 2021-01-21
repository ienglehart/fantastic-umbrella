// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products
Categories.hasMany(Products, {
  foreignKey: ''
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tags, {
  through: ProductTag,
  foreignKey: ''
});
// Tags belongToMany Products (through ProductTag)
Tags.belongToMany(Products, {
  through: ProductTag,
  foreignKey: ''
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
