import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MarchAprilPageComponent} from './march-april/march-april-page.component';
import {StabilityPageComponent} from './stability-page-component/stability-page.component';
import {VulnerablePageComponent} from './vulnerable-page/vulnerable-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'march-april',
    pathMatch: 'full'
  },
  {
    path: 'march-april',
    component: MarchAprilPageComponent
  },
  {
    path: 'stability',
    component: StabilityPageComponent
  },
  {
    path: 'vulnerable',
    component: VulnerablePageComponent
  }
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
