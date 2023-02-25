const App = require("../models/app.model.js");

// Create and Save a new Message
exports.create = (req, res) => {
  const player = new App({
    id: req.body.id,
    name: req.body.name,
    field_goals: req.body.field_goals,
  touchdown_passes:req.body.touchdown_passes,
   rushing_yard:req.body.rushing_yard,
   sacks:req.body.sacks
  });
  player
    .save()
    .then((data) => {
      res.send(data); 
      console.log(player)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Player.",
      });
    });
};

// Retrieve all messages from the database.
exports.findAll = (req, res) => {
  App.find()
    .then((data) => {
      console.log(data + "no data")
      res.send(data);
      console.log(data + "no data")
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving players.",
      });
    });
};

// Find a single message with a playerId
exports.findOne = (req, res) => {
  App.findById(req.params.playerId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.playerId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Message not found with id " + req.params.playerId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving message with id " + req.params.playerId,
      });
    });
};

// Update a message identified by the playerId in the request
exports.update = (req, res) => {
  App.findByIdAndUpdate(
    req.params.playerId,
    {
        id: req.body.id,
        name: req.body.name,
        field_goals: req.body.field_goals,
    touchdown_passes:req.body.touchdown_passes,
    rushing_yard:req.body.rushing_yard,
    sacks:req.body.sacks
    },
    { new: true }
  )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.playerId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Message not found with id " + req.params.playerId,
        });
      }
      return res.status(500).send({
        message: "Error updating message with id " + req.params.playerId,
      });
    });
};

// Delete a message with the specified playerId in the request
exports.delete = (req, res) => {
  App.findByIdAndRemove(req.params.playerId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.playerId,
        });
      }
      res.send({ message: "Message deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Message not found with id " + req.params.playerId,
        });
      }
      return res.status(500).send({
        message: "Could not delete message with id " + req.params.playerId,
      });
    });
};

