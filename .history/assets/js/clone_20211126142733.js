$(function () {
    ///Product
    var productList = $('.product .product-list');
    var productItem = $('.product-item');
    for (i = 0; i < 9; i++) {
        productItem.clone().appendTo(productList);
    }

})