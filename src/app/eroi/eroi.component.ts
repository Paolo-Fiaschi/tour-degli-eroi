import { Component, OnInit } from '@angular/core';
import { Eroe } from '../eroe';

@Component({
  selector: 'app-eroi',
  templateUrl: './eroi.component.html',
  styleUrls: ['./eroi.component.css']
})
export class EroiComponent implements OnInit {

  eroe: Eroe = {
    id: 1,
    nome: 'Batman'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
