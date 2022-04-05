const Router = require("express");
const router = Router();
const fs = require("fs");
const path = require("path");
let data = fs.readFileSync(path.join(__dirname, "../public/db/db.json"), {
  encoding: "utf8",
  flag: "r",
});

let db = JSON.parse(data);

router.post("/payment", (req, res) => {
  const { student_name, faculty, grade, payment } = req.body;

  db = [{ student_name, faculty, grade, payment }];

  fs.writeFileSync(
    path.join(__dirname, "../public/db/db.json"),
    JSON.stringify(db)
  );
  res.render("details", {
    db,
  });
});

router.post("/change", (req, res) => {
  let data = fs.readFileSync(path.join(__dirname, "../public/db/db.json"), {
    encoding: "utf8",
    flag: "r",
  });

  let db = JSON.parse(data);

  const { new_name, new_grade, new_faculty, new_total } = req.body;

  db[0].student_name = new_name;
  db[0].faculty = new_faculty;
  db[0].payment = new_total;
  db[0].grade = new_grade;

  fs.writeFileSync(
    path.join(__dirname, "../public/db/db.json"),
    JSON.stringify(db)
  );

  let user_data = fs.readFileSync(
    path.join(__dirname, "../public/db/db.json"),
    {
      encoding: "utf8",
      flag: "r",
    }
  );

  let ud = JSON.parse(user_data);
  res.render("details", {
    db: ud,
  });
});

router.post("/delete", (req, res) => {
  fs.writeFileSync(
    path.join(__dirname, "../public/db/db.json"),
    JSON.stringify([])
  );

  let data = fs.readFileSync(path.join(__dirname, "../public/db/db.json"), {
    encoding: "utf8",
    flag: "r",
  });

  let db = JSON.parse(data);
  res.render("details", {
    db,
  });
});

module.exports = router;
