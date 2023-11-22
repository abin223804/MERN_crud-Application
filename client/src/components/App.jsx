import {useState, useEffect} from "react";
import axios from "axios";
import notesStore from "../store/notesStore";

function App() {

const store=notesStore();

    const [note, setNote] = useState(null);
    const [createForm, setCreateForm] = useState({
        title: "",
        body: "",
    });
    const [updateForm, setUpdateForm] = useState({
        _id: null,
        title: "",
        body: "",
    });

    useEffect(() => {
        store.fetchNotes();
    }, []);



    const fetchNotes = async () => {
        const res = await axios.get("http://localhost:4000/notes");

        setNote(res.data.note);
    };



    const updateCreateFormField = (e) => {
        const {name, value} = e.target;

        setCreateForm({
            ...createForm,
            [name]: value,
        });
    };




    const CreateNote = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:4000/notes", createForm);

        setNote([...note, res.data.note]);

        setCreateForm({
            title: "",
            body: "",
        });
    };

    const deleteNote = async (_id) => {
        const res = await axios.delete(`http://localhost:4000/notes/${_id}`);

        const newNotes = [...note].filter((note) => {
            return note._id !== _id;
        });
        setNote(newNotes);
    };

    const handleUpdateFieldChange = (e) => {
        const {value, name} = e.target;

        setUpdateForm({
            ...updateForm,
            [name]: value,
        });
    };

    const toggleUpdate = (note) => {
        setUpdateForm({title: note.title, body: note.body, _id: note._id});
    };

    const updateNote = async (e) => {
        e.preventDefault();

        const {title, body} = updateForm;

        const res = await axios.put(`http://localhost:4000/notes/${updateForm._id}`, {title, body});
        const newNotes = [...note];
        const noteIndex = note.findIndex((note) => {
            return note._id === updateForm._id;
        });
        newNotes[noteIndex] = res.data.note;
        setNote(newNotes);

        setUpdateForm({
            _id: "",
            title: "",
            body: "",
        });
    };

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
                                <button onClick={() => deleteNote(notes._id)}>Delete Note</button>

                                <button onClick={() => toggleUpdate(notes)}>Update Note</button>
                            </div>
                        );
                    })}
            </div>

            {updateForm._id && (
                <div>
                    <h2>Update Note</h2>
                    <form onSubmit={updateNote}>

                        <input onChange={handleUpdateFieldChange} value={updateForm.title} name="title" />
                        <textarea onChange={handleUpdateFieldChange} value={updateForm.body} name="body" />
                        <button type="submit">Update Note</button>
                    </form>
                </div>
            )}
            {!updateForm._id && (
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
