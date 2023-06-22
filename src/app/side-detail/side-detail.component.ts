import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-detail',
  templateUrl: './side-detail.component.html',
  styleUrls: ['./side-detail.component.css']
})
export class SideDetailComponent {
  @Input() data;
}
