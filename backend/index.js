const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const cors = require("cors");
app.use(cors());

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://maheshkmb64:mahesh@se2023.8igkhzl.mongodb.net/SE2023",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  repassword: String,
});

const UserModel = mongoose.model("UserModel", userSchema);

const TeamsSchema = new mongoose.Schema({
  teamName: String,
});

const TeamsModel = mongoose.model("TeamsModel", TeamsSchema);

const ProjectsSchema = new mongoose.Schema({
  proj_name: String,
  proj_desc: String,
  prod_owner_id: String,
  mgr_id: String,
  team_id: String,
});

const Projects = mongoose.model("Projects", ProjectsSchema);

app.post("/register", (req, res) => {
  console.log(req.body);
  const { firstName, lastName, email, password, repassword } = req.body;
  UserModel.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "This email id already registered" });
    } else {
      const user = new UserModel({
        firstName,
        lastName,
        email,
        password,
        repassword,
      });
      user.save();
      res.send({ message: "Successful Register" });
    }
  });
});

app.post("/login", (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  UserModel.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successful", user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "This email id is not registered" });
    }
  });
});

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, users) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error fetching users" });
    } else {
      res.status(200).json(users);
    }
  });
});

app.post("/createProject", express.json(), (req, res) => {
  const { proj_name, proj_desc, prod_owner_id, mgr_id, team_id } = req.body;

  const projects = new Projects({
    proj_name,
    proj_desc,
    prod_owner_id,
    mgr_id,
    team_id,
  });

  projects
    .save()
    .then(() => {
      res.send({ message: "Project created successfully" });
    })
    .catch((error) => {
      console.error(error);
      res
        .status(500)
        .send({ message: "Error creating project", error: error.message });
    });
});

app.post("/createTeam", (req, res) => {
  const { teamName } = req.body;

  const teams = new TeamsModel({
    teamName,
  });

  teams
    .save()
    .then(() => {
      res.send({ message: "Team created successfully" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send({ message: "Error creating team" });
    });
});

app.get("/getProjects", (req, res) => {
  Projects.find({}, (err, projects) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error fetching projects" });
    } else {
      res.status(200).json(projects);
    }
  });
});

app.get("/getTeams", (req, res) => {
  TeamsModel.find({}, (err, teams) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error fetching teams" });
    } else {
      res.status(200).json(teams);
    }
  });
});

app.listen(8080, () => {
  console.log("server is running at port 8080");
});
