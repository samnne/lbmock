import { Server } from "./serverClass.js";

import { LoadBalancer } from "./loadBalancer.js";

import { roundRobin } from "./strategies/roundRobin.js";

const servers = [
  new Server("A"),
  new Server("B"),
  new Server("C"),
  new Server("D"),
];

const lb = new LoadBalancer(servers, roundRobin);

const runApp = async () => {
  for (let i = 1; i <= 20; i++) {
    lb.handleRequest(i).then((res) => {
      console.log(`Request ID ${res.requestId} ${res.server} [${res.time}ms] `);
    });
  }
};

runApp();
