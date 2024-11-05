import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [
        AppComponent,
        BoardComponent 
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,

      DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }