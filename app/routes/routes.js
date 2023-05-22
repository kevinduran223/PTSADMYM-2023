module.exports = app => {
  const producto = require("../controllers/producto.controller.js");

  var router = require("express").Router();

  // ruta para realizar el scraping
  router.get("/scraping", producto.scraping); 

  // ruta para listar todos los producto
  router.get("/listado-productos", producto.index);
 
  // ruta para listar productos por codigo
  router.get("/:id/:columna", producto.findOne);
 
  // ruta para listar productos por menor o mayor precio
  //se debe enviar en orden (asc para obtener menor precio) o (desc para mayor precio)
  router.get("/filtro/menor-o-mayor-precio/:orden", producto.findMenorOrMayorPrecio);

  app.use('/api/producto', router);
};
