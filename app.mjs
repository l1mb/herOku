import express from "express"
import {engine} from "express-handlebars"
import fs from "fs"
import path from "path"


const app = express();

app.engine('handlebars', engine());

const __dirname = path.dirname('./');

app.set('port', 3000);
app.set('view engine', '.handlebars');

const getPrikolHandler = (req, res)=> {
    try {
        const props = {
            data: JSON.parse(fs.readFileSync("./db.json").toString())
        }
        res.render('index', props); 
    } catch (error) {
        
    }
}
app.use("/styles", express.static(`${__dirname}/views/styles`));
app.get('/', getPrikolHandler);
app.get('/add', (req, res) => {
    res.render('additem', {
        data: JSON.parse(fs.readFileSync("./db.json").toString())
    })
})

app.listen(process.env.PORT || app.get('port'), "localhost", ()=> {
    console.log(
        "server started on localhost:" + `${process.env.PORT || app.get('port')}`
    )
});
