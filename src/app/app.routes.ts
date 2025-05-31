import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PresidenciaComponent } from './components/pages/presidencia/presidencia.component';
import { ProjetosComponent } from './components/pages/projetos/projetos.component';
import { FinancasComponent } from './components/pages/financas/financas.component';
import { RhComponent } from './components/pages/rh/rh.component';
import { InfraComponent } from './components/pages/infra/infra.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'presidencia', component: PresidenciaComponent },
    { path: 'projetos', component: ProjetosComponent },
    { path: 'financas', component: FinancasComponent },
    { path: 'rh', component: RhComponent },
    { path: 'infra', component: InfraComponent },
];
