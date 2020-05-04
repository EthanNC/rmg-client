import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server-detail',
  templateUrl: './server-detail.component.html',
  styleUrls: ['./server-detail.component.scss'],
  providers: [ServersService]
})
export class ServerDetailComponent implements OnInit {

  Name = this.router.url.split("/")[2].split('%20').join(' ')
  serverData = null
  Data = null
  constructor(public router:Router, private serversService:ServersService) {}

  ngOnInit(): void {
    this.serverData = this.serversService.listServers()
    this.getData()
  }

  getData(){
    this.Data = this.serverData.filter(server => server.name === this.Name)[0] 
  }

}
