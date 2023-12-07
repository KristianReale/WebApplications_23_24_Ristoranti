import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sezione-ristorante-vetrina',
  templateUrl: './sezione-ristorante-vetrina.component.html',
  styleUrls: ['./sezione-ristorante-vetrina.component.css']
})
export class SezioneRistoranteVetrinaComponent {
  @Input()stato?:string
}
