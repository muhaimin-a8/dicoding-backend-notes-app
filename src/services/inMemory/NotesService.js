import { nanoid } from 'nanoid';

class NotesService {
  constructor() {
    this._notes = [];
  }

  addNote({ title, body, tags }) {
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNote = {
      id, title, body, tags, createdAt, updatedAt,
    };

    this._notes.push(newNote);

    const isSucess = this._notes.filter((note) => note.id === id).length > 0;

    if (!isSucess) {
      throw new Error('Catatan gagal ditambahkan');
    }

    return id;
  }

  getNotes() {
    return this._notes;
  }

  getNoteById(id) {
    const note = this._notes.filter((n) => n.id === id)[0];

    if (!note) {
      throw new Error('Catatan tidak ditemukan');
    }

    return note;
  }

  editNoteById(id, { title, body, tags }) {
    const i = this._notes.findIndex((n) => n.id === id);

    if (i === -1) {
      throw new Error('Gagal memperbarui catatan. Id tidak ditemukan');
    }

    const updatedAt = new Date().toISOString();

    this._notes[i] = {
      ...this._notes[i],
      title,
      body,
      tags,
      updatedAt,
    };
  }

  deleteNoteById(id) {
    const i = this._notes.findIndex((n) => n.id === id);

    if (i === -1) {
      throw new Error('Catatan gagal dihapus. Id tidak ditemukan');
    }

    this._notes.splice(i, 1);
  }
}

module.exports = NotesService;
