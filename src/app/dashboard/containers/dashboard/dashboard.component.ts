import { Component, OnInit } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Participant, PaymentStatus } from '../../../models'
import { FilterOptions } from '../../models'
import { DashboardService } from '../../services/dashboard.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  participants: Observable<Participant[]> = of([])

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.getAllParticipants()
  }

  getAllParticipants() {
    this.participants = this.dashboardService.getParticipants()
  }

  getParticipantsByStatus(status: string) {
    return (this.participants = this.dashboardService.getParticipantsByStatus(
      status as PaymentStatus
    ))
  }

  getParticipantsByPhoneNumber(phoneNumber: string) {
    return (this.participants =
      this.dashboardService.getParticipantsByPhoneNumber(phoneNumber))
  }
}
