import {create} from "zustand";
import axios from "axios";

const notesStore = create((set) => ({
    note: null,
    createForm: {
        title: "",
        body: "",
    },
    updateForm: {
        id: null,
        title: "",
        body: "",
    },

    fetchNotes: async () => {
        const res = await axios.get("http://localhost:4000/notes");

        set({note: res.data.note});
    },

    updateCreateFormField: (e) => {
        const {name, value} = e.target;

        set((state) => {
            return {
                createForm: {
                    ...state.createForm,
                    [name]: value,
                },
            };
        });
    },

    CreateNote: async (e) => {
        e.preventDefault();

        const {createForm, note} = notesStore.getState();

        const res = await axios.post("http://localhost:4000/notes", createForm);

        set({
            note: [...note, res.data.note],
            createForm: {
                title: "",
                body: "",
            },
        });
    },

    deleteNote: async (_id) => {
        const res = await axios.delete(`http://localhost:4000/notes/${_id}`);
        const {note} = notesStore.getState();

        const newNotes = note.filter((note) => {
            return note._id !== _id;
        });

        set({note: newNotes});
    },

    handleUpdateFieldChange: (e) => {
        const {value, name} = e.target;

        set((state) => {
            return {
                updateForm: {
                    ...state.updateForm,
                    [name]: value,
                },
            };
        });
    },

    toggleUpdate: ({_id, title, body}) => {
        set({
            updateForm: {
                title,
                _id,
                body,
            },
        });
    },

    updateNote: async (e) => {
        e.preventDefault();

        const {
            updateForm: {title, body, _id},
            note,
        } = notesStore.getState();

        const res = await axios.put(`http://localhost:4000/notes/${_id}`, {title, body});
        const newNotes = [...note];
        const noteIndex = note.findIndex((note) => {
            return note._id === _id;
        });
        newNotes[noteIndex] = res.data.note;

        set({
            note: newNotes,
            updateForm: {
                _id: "",
                title: "",
                body: "",
            },
        });
    }
}));

export default notesStore;
