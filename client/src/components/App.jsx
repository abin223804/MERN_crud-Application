import {useState, useEffect} from "react";

import notesStore from "../store/notesStore";
import Notes from "./Notes";
import UpdateNote from "./UpdateNote";

function App() {

const store = notesStore();


    useEffect(() => {
        store.fetchNotes();
    }, []);




    return (
        <div className="App">
            
            <Notes/>
            {store.updateForm._id && (
               <UpdateNote/>
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
