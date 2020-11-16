import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export function addition(oper1:number, oper2:number) {
  return oper1 + oper2;
}
