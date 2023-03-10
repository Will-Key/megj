import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardComponent } from './containers/dashboard/dashboard.component'
import { RouterModule, Routes } from '@angular/router'
import { DashboardTableComponent } from './components/dashboard-table/dashboard-table.component'

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
]

@NgModule({
  declarations: [DashboardComponent, DashboardTableComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DashboardModule {}
