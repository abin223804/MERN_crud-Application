import {useState, useEffect} from "react";

import notesStore from "../store/notesStore";
import Notes from "./Notes";
import UpdateNote from "./UpdateNote";
import CreateNote from "./CreateNote";

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
                
               <CreateNote/>
               
            )}
        </div>
    );
}

export default App;
