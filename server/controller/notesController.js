import Note from "../model/note.js";

const viewNotes = async (req, res) => {
    const note = await Note.find();

    res.json({note});
};

const viewNote = async (req, res) => {
    const noteId = req.params.Id;

    const note = await Note.findById(noteId);

    res.json({note});
};

const addNote = async (req, res) => {
    const {title, body} = req.body;

    const note = await Note.create({
        title,
        body,
    });
    res.json({note});
};

const updateNote = async (req, res) => {
    const noteId = req.params.id;

    const {title, body} = req.body;

    await Note.findByIdAndUpdate(noteId, {
        title,
        body,
    });

    const note = await Note.findById(noteId);

    res.json({note});
};

const deleteNote = async (req, res) => {
    const noteId = req.params.Id;

    await Note.findOneAndDelete({id: noteId});

    res.json({success: "data deleted successfully"});
};

export default {viewNotes, viewNote, addNote, updateNote, deleteNote};
