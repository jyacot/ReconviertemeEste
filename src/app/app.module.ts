import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormsModule } from '@angular/forms';
import { MontoValidoPipe } from './monto-valido.pipe';
import { MontoFuertePipe } from './monto-fuerte.pipe';
import { MontoSoberanoPipe } from './monto-soberano.pipe';


const AppRoutes: Routes = [
  {path: '', component: CalculadoraComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    MontoValidoPipe,
    MontoFuertePipe,
    MontoSoberanoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
