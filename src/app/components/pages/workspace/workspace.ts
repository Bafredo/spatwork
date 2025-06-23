import { Component } from '@angular/core';
import { Sidebar } from "../../common/sidebar/sidebar";
import { Canvas } from "../../onetime/canvas/canvas";

@Component({
  selector: 'app-workspace',
  imports: [Sidebar, Canvas],
  templateUrl: './workspace.html',
  styles: [`
    .work {
      background-image: radial-gradient(circle, #010101 1px, transparent 1px),
              linear-gradient(to bottom right, rgba(0, 102, 204, 0.06), rgba(192, 192, 192, 0.1));

      background-size: 20px 20px;
            background-blend-mode: overlay;

    }
  `]
})
export class Workspace {

}
