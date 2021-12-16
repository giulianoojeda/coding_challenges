//Task Description
// Your task is to implement an web api that finds the best person for a job.

"use strict";

const express = require("express");
const app = express();
app.use(express.json());

// Your code starts here. Placeholders for .get and .post are provided for
//  your convenience.

let candidates = [];

app.post("/candidates", function (req, res) {
  // ...
  const { id, name, skills } = req.body;
  // add new candidate
  candidates.push({ id, name, skills });
  //send 200 OK
  res.status(200).send();
});

app.get("/candidates/search", function (req, res) {
  // ...
  const { skills } = req.query;
  // if no skills are provided, return  400 code
  if (!skills) {
    res.status(400).send();
  }
  //Filter candidates by skills
  const candidatesWithSkills = candidates.filter((candidate) => {
    return candidate.skills.some((skill) =>
      skills.toString().split(",").includes(skill)
    );
  });
  // if no candidates with skills
  if (candidatesWithSkills.length === 0) {
    //send 404 Not Found
    res.status(404).send();
  } else if (candidatesWithSkills.length === 1) {
    //send 200 OK
    res.status(200).send(candidatesWithSkills[0]);
  } else {
    //get the best candidate
    const bestCandidate = candidatesWithSkills.reduce((acc, curr) => {
      return acc.skills.filter((skill) =>
        skills.toString().split(",").includes(skill)
      ).length >
        curr.skills.filter((skill) =>
          skills.toString().split(",").includes(skill)
        ).length
        ? acc
        : curr;
    });
    //send 200 OK
    res.status(200).send(bestCandidate);
  }
});

app.listen(process.env.HTTP_PORT || 3000);
