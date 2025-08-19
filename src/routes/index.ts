import {Router} from "express";
import demonRoutes from "./demonRoutes";

const router = Router();

router.use("/demon", demonRoutes);

export default router;
