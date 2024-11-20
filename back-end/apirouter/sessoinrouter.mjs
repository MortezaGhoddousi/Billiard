



// getAll
sessoinrouter.get("/checkall", (req, res) => {
    getAll()
      .then((results) => {
        res.status(200).send(results);
      })
      .catch((err) => res.status(500).send({ ERROR: err }));
  });
  
  // get by id
  sessoinrouter.get("/:id", (req, res) => {
    get(req.params.id)
      .then((result) => {
        if (result) {
          res.status(200).send(result);
        } else {
          res.status(404).send({ ERROR: " not found" });
        }
      })
      .catch((err) => res.status(500).send({ ERROR: err }));
  });
  
  // add
  sessoinrouter.post("/", (req, res) => {
    add(req.body)
      .then((result) => {
        res.status(200).send({ STATUS: "Data added successfully" });
      })
      .catch((err) => res.status(500).send({ ERROR: err }));
  });
  
  // delete
  sessoinrouter.delete("/:id", (req, res) => {
    deletes(req.params.id)
      .then((result) => {
        if (result) {
          res.status(200).send({ STATUS: "Data deleted successfully" });
        } else {
          res.status(404).send({ ERROR: " not found" });
        }
      })
      .catch((err) => res.status(500).send({ ERROR: err }));
  });
  
  // update
  sessoinrouter.put("/:id", (req, res) => {
    update(req.params.id, req.body.role)
      .then((result) => {
        if (result) {
          res.status(200).send({ STATUS: "Data updated successfully" });
        } else {
          res.status(404).send({ ERROR: " not found for updating" });
        }
      })
      .catch((err) => res.status(500).send({ ERROR: err }));
  });
  export default  sessoinrouter ;