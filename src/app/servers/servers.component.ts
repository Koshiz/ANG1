import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus : string = 'No server was created!';
  serverName : string = 'TestServer';
  serverCreated : boolean = false;
  servers = ['TestServer', 'TestServer 2'];

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)

  }

  ngOnInit(){

  }

  onCreateServer(){
     this.serverCreationStatus = 'Server was created! Server Name: ' + this.serverName;
     this.serverCreated = true;
     this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;

  }

}
