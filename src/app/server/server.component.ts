import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    styleUrl: './server.component.css',
    templateUrl: './server.component.html'

})

export class AppServerComponent{
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(){
        return this.serverStatus = 'online';
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

}