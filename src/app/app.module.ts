import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordGuessComponent } from './word-guess/word-guess.component';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { WordGuessControlComponent } from './word-guess-control/word-guess-control.component';
import { FlipCardControlComponent } from './flip-card-control/flip-card-control.component';
import { RouterModule, Routes } from '@angular/router';
import { WordGuessViewerComponent } from './word-guess-viewer/word-guess-viewer.component';
import { FlipCardViewerComponent } from './flip-card-viewer/flip-card-viewer.component';

const appRoutes : Routes = [
  {
    path: 'word-guess',
    component: WordGuessViewerComponent
  },
  {
    path: 'flip-card',
    component: FlipCardViewerComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    WordGuessComponent,
    FlipCardComponent,
    WordGuessControlComponent,
    FlipCardControlComponent,
    WordGuessViewerComponent,
    FlipCardViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
