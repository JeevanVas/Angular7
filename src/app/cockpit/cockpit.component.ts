import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef; //to access the DOM element

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      // serverName: this.newServerName,
      // serverContent: this.newServerContent,
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value      
    })
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      // serverName: nameInput.value,
      // serverContent: this.newServerContent,
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }    

}
