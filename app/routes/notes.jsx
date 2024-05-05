import { redirect } from "@remix-run/react";
import NewNote, { links as newNoteLinks } from "../components/NewNote/NewNote";
import { getStoredNotes, storedNotes } from '../data/notes';

export default function NotesPage() {
    return (
        <main>
            <NewNote/>
        </main>
    );
}

// export async function action({ request }) {
//     const formData = await request.formData();
//     const noteData = Object.fromEntries(formData);
//     const existingNotes = await getStoredNotes();
//     noteData.id = new Date().toISOString();
//     const updatedNotes = existingNotes.concat(noteData);
//     await storedNotes(updatedNotes);
//     return redirect('/notes');
// }

export function links() {
    return [...newNoteLinks()];
}