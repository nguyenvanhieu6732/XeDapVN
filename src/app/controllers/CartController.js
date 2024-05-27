class CartController {
    // [GET] /blog/
  
    index(req, res) {
      res.render("viewCart");
    }
  

  }
  
  module.exports = new CartController();
  