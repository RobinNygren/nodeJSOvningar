const express = require("express");
const addEventRoutes = require("./events-routes");

const port = 3000;
const server = express();

server.use(express.json());

addEventRoutes(server);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/*
/events
/participants
/organizers
*/

/* // Hantera alla typer av förfrågningar (GET, POST, PUT, DELETE, etc.)
server.all("*", (req, res) => {
  console.log("Request received");
  console.log("Method: ", req.method); // Visar metoden (GET, POST, etc.)
  console.log("User IP: ", req.ip); // Visar användarens IP-adress
  console.log("User Agent: ", req.headers["user-agent"]); // Visar användarens webbläsare

  res.send(`
    <h1>Hello World!</h1>
    <p>Method: ${req.method}</p>
    <p>Your IP: ${req.ip}</p>
    <p>User Agent: ${req.headers["user-agent"]}</p>
  `);
});

// Starta servern
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
 */
