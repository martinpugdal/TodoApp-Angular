import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { TestComponent } from './test/test.component';
import { BoardCardComponent } from './board-card/board-card.component';

@NgModule({
  declarations: [
        AppComponent,
        BoardComponent,
        TestComponent,
        BoardCardComponent 
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
