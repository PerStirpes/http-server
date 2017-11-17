const http = require("http")

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.writeHead(200, {"Content-Type": "text/html"})
    response.end(
      "Yo Dawg, I herd you like (noun X), so I put an (noun X) in your (noun Y) so you can (verb Z) while you (verb Z)."
    )
  } else if (request.url === "/goodbye") {
    if (request.method === "GET") {
      response.writeHead(200, {"Content-Type": "text/html"})
      response.end("<strong>Ghosting</strong>")
    } else if (request.method === "POST") {
      response.writeHead(200, {"Content-Type": "text/html"})
      response.end("Doge")
    }
  }
})

server.listen(4200)
