const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "rfid",
});

app.post("/create", (req, res) => {

    const idd = req.body.idd;
    const name = req.body.name;
    const gender = req.body.gender;
    const email = req.body.email;
    const number = req.body.number;
    const position = req.body.position;

  db.query(
    "INSERT INTO users (tag_id, name, gender, position, email,number) VALUES (?,?,?,?,?,?)",
      [idd, name, gender, position, email,number],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/employees", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/empl/:id", (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM users where tag_id =?",id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.put("/update/id", (req, res) => {
    const id = req.body.id;
    const idd = req.body.idd;
  db.query(
    "UPDATE users  SET tag_id = ? WHERE id = ?",
    [idd, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.put("/update/name", (req, res) => {
    const name = req.body.name;
    const id = req.body.id;
  db.query(
    "UPDATE users  SET name = ? WHERE id = ?",
    [name, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.put("/update/gender", (req, res) => {
    const gender = req.body.gender;
    const id = req.body.id;
  db.query(
    "UPDATE users  SET gender = ? WHERE id = ?",
    [gender, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.put("/update/position", (req, res) => {
    const position = req.body.position;
    const id = req.body.id;
  db.query(
    "UPDATE users  SET position = ? WHERE id = ?",
    [position, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.put("/update/email", (req, res) => {
    const email = req.body.email;
    const id = req.body.id;
  db.query(
    "UPDATE users  SET email = ? WHERE id = ?",
    [email, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.put("/update/number", (req, res) => {
    const number = req.body.number;
    const id = req.body.id;
  db.query(
    "UPDATE users  SET number = ? WHERE id = ?",
    [number, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});


app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM users WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

var data;
app.post('/post-test', (req, res) => {
    console.log('Got body:', req.body);
    data=req.body;

    app.get('/get-test', (req, res) => {
    res.send(data);

});
});



app.listen(4000, () => {
  console.log("Yey, your server is running on port 4000");
});
