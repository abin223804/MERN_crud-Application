import {useState, useEffect} from "react";
import axios from "axios";
import notesStore from "../store/notesStore";

function App() {

const store=notesStore();


    useEffect(() => {
        store.fetchNotes();
    }, []);




    return (
        <div className="App">
            <div>
                <h2>NOTES :</h2>
                {store.note &&
                    store.note.map((notes) => {
                        return (
                            <div key={notes._id}>
                                <h3>{notes.title}</h3>
                                <h3>{notes.body}</h3>
                                <button onClick={() => store.deleteNote(notes._id)}>Delete Note</button>

                                <button onClick={() => store.toggleUpdate(notes)}>Update Note</button>
                            </div>
                        );
                    })}
            </div>

            {store.updateForm._id && (
                <div>
                    <h2>Update Note</h2>
                    <form onSubmit={store.updateNote}>

                        <input onChange={store.handleUpdateFieldChange} value={store.updateForm.title} name="title" />
                        <textarea onChange={store.handleUpdateFieldChange} value={store.updateForm.body} name="body" />
                        <button type="submit">Update Note</button>
                    </form>
                </div>
            )}
            {!store.updateForm._id && (
                <div>
                    <h2>Create Note:</h2>
                    <form onSubmit={store.CreateNote}>
                        <input onChange={store.updateCreateFormField} value={store.createForm.title} name="title" />
                        <textarea onChange={store.updateCreateFormField} value={store.createForm.body} name="body" />
                        <button type="submit">Create Note</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default App;
