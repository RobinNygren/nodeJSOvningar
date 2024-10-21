let events = [];
let participants = [];
let organizers = [];

module.exports = (server) => {
  // Events endpoints
  server.get("/events", (req, res) => {
    res.send(events);
  });

  server.get("/events/:id", (req, res) => {
    const id = Number(req.params.id);
    const event = events.find((e) => e.id === id);
    if (event) {
      res.status(200).send(event);
    } else {
      res.status(404).send({ error: "Event not found" });
    }
  });

  server.post("/events", (req, res) => {
    if (!req.body.name.length) {
      return res.status(400).send("No name given");
    }
    const newEvent = {
      id: events.length + 1,
      ...req.body,
    };
    events.push(newEvent);
    res.status(201).send(events);
  });

  server.patch("/events/:id", (req, res) => {
    const id = Number(req.params.id);
    const eventIndex = events.findIndex((e) => e.id === id);

    if (eventIndex !== -1) {
      events[eventIndex] = {
        ...events[eventIndex],
        ...req.body,
      };
      res.status(200).send(events[eventIndex]);
    } else {
      res.status(404).send({ error: "Event not found" });
    }
  });

  server.delete("/events/:id", (req, res) => {
    const id = Number(req.params.id);
    events = events.filter((e) => e.id !== id);
    res.status(200).send(events);
  });

  // Participants endpoints
  server.get("/participants", (req, res) => {
    res.send(participants);
  });

  server.get("/participants/:id", (req, res) => {
    const id = Number(req.params.id);
    const participant = participants.find((p) => p.id === id);
    if (participant) {
      res.status(200).send(participant);
    } else {
      res.status(404).send({ error: "Participant not found" });
    }
  });

  server.post("/participants", (req, res) => {
    if (!req.body.name || !req.body.name.length) {
      return res.status(400).send("No name provided for participant");
    }
    const newParticipant = {
      id: participants.length + 1,
      ...req.body,
    };
    participants.push(newParticipant);
    res.status(201).send(participants);
  });

  server.patch("/participants/:id", (req, res) => {
    const id = Number(req.params.id);
    const participantIndex = participants.findIndex((p) => p.id === id);

    if (participantIndex !== -1) {
      participants[participantIndex] = {
        ...participants[participantIndex],
        ...req.body,
      };
      res.status(200).send(participants[participantIndex]);
    } else {
      res.status(404).send({ error: "Participant not found" });
    }
  });

  server.delete("/participants/:id", (req, res) => {
    const id = Number(req.params.id);
    participants = participants.filter((p) => p.id !== id);
    res.status(200).send(participants);
  });

  // Organizers endpoints
  server.get("/organizers", (req, res) => {
    res.send(organizers);
  });

  server.get("/organizers/:id", (req, res) => {
    const id = Number(req.params.id);
    const organizer = organizers.find((o) => o.id === id);
    if (organizer) {
      res.status(200).send(organizer);
    } else {
      res.status(404).send({ error: "Organizer not found" });
    }
  });

  server.post("/organizers", (req, res) => {
    if (!req.body.name || !req.body.name.length) {
      return res.status(400).send("No name provided for organizer");
    }
    const newOrganizer = {
      id: organizers.length + 1,
      ...req.body,
    };
    organizers.push(newOrganizer);
    res.status(201).send(organizers);
  });

  server.patch("/organizers/:id", (req, res) => {
    const id = Number(req.params.id);
    const organizerIndex = organizers.findIndex((o) => o.id === id);

    if (organizerIndex !== -1) {
      organizers[organizerIndex] = {
        ...organizers[organizerIndex],
        ...req.body,
      };
      res.status(200).send(organizers[organizerIndex]);
    } else {
      res.status(404).send({ error: "Organizer not found" });
    }
  });

  server.delete("/organizers/:id", (req, res) => {
    const id = Number(req.params.id);
    organizers = organizers.filter((o) => o.id !== id);
    res.status(200).send(organizers);
  });
};
