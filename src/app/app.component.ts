import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import {timer} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Reconvierteme';
  splash: boolean;

  constructor(private swUpdate: SwUpdate) {
    this.splash = true;
  }

  ngOnInit(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        console.log('Recargando....');
        window.location.reload();
      });
    }
    timer(3000).subscribe(() => {
      this.splash = false;
    });
  }
}
