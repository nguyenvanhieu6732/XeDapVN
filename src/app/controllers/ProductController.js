class ProductController {
    // [GET] /Product/
  
    index(req, res) {
      res.render("detailProduct");
    }
  

  }
  
  module.exports = new ProductController();
  