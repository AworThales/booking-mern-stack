import express from "express";
const router = express.Router();

// we can take any api request using this router
router.get("/", (req, res) => {
    res.send("Hello this auth endpoint");
})


export default router