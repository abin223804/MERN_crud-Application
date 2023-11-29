import jwt from "jsonwebtoken";
import User from "../model/user.js";

const requireAuth = async (req, res, next) => {
    try {
        const token = req.cookies.Authorization;

        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        const user = await User.findById(decoded.sub);

        if (!user) return res.sendStatus(401);

        req.user = user;

        next();
    } catch (error) {
        console.error(error);
        return res.sendStatus(401);
    }
};

export default requireAuth;
