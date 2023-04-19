var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
var monk = require("monk");
var db = monk(
  "mongodb+srv://db_mobile:db_mobile@cluster0.07snb.mongodb.net/Mobile_db?retryWrites=true&w=majority",
  function (err, connected) {
    if (err) {
      console.log(
        "MongoDB AtlasConnection failed! 🙁\nPlease check your internet connection\n"
      );
    } else {
      console.log("MongoDB Atlas is connected..! 😃\n");
    }
  }
);
var mailcountdata = db.get("mailcountdata");
var todocoll = db.get("todocoll");

/* GET index page. */
router.get("/", function (req, res) {
  res.render("index");
});

router.get("/index", function (req, res) {
  res.render("index");
});

router.get("/animenu", function (req, res) {
  res.render("animenu");
});

router.get("/about", function (req, res) {
  todocoll.find({}, function (err, db) {
    todocoll.find({ status: "Pending" }, function (err, db1) {
      todocoll.find({ status: "Completed" }, function (err, db2) {
        if (err) {
          console.log(err);
        } else {
          res.render("about", { data: db, data1: db1, data2: db2 });
        }
      });
    });
  });
});

router.get("/todo", function (req, res) {
  res.render("todo");
});

router.get("/javapdf", function (req, res) {
  res.render("javapdf");
});

router.get("/meanstack", function (req, res) {
  res.render("meanstack");
});

router.get("/videosample", function (req, res) {
  res.render("videosample");
});

router.get("/BirdShooting_game", function (req, res) {
  res.render("BirdShooting_game");
});

router.get("/Snake_game", function (req, res) {
  res.render("Snake_game");
});

router.get("/BullsEye", function (req, res) {
  res.render("BullsEye");
});

router.get("/TicTacToe", function (req, res) {
  res.render("TicTacToe");
});

router.get("/2048_game", function (req, res) {
  res.render("2048_game");
});

router.get("/wallpaper", function (req, res) {
  res.render("wallpaper");
});

router.get("/quotes", function (req, res) {
  res.render("quotes");
});

router.get("/covid", function (req, res) {
  res.render("covid");
});

router.get("/digitalresume", function (req, res) {
  res.render("digitalresume");
});

router.post("/hh", function (req, res) {
  var data = {
    tno: req.body.tno,
    tname: req.body.tname,
    status: "Pending",
  };
  todocoll.insert(data, function (err, db) {
    if (err) {
      console.log(err);
    } else {
      console.log(db);
      res.redirect("/about");
    }
  });
});

router.post("/change", function (req, res) {
  todocoll.update(
    { tno: req.body.tno },
    { $set: { status: "Completed" } },
    function (err, docs) {
      console.log(docs);
    }
  );
  res.redirect("/about");
});

router.post("/postmail", function (req, res) {
  var userdata = {
    name: req.body.name,
    mail: req.body.email,
  };
  mailcountdata.insert(userdata);
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "edifakemail0@gmail.com",
      pass: "gidijala.123",
    },
  });

  var mailOptions = {
    from: "edifakemail0@gmail.com",
    to: req.body.email,
    subject: "Website visit",
    text: "Hello" + req.body.name,
    html:
      "Hey " +
      req.body.name +
      " Thank you for visiting my website.!" +
      "With Regards - <b>Bhargava_Gidijala M.C.A</b>",
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log("\nEmail has sent successfully !\n");
      res.send(info);
    }
  });
});

module.exports = router;
