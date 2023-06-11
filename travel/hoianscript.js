var col4Items = document.querySelectorAll('.col-4');

col4Items.forEach(function(item) {
  item.addEventListener('click', function() {
    var imageUrl = this.querySelector('img').getAttribute('src');
    
    var productDetail = document.getElementById('product-detail');
    
    productDetail.setAttribute('src', imageUrl);
  });
});
