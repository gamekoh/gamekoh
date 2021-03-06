import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'portfolio', loadChildren: './portfolio/portfolio.module#PortfolioPageModule' },
  { path: 'profilesave', loadChildren: './profilesave/profilesave.module#ProfilesavePageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
