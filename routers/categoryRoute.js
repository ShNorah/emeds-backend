const router = require("express").Router();
const category = require("../models/categories/categorySchema");

router.post("/api/v1/catergory", async (req, res) => {
  try {
    //creating a new catergory
    const cater = new category({
      categoryName: req.body.name,
      categoryDescription: req.body.description,
      belongs: req.body.belongs,
    });

    const savedCategory = await cater.save();

    res
      .status(201)
      .json({ message: "category created successfully", savedCategory });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error Occured" });
  }
});

module.exports = router