const router = require("express").Router();
router.get("/", (req, res, next) => {
  res.json("All good in here");
});
const authRouter = require("./auth.routes.js")
router.use("/auth", authRouter)//rutas para registro, login y verificacion

const perfilRouter = require("./perfil.routes.js")
router.use("/perfil", perfilRouter)//rutas para perfiles (c-R-U-d)

const usersRouter = require("./users.routes.js")
router.use("/usuarios", usersRouter)//rutas para perfiles (c-R-U-d)

const alimentoRouter = require("./alimentos.routes.js")
router.use("/alimentos", alimentoRouter)//ruta para la colecion de alimentos

const planesRouter = require("./planes.routes.js")
router.use("/plan-nutricional", planesRouter)//rutas para los planes nutricionales

const messagesRouter = require("./messages.routes.js")
router.use("/mensajes", messagesRouter)//rutas para los mensajes

const dietasRouter = require("./diets.routes.js")
router.use("/dietas", dietasRouter)//rutas para las dietas

const citasRouter = require("./citas.routes.js")
router.use("/citas", citasRouter)//rutas para las citas/agenda

const uploadRoutes = require("./upload.routes");
router.use("/upload", uploadRoutes);//cloudinary

const passwordRoutes = require("./password.routes");
router.use("/password", passwordRoutes);//nodemailer||reset-forgot password

module.exports = router;