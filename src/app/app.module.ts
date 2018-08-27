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
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { SoloNumerosDirective } from './directives/solonumeros.directive';


const AppRoutes: Routes = [
  {path: '', component: CalculadoraComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    MontoValidoPipe,
    MontoFuertePipe,
    MontoSoberanoPipe,
    SoloNumerosDirective
  ],
  imports: [
    BrowserModule,
    CurrencyMaskModule,
    FormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
