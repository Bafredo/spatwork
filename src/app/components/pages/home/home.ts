import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface WorkSpace {
  id: string;
  name: string;
  goal: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styles: ``
})
export class Home {

  myWorkSpaces: WorkSpace[] = [
    {      id: '1',
      name: 'Personal Projects',
      goal: 'To manage my personal projects efficiently.'   
    },
    {      id: '2',
      name: 'Work Projects',
      goal: 'To keep track of my work-related tasks and projects.'
    },
    {      id: '3',
      name: 'Hobbies',
      goal: 'To explore and manage my hobbies and personal interests.'
    },
    {      id: '4',
      name: 'Learning',
      goal: 'To organize my learning resources and progress.'
    },
    {      id: '5',
      name: 'Health & Fitness',
      goal: 'To track my health and fitness goals.'
    }
  ];

  sharedWorkSpaces: WorkSpace[] = [
    {      id: '6',
      name: 'Community Projects',
      goal: 'To collaborate on community-driven projects.'  
    },
    {      id: '7',
      name: 'Open Source Contributions',
      goal: 'To contribute to open source projects and initiatives.'
    },
    {      id: '8',
      name: 'Team Collaboration',
      goal: 'To work together with my team on various tasks and projects.'
    },
    {      id: '9',
      name: 'Event Planning',
      goal: 'To organize and manage events effectively.'  
    },
    {      id: '10',
      name: 'Personal Development',
      goal: 'To focus on my personal growth and self-improvement.'
    }
  ];

}
