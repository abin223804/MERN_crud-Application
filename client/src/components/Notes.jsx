import notesStore from "../store/notesStore";


export default function Notes () {
    const store=notesStore()

  return (
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
  )
}


