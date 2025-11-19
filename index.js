import { Server } from "./serverClass.js";

import { LoadBalancer } from "./loadBalancer.js";

import { roundRobin } from "./strategies/roundRobin.js";
import { leastConnections } from "./strategies/leastConnections.js";
import { weighted } from "./strategies/weighted.js";

const servers = [
  new Server("A"),
  new Server("B"),
  new Server("C"),
  new Server("D"),
];

const rr = new LoadBalancer(servers, roundRobin);
const lc = new LoadBalancer(servers, leastConnections);
const wt = new LoadBalancer(servers, weighted);

const runApp = async (loadB) => {
  for (let i = 1; i <= 20; i++) {
    loadB.handleRequest(i).then((res) => {
      console.log(
        `${loadB.name} Request ID ${res.requestId} ${res.server} [${res.time}ms] `
      );
    });
  }
};
// Round Robin
runApp(rr);
// Least Connections
runApp(lc);
// Weighted
runApp(wt);
