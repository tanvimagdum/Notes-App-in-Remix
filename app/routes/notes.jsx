import { Link, redirect, useLoaderData } from "@remix-run/react";
import NewNote, { links as newNoteLinks } from "../components/NewNote/NewNote";
import NoteList, { links as noteListLinks } from "../components/NoteList/NoteList";
import { getStoredNotes, storedNotes } from '../data/notes';

export default function NotesPage() {
    const notes = useLoaderData();
    return (
        <main>
            <NewNote/>
            <NoteList notes={notes}/>
        </main>
    );
}

export async function loader() {
    const notes = await getStoredNotes();
    return notes;
}

export async function action({ request }) {
    const formData = await request.formData();
    const noteData = Object.fromEntries(formData);

    if (noteData.title.trim().length < 5) {
        return {message: 'Invalid title, must be longer than 5 characters.'}
    }

    const existingNotes = await getStoredNotes();
    noteData.id = new Date().toISOString();
    const updatedNotes = existingNotes.concat(noteData);
    await storedNotes(updatedNotes);
    // await new Promise((resolve, reject)=> setTimeout(() => resolve(), 2000));
    return redirect('/notes');
}

export function links() {
    return [...newNoteLinks(), ...noteListLinks()];
}

export function ErrorBoundary() {
    return (
        <main className="error">
          <h1>An error related to your notes occurred !</h1>
          {/* <p>{error.message}</p> */}
          <p>Back to <Link to="/">Safety</Link>!</p>
        </main>
    );
}