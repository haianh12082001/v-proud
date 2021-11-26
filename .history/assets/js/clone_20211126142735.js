$(function () {
    ///Product
    var productList = $('.product1 .product-list');
    var productItem = $('.product-item');
    for (i = 0; i < 9; i++) {
        productItem.clone().appendTo(productList);
    }

})