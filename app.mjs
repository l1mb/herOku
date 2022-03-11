import express from "express"
import {engine} from "express-handlebars"
import fs from "fs"
import path from "path"
import bodyParser from "body-parser"
import hbs from "handlebars"

hbs.registerHelper('cancelButtonName', () => {
    return "Cancel button";
});


const app = express();

app.engine('handlebars', engine());

const __dirname = path.dirname('./');

app.use(bodyParser.json());

app.set('port', 3000);
app.set('view engine', '.handlebars');

const getPrikolHandler = (req, res)=> {
    try {
        const props = {
            data: getDataFromJson()
        }
        res.render('index', props); 
    } catch (error) {
        
    }
}
app.use("/styles", express.static(`${__dirname}/views/styles`));
app.get('/', getPrikolHandler);
app.get('/add', (req, res) => {
    res.render('additem', {
        data: getDataFromJson()
    })
})
app.post('/add', (req, res)=> {
    const data = req.body;

    const prevData = getDataFromJson();

    prevData.push(data);
    updateDataFromJson(prevData);
    res.status(201)
    res.end("Send us to destruy")
})


app.listen(process.env.PORT || app.get('port'));


const getDataFromJson = () => JSON.parse(fs.readFileSync("./db.json").toString())
const updateDataFromJson = (data) => fs.writeFileSync("./db.json",JSON.stringify(data)); 