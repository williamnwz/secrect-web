import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnloggedContainerComponent } from './shared-components/shared/unlogged-container/unlogged-container.component';
import { LoggedContainerComponent } from './shared-components/shared/logged-container/logged-container.component';


const routes: Routes = [
  {
    path:"",
    component : UnloggedContainerComponent
  },{
    path:"posts",
    component:LoggedContainerComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
