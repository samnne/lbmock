export class Server{
    constructor(id, weight =1 ){
        this.id = id
        this.weight = weight
        this.activeRequest = 0
        this.healthy = true

    }

    async proccessRequest(reqID) {
       this.activeRequest++;
       
       const duration = Math.floor(Math.random() * 800) + 200;
       await new Promise(r => setTimeout(r, duration))
       this.activeRequest--;
       return {serverId: this.id, duration}
    }
}

