import Note from "../model/note.js";

const viewNotes = async (req, res) => {
    try {
        const note = await Note.find({user: req.user._id});

        res.json({note});
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};

const viewNote = async (req, res) => {
    try {
        const noteId = req.params.Id;

        const note = await Note.findOne({_id: noteId, user: req.user._id});

        res.json({note});
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};

const addNote = async (req, res) => {
    try {
        const {title, body} = req.body;

        const note = await Note.create({
            title,
            body,
            user: req.user._id,
        });
        res.json({note});
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};

const updateNote = async (req, res) => {
    try {
        const noteId = req.params.id;

        const {title, body} = req.body;

        await Note.findOneAndUpdate(
            {_id: noteId, user: req.user._id},
            {
                title,
                body,
            }
        );

        const note = await Note.findById(noteId);

        res.json({note});
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};

const deleteNote = async (req, res) => {
    try {
        const noteId = req.params.Id;

        await Note.findOneAndDelete({id: noteId, user: req.user._id});

        res.json({success: "data deleted successfully"});
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};

export default {viewNotes, viewNote, addNote, updateNote, deleteNote};
