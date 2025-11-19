export class LoadBalancer {
  constructor(servers, strategy) {
    this.servers = servers;
    this.strategy = strategy;
  }

  async handleRequest(reqId) {
    const server = this.strategy(this.servers);
    const start = Date.now();

    const result = await server.proccessRequest(reqId);

    const time = Date.now() - start;

    return {
      requestId: reqId,
      server: result.serverId,
      time,
    };
  }
}
