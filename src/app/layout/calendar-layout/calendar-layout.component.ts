import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-layout',
  templateUrl: './calendar-layout.component.html',
  styleUrls: ['./calendar-layout.component.scss']
})
export class CalendarLayoutComponent implements OnInit {
  displayedColumns: string[] = ['timeSlot', 'event'];
  dataSource: any[] = []; // Placeholder for events data

  constructor() { }

  ngOnInit(): void {
    // Example: Fetch events for the current day from API or service
    this.fetchEventsForCurrentDay();
  }

  fetchEventsForCurrentDay(): void {
    // Replace with actual service call to fetch events for the current day
    // Example:
    // this.dataSource = this.eventService.getEventsForDay(new Date());
    // Mock data for demonstration
    this.dataSource = [
      { timeSlot: '00:01 - 01:00', event: 'Meeting with Team A' },
      { timeSlot: '01:01 - 02:00', event: 'Development Review' }
      // Add more events as needed
    ];
  }
}
