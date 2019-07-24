import { Component, 
  OnInit, 
  Input, 
  OnChanges, 
  SimpleChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked,
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, 
 OnChanges, 
 DoCheck,
 AfterContentInit,
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked,
 OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
   }

  ngOnChanges(changes: SimpleChanges) { //It is the only lifecycle hook which receives arguements
    console.log('ngOnChanges called');
    console.log('ngOnChanges changes ::',changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('ngOnInit header Text content ::', this.header.nativeElement.textContent);
    console.log('ngOnInit paragraph Text content ::', this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }  

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log('ngAfterContentInit paragraph Text content ::', this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }
  
  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log('ngAfterViewInit header Text content ::', this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }    

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }

}