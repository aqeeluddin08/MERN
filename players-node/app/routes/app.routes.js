module.exports = (app) => {
    const App = require("../controllers/app.controller.js");
  
    app.post("/create", App.create);
  
    app.get("/get-all", App.findAll);
  
    app.get("/getone/:playerId", App.findOne);
  
    app.put("/edit/:playerId", App.update);
  
    app.delete("/delete/:playerId", App.delete);
  };