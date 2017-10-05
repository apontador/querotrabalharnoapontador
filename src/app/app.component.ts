import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AppService ]
})
export class AppComponent {
  title = 'Teste Apontador';

  constructor(private _appService: AppService) {}

  ngOnInit(): void {
    this._appService.getData().subscribe();
  }
}

