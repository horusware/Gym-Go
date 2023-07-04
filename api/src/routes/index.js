const { Router } = require("express");
const activitiesRouter = require("./activitiesRouter");
const goalsRouter = require("./goalsRouter");
const userRouter = require("./userRouter");
const classesRouter = require("./classesRouter");
const coachesRouter = require("./coachesRouter");
const mercadopagoRouter = require("./mercadopagoRouter");


const mainRouter = Router();

mainRouter.use("/activities", activitiesRouter);
mainRouter.use("/goals", goalsRouter);
mainRouter.use("/", userRouter);
mainRouter.use("/classes", classesRouter);
mainRouter.use("/coaches", coachesRouter);
mainRouter.use("/mercadopago", mercadopagoRouter);


module.exports = mainRouter;