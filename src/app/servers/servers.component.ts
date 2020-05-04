import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
  providers: [ServersService]
})
export class ServersComponent implements OnInit  {

  // Servers: any = serverData
  naServers: Array<any> = []
  euServers: Array<any> = []
  serverData = null
  constructor(private serversService: ServersService){}

  ngOnInit(){
    this.serverData = this.serversService.listServers()
    this.filterServers();
  }

  filterServers(){
    for(let server of this.serverData) {
      if(server.locale === "United States"){
        this.naServers.push(server);
      }
      else if(server.locale === "Mexico"){
        this.naServers.push(server);
      }
      else if(server.locale === "United Kingdom"){
        this.euServers.push(server);
      }
      else if(server.locale === "France"){
        this.euServers.push(server)
      }
      else if(server.locale === "Germany"){
        this.euServers.push(server)
      }
      else if(server.locale === "Russia and CIS"){
        this.euServers.push(server)
      }
    }
  }

}
