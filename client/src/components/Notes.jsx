import notesStore from "../store/notesStore";
import Note from "./Note";


export default function Notes () {
    const store=notesStore()

  return (
    <div>
    <h2>NOTES :</h2>
    {store.note &&
        store.note.map((notes) => {
            return (
                <Note notes={notes} key={notes._id}/>

            );
        })}
</div>
  )
}


