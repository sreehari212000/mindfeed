import client, { Registry } from "prom-client"
export const register = new Registry
client.collectDefaultMetrics({register})
export const http_request_counter = new client.Counter({
    name: "total_request_count",
    labelNames: ["method", "route", "status_code"],
    help: "Total number of request to the server",
    registers: [register]
})
export const http_request_duration = new client.Histogram({
    name: "http_request_duration",
    help: "Duration of http request in seconds",
    labelNames: ["method", "route", "status_code"],
    buckets: [0.1, 0.3, 0.5, 0.7, 1, 2, 3]
})