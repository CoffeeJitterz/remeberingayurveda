const pool = require("../../db");
const queries = require("./queries");

const getEvents = (req, res) => {
  pool.query(queries.getEvents, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getEventById = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  pool.query(queries.getEventById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addEvent = (req, res) => {
  const { title, date, description, image } = req.body;

  pool.query(
    queries.addEvent,
    [title, date, description, image],
    (error, results) => {
      if (error) throw error;
      res.status(201).send("New Event Created!");
    }
  );
};

const updateEvent = (req, res) => {
    const id = req.params.id
    const { title, date, description, image } = req.body;
    pool.query(queries.getEventById, [id], (error, results) => {
        if (!results.rows.length) {
            res.send("Event Does Not Exist In Database")
        }
        pool.query(queries.updateEvent, [title, date, description, image, id], (error, results) => {
            res.status(200).send(`${title} Updated!`)
        })
    })
}

const deleteEvent = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getEventById, [id],  (error, results) => {
      console.log(results.rows)
    if (!results.rows.length) {
      res.send("Event Does Not Exist In Database");
    }
    pool.query(queries.deleteEvent, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send(`event ${id} Deleted`);
    });
  });
};

module.exports = {
  getEvents,
  getEventById,
  addEvent,
  updateEvent,
  deleteEvent,
};
