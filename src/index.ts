import http from 'http'
import { on } from 'events'
import { add } from "./mod.js";


const server = http.createServer()
const requests = on(server.listen(3000), 'request')

for await (let [request, reply] of requests) {
  const res = add(1, 2)

  reply.end(`the result is ${res}`)
}

