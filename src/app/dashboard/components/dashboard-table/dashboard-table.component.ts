import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core'
import { Participant, PaymentStatus } from '../../../models'

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss'],
})
export class DashboardTableComponent implements OnChanges {
  @ViewChild('phoneNumberField') phoneNumberField!: ElementRef
  @Input() participants: Participant[] = []
  @Output() onsearchbyphonenumber = new EventEmitter<string>()
  @Output() onsearchbystatus = new EventEmitter<string>()
  loading = true

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['participants'] &&
      changes['participants'].currentValue &&
      !changes['participants'].firstChange
    ) {
      console.log('okkkkkkkkk')
      this.loading = false
    }
  }

  onAddParticipant() {}

  onInput() {
    this.loading = true
    this.onsearchbyphonenumber.emit(this.phoneNumberField.nativeElement.value)
  }

  onChange(value: string) {
    this.loading = true
    this.onsearchbystatus.emit(value)
  }
}
