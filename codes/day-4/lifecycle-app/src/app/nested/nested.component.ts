import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrl: './nested.component.css'
})
export class NestedComponent implements OnChanges, OnInit, OnDestroy {
  @Input() personName = 'NA'
  message = ''

  constructor() {
    //this.message = 'Welcome ' + this.personName
    console.log('created...');
  }
  ngOnDestroy(): void {
    console.log('getting destroyed')
  }
  ngOnInit(): void {
    console.log('init...');
    this.message = 'Welcome ' + this.personName
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes...');
    this.message = 'Welcome ' + this.personName
  }
}
