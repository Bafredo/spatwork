import { Injectable, signal, computed } from '@angular/core';

export interface Note {
  id: number;
  title?: string;
  content?: string;
  x?: number;
  y?: number;
  zIndex?: number;
  width: number;
  height: number;
  backgroundColor: string;
  owner?: string; // Optional field for owner
}

@Injectable({
  providedIn: 'root',
})
export class CanvasManager {
  private _notes = signal<Note[]>([]);
  private _selectedNote = signal<Note | null>(null);

  // Public read-only signals
  notes = this._notes.asReadonly();
  selectedNote = this._selectedNote.asReadonly();

  props: Note = {
    id: 0,
    title: 'Title of Note',
    content: 'Enter your note content here...',
    x: 0,
    y: 0,
    zIndex: 0,
    width: 250,
    height: 200,
    backgroundColor: 'rgba(82, 206, 255, 0.8)', // Default background color
    owner: 'Fredrick Muyoma', // Default owner, can be changed later
  };

  constructor() {}

  addNote(): void {
    const currentNotes = this._notes();
    const newNote: Note = {
      ...this.props,
      id: currentNotes.length ? currentNotes[currentNotes.length - 1].id + 1 : 1,
      zIndex: currentNotes.length,
    };
    this._notes.set([...currentNotes, newNote]);
    this._selectedNote.set(newNote);
  }

  getNote(id: number): Note | undefined {
    return this._notes().find(note => note.id === id);
  }

  updateNote(id: number, updatedFields: Partial<Note>): void {
    this._notes.update(notes =>
      notes.map(note => (note.id === id ? { ...note, ...updatedFields } : note))
    );
  }

  deleteNote(id: number): void {
    this._notes.update(notes => notes.filter(note => note.id !== id));
    if (this._selectedNote()?.id === id) {
      this._selectedNote.set(null);
    }
  }

  selectNote(id: number): void {
    const note = this.getNote(id);
    this._selectedNote.set(note || null);
  }

  deselectNote(): void {
    this._selectedNote.set(null);
  }

  bringToFront(id: number): void {
    const note = this.getNote(id);
    if (note) {
      const maxZ = Math.max(...this._notes().map(n => n.zIndex || 0));
      this.updateNote(id, { zIndex: maxZ + 1 });
    }
  }

  sendToBack(id: number): void {
    const note = this.getNote(id);
    if (note) {
      const minZ = Math.min(...this._notes().map(n => n.zIndex || 0));
      this.updateNote(id, { zIndex: minZ - 1 });
    }
  }

  moveNote(id: number, x: number, y: number): void {
    this.updateNote(id, { x, y });
  }

  resizeNote(id: number, width: number, height: number): void {
    this.updateNote(id, { width, height });
  }

  setNoteBackground(id: number, color: string): void {
    this.updateNote(id, { backgroundColor: color });
  }

  clearCanvas(): void {
    this._notes.set([]);
    this._selectedNote.set(null);
  }

  duplicateNote(id: number): void {
    const original = this.getNote(id);
    if (!original) return;

    const currentNotes = this._notes();
    const newNote: Note = {
      ...original,
      id: currentNotes.length ? currentNotes[currentNotes.length - 1].id + 1 : 1,
      x: (original.x || 0) + 20,
      y: (original.y || 0) + 20,
      zIndex: (original.zIndex || 0) + 1,
    };

    this._notes.set([...currentNotes, newNote]);
    this._selectedNote.set(newNote);
  }
}
