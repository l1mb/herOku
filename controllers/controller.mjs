import { broofa, getDataFromJson, updateDataFromJson } from "../helpers/fsHelper.mjs";

export const mainController = {
    getIndex:(req, res) => {
        const props = {
            data: getDataFromJson()
        }
        res.render('index', props);
    },
    getAddPage:(req, res)=>{
        res.render('addItem', {
            data: getDataFromJson()
        })
    },
    getUpdatePage:(req, res)=>{
            const q = getDataFromJson().find(el=> el.id ===req.params.id);
            res.render(`updateItem`, {
                data:getDataFromJson(),
                editItem:q
            })
    },
    addItem:(req, res)=>{
        const data = {...req.body, id:broofa()};
        const prevData = getDataFromJson();
    
        prevData.push(data);
        updateDataFromJson(prevData);
        res.status(201)
        res.end(JSON.stringify(data));
    },
    updateItem:(req, res)=>{
        const id = req.body.id;
        let data = getDataFromJson();
        console.log(id);
        
        const updatedIndex = data.findIndex(el => {
            console.log(el.id);
            return el.id ===id;
        });

        console.log('updatedIndex', updatedIndex)
        console.log(data)
        console.log('req.body', req.body)
        console.log(data[0])
        data[updatedIndex] = req.body;
        updateDataFromJson(data);
        res.end("nice");
    }
    ,
    deleteItem:(req, res)=>{
        const data = req.body;
        let prevData = getDataFromJson();
        prevData = prevData.filter(el => el.id !== data.id);
    console.log(prevData, data.id)
        updateDataFromJson(prevData);
        res.status(204);
        res.end("deleted"); 
    }
}