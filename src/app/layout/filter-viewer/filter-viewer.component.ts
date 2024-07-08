import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-viewer',
  templateUrl: './filter-viewer.component.html',
  styleUrls: ['./filter-viewer.component.scss']
})
export class FilterViewerComponent {
  // selectedDate: Date | undefined;

  // applyDate() {
  //   if (this.selectedDate) {
  //     alert(`Selected date: ${this.selectedDate.toDateString()}`);
  //   } else {
  //     alert('No date selected');
  //   }
  // }
  selected = <Date | null>(null);
 
  onDateChange(event: Date) {
    console.log(`Selected day: ${event.getDate()}`);
  }
}
