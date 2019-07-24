import { Component, OnInit } from '@angular/core';

import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // loadedFeature = "recipe";

  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }

  // Component and Data binding deep dive
  /* serverElements = [{type: "server", name: "test server", content: "test server content"}];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  } 

  onChangeFirst() {
    this.serverElements[0].name = "Changed";
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  } */

  // Directives related code
  //numbers = [1, 2, 3, 4, 5];
  /* oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false; 
  value = 100; */


  // Service and Dependency Injection
  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }

}
