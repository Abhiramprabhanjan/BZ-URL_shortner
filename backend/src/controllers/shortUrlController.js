import { Router } from "express";


import { isLoggedIn } from "../middlewares/authMiddleware.js";
import { createShortUrl, getLongUrl } from "../routes/shortURLRouter.js";


const shortURLRouter = Router();


shortURLRouter.post("/", isLoggedIn, createShortUrl)


// redirect router "/api/s/shortCode"
shortURLRouter.get("/:shortcode", getLongUrl)




export default shortURLRouter;
