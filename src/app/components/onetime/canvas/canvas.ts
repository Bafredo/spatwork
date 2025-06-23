import { Component } from '@angular/core';
import { CanvasManager, Note } from '../../../services/canvas-manager';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-canvas',
  standalone: true,
  templateUrl: './canvas.html',
  imports: [CommonModule, FormsModule],
  styles: [`
    .note {
      position: absolute;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      padding: 1rem;
      border-radius: 8px;
      cursor: grab;
    }
    .note:active {
      cursor: grabbing;
    }
  `]
})
export class Canvas {
  constructor(public canvasManager: CanvasManager) {}

  get notes() {
    return this.canvasManager.notes();
  }

  get selectedNote() {
    return this.canvasManager.selectedNote();
  }

  

  addNote() {
    this.canvasManager.addNote();
  }

  selectNote(note: Note) {
    this.canvasManager.selectNote(note.id);
    this.canvasManager.bringToFront(note.id);
  }

  deleteNote(note: Note) {
    this.canvasManager.deleteNote(note.id);
  }

  duplicateNote(note: Note) {
    this.canvasManager.duplicateNote(note.id);
  }

  clearCanvas() {
    this.canvasManager.clearCanvas();
  }

  onDrag(event: MouseEvent, note: Note) {
  event.preventDefault();

  const offsetX = event.offsetX;
  const offsetY = event.offsetY;

  const canvas = document.documentElement; // or use a specific div for bounds

  const move = (e: MouseEvent) => {
    const canvasWidth = (canvas.clientWidth * 0.75);
    const canvasHeight = canvas.clientHeight;

    // Calculate intended new position
    let newX = e.clientX - offsetX;
    let newY = e.clientY - offsetY;

    // Clamp X and Y to prevent overflow
    newX = Math.max(0, Math.min(newX, canvasWidth - note.width));
    newY = Math.max((window.innerHeight * 0.08), Math.min(newY, (canvasHeight - note.height)));
    newY = newY - (window.innerHeight * 0.08); // Adjust for header height
    

    this.canvasManager.moveNote(note.id, newX, newY);
  };

  const up = () => {
    window.removeEventListener('mousemove', move);
    window.removeEventListener('mouseup', up);
  };

  window.addEventListener('mousemove', move);
  window.addEventListener('mouseup', up);
}
  copyToClipboard(text : string | undefined) {
  if(text){navigator.clipboard.writeText(text)
    .then(() => {
      console.log('Text copied to clipboard');
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
    });}
}


}
