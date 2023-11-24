import jwt from "jsonwebtoken";
import User from "../model/user.js";

const requireAuth = async (req, res, next) => {
    try {
        const token = req.cookies.Authorization;

        console.log("Token ==" + token);

        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        const user = await User.findById(decoded.sub);
        console.log(user);

        if (!user) return res.sendStatus(401);
        console.log("5");

        req.user = user;

        console.log("6");

        next();
    } catch (error) {
        console.error(error);
        return res.sendStatus(401);
    }
};

export default requireAuth;
