import { Injectable } from '@angular/core';
import servers from './servers.json'

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor() { }
  serverData = servers

  listServers(){
    return this.serverData
  }
}
