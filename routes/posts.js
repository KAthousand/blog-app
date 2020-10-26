// import express
const { Router } = require("express");
// import controllers/products
const controllers = require("../controllers/posts");

// enstantiating router
const router = Router();

// defining our routes
// table of contents for routes.
// CRUD

router.get("/posts", controllers.getPosts);
router.get("/posts/:id", controllers.getPost);
router.post("/posts", controllers.createPost);
router.put("/posts/:id", controllers.updatePost);
router.delete("/posts/:id", controllers.deletePost);

module.exports = router;
