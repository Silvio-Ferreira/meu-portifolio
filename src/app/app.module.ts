import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { InicioComponent } from "./components/inicio/inicio.component";
import { SobreMimComponent } from './components/sobre-mim/sobre-mim.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { ConhecimentosComponent } from './components/conhecimentos/conhecimentos.component';
import { FaleComigoComponent } from './components/fale-comigo/fale-comigo.component';


@NgModule({
    declarations: [
        AppComponent,
        MenuBarComponent,
        HomeComponent,
        SobreMimComponent,
        ProjetosComponent,
        ConhecimentosComponent,
        FaleComigoComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        InicioComponent
    ]
})
export class AppModule { }
