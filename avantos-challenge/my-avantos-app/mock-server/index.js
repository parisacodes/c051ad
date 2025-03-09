const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3001;

const server = http.createServer((req, res) => {
  if (req.url.match(/\/api\/v1\/[^/]+\/actions\/blueprints\/[^/]+\/[^/]+\/graph/) && req.method === "GET") {
    const filePath = path.join(__dirname, "graph.json");

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Failed to load graph.json" }));
        return;
      }
      res.writeHead(200, { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" });
      res.end(data);
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Resource not found!" }));
  }
});

server.listen(PORT, () => {
  console.log(`Mock server running at http://localhost:${PORT}`);
});
