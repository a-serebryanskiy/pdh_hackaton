import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent implements OnInit {
  source = 'открытые данные';

  constructor() { }

  ngOnInit(): void {
  }

}
