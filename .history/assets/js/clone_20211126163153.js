$(function () {
    ///Product
    var productList1 = $('.product1 .product-list');
    var productItem1 = $('.product1 .product-item');
    for (i = 0; i < 9; i++) {
        productItem1.clone().appendTo(productList1);
    }
    var productList2 = $('.product2 .product-list');
    for (i = 0; i < 9; i++) {
        productItem1.clone().appendTo(productList2);
    }
    var productList3 = $('.product3 .product-list');
    for (i = 0; i < 4; i++) {
        productItem1.clone().appendTo(productList3);
    }
    var productList4 = $('.product3 .product-list');
})