import { Component } from '@angular/core';
import { Ristorante } from '../model/ristorante';

@Component({
  selector: 'app-ristorante-vetrina',
  templateUrl: './ristorante-vetrina.component.html',
  styleUrls: ['./ristorante-vetrina.component.css']
})
export class RistoranteVetrinaComponent {
  ristorante?:Ristorante;
}
