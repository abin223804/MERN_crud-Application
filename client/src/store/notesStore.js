import {create} from "zustand";
import axios from "axios";

const notesStore = create((set) => ({
    note: null,
    createForm: {
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
            notes: [...note, res.data.note],
            createForm: {
                title: "",
                body: "",
            },
        });
    },

    deleteNote :async (_id) => {
        const res = await axios.delete(`http://localhost:4000/notes/${_id}`);
        const {note}=notesStore.getState();

        const newNotes = note.filter((note) => {
            return note._id !== _id;
        });

      set({note:newNotes})

       
    },



    
}));

export default notesStore;
