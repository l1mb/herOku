import fs from "fs"

export const getDataFromJson = () => JSON.parse(fs.readFileSync("./db.json").toString())
export const updateDataFromJson = (data) => fs.writeFileSync("./db.json",JSON.stringify(data)); 
export function broofa() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}