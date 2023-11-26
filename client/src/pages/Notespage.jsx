import {useEffect} from "react";
import notesStore from "../store/notesStore";
import Notes from "../components/Notes";
import UpdateNote from "../components/UpdateNote";
import CreateNote from "../components/CreateNote";

export default function Notespage() {
    const store = notesStore();

    useEffect(() => {
        store.fetchNotes();
    }, []);
    return (
        <div>
            <Notes />
            <UpdateNote />
            <CreateNote />
        </div>
    );
}
