let index = 0;

export function roundRobin(servers) {
  let server = servers[index % servers.length];
  index++;
  if (!server.healthy) {
    for (let i = 0; i < servers.length; i++) server = servers[i];
  }
  return server;
}
