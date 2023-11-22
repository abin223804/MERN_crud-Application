
import notesStore from "../store/notesStore";

export default function Note({notes}){
         const store=notesStore((store)=>{
            return{
                deleteNote:store.deleteNote,toggleUpdate:store.toggleUpdate
            };
         });


    return(
        <div key={notes._id}>
                    <h3>{notes.title}</h3>
                    <h3>{notes.body}</h3>
                    <button onClick={() => store.deleteNote(notes._id)}>Delete Note</button>

                    <button onClick={() => store.toggleUpdate(notes)}>Update Note</button>
                </div>
    )
}