
import jwt from 'jsonwebtoken'

export default function requiresAuth(req,res,next) {
 console.log('in middleware');
 next();
}
