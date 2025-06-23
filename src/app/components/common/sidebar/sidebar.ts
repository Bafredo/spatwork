import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Log{
  data : string;
  timestamp: Date;
  type: 'info' | 'event' | 'update';

}
@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styles: [`
    .ask_ai::placeholder{
        color: gray;
        font-size: 14px;
        letter-spacing: 0.5px;
        font-weight: 300;
    }
  `,`


  .scroll-box::-webkit-scrollbar {
    display: none;
  }
  `]
})
export class Sidebar {

  members: string[] = [
      "Fredrick Muyoma",
      "Jose Marie",
      "Bradley King",
      "John Doe",
      "Jane Smith",
      "Alice Johnson",
      "Michael Brown",
      "Emily Davis",
      "David Wilson",
  ]

  logs : Log[] = [
    {
      data: "Fredrick modified Note 465",
      timestamp: new Date(),
      type: 'update'
    },
    {
      data: "David Wilson has become active",
      timestamp: new Date(),
      type: 'event'
    },
    {
      data: "David wilson joined the workspace",
      timestamp: new Date(),
      type: 'info'
    },
    {
      data: "Ui elements updated",
      timestamp: new Date(),
      type: 'update'
    }
  ]

}
