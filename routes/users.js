// import express
const { Router } = require("express");
// import controllers/products
const controllers = require("../controllers/users");

// enstantiating router
const router = Router();

// defining our routes
// table of contents for routes.
// CRUD

router.get("/users", controllers.getUsers);
router.get("/users/:id", controllers.getUser);
router.post("/users", controllers.createUser);
router.put("/users/:id", controllers.updateUser);
router.delete("/users/:id", controllers.deleteUser);

module.exports = router;
