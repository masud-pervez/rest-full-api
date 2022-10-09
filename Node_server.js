const http = require("http");

const todos = [
  {
    id: 1,
    text: "todo one",
  },
  {
    id: 2,
    text: "todo two",
  },
  {
    id: 3,
    text: "todo three",
  },
];

const server = http.createServer((req, res) => {
  const { method, url } = req;
  // console.log(req.headers.authorization);
  let body = [];
  req
    .on("data", (chunk) => {
      body.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();

      let status = 404;

      const response = {
        success: false,
        data: null,
      };

      if (method === "GET" && url === "/todos") {
        (status = 200), (response.success = true), (response.data = todos);
      } else if (method === "POST" && url === "/todos") {
        const { id, text } = JSON.parse(body);

        if (!id || !text) {
          status = 400;
        } else {
          todos.push({ id, text });
          status = 201;
          response.success = true;
          response.data = todos;
        }
      }

      res.writeHead(status, {
        "Content-Type": "application/json",
        "X-powered-By": "node.js",
      });

      res.end(JSON.stringify(response));
    });
});
const PORT = 5000;

server.listen(PORT, () => console.log(`server is runing on port ${PORT}`));
