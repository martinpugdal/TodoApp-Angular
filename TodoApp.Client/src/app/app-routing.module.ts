import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardComponent } from './components/board/board.component';

// Import the modules for lazy loading
const routes: Routes = [
  {
    path: 'board',
    loadComponent: () => BoardComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }