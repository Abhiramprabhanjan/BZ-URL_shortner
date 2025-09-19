import { Router } from 'express';
import { isLoggedIn } from '../middlewares/authMiddleware.js';
import { getUserDetails } from '../controllers/userController.js';



const userRouter = Router();


// Route to get the authenticated user's own details
userRouter.get('/me', isLoggedIn, getUserDetails);




export default userRouter;
