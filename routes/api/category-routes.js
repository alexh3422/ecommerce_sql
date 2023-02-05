const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // finds all of the  categories and includes the associated products
  Category.findAll({
    include: [Product],
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });

});

router.get("/:id", (req, res) => {
 //finds one category by its `id` value and includes the associated products
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [Product],
  }).then((dbCategoryData) => {
    if (!dbCategoryData) {
      res.status(404).json({ message: "No category found with this id" });
      return;
    }
    res.json(dbCategoryData);
  });

});

router.post("/", (req, res) => {
//creates a new category 
  Category.create({
    category_name: req.body.category_name,
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
// updates a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((dbCategoryData) => {
    if (!dbCategoryData) {
      res.status(404).json({ message: "No category found with this id" });
      return;
    }
    res.json(dbCategoryData);
  });
});

router.delete("/:id", (req, res) => {
  Category.findByPk(req.params.id)
    .then(category => {
      if (!category) {
        return res.status(404).json({ message: "No category found with this id" });
      }
      return Product.update({ category_id: null }, { where: { category_id: category.id } })
        .then(() => {
          return category.destroy();
        });
    })
    .then(dbCategoryData => {
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});


module.exports = router;
