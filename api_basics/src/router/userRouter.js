import express from "express";

let dataBase = [
  {
    id: 1,
    fName: "Prashrijan",
    lName: "Shrestha",
  },
  {
    id: 2,
    fName: "Shubik",
    lName: "Bhatt",
  },
  {
    id: 3,
    fName: "Ram",
    lName: "Dhimal",
  },
];

const router = express.Router();
router.get("/", (req, res) => {
  res.json(dataBase);
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send(200, dataBase);
});

router.put("/", (_, res) => {
  res.json({
    message: "Server put is ready",
  });
});
router.delete("/", (_, res) => {
  res.json({
    message: "Server delete is ready",
  });
});

export default router;
