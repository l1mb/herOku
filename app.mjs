import express from "express"
import {engine} from "express-handlebars"
import path from "path"
import bodyParser from "body-parser"
import hbs from "handlebars"
import router from "./routes/routes.mjs"

const __dirname = path.dirname('./');
const app = express();

app.set('port', 3000);  
app.set('view engine', '.handlebars');

app.engine('handlebars', engine());

hbs.registerHelper('cancelButtonName', () => {
    return "Cancel button";
});

app.use(bodyParser.json());
app.use("/styles", express.static(`${__dirname}/views/styles`));
app.use(router);

app.listen(process.env.PORT || app.get('port'));