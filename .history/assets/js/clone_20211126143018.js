$(function () {
    ///Product
    var productList1 = $('.product1 .product-list');
    var productItem1 = $('.product1 .product-item');
    for (i = 0; i < 9; i++) {
        productItem1.clone().appendTo(productList1);
    }

    var productList2 = $('.product2 .product-list');
    var productItem2 = $('.product2 .product-item');
    for (i = 0; i < 9; i++) {
        productItem2.clone().appendTo(productList2);
    }

    var productList3 = $('.product3 .product-list');
    var productItem3 = $('.product3 .product-item');
    for (i = 0; i < 5; i++) {
        productItem2.clone().appendTo(productList3);
    }
})