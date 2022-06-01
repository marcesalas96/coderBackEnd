const fs = require('fs')
let arr = []
module.exports = class Contenedor {
    constructor(fileName) {
        this.fileName = fileName
        fs.promises.writeFile(`./${fileName}`, '')
    }
    async save(objeto) {
        try{
            let data = await fs.promises.readFile(`./${this.fileName}`, 'utf-8')
            if(!data) {
                objeto.id = 1
                arr.push(objeto)
                await fs.promises.writeFile(`./${this.fileName}`, JSON.stringify(arr,"\n"))
                console.log( objeto.id)
            } else {
                arr = JSON.parse(data);
                objeto.id = arr.length + 1
                arr.push(objeto)
                await fs.promises.writeFile(`./${this.fileName}`, JSON.stringify(arr))
                console.log( objeto.id)
            }
        }catch(e){
            console.log("Error: ", e)
        }
    }
    async getById(id){
        try{
            const indexList = []
            arr.forEach((objeto) =>{
                indexList.push(objeto.id)
            })
            console.log(indexList)
            const index = indexList.indexOf(id)
            if(index>=0){
                console.log(arr[index])
            }
            else{
                console.log(null)
            }
        }catch(e){
            console.log("Error: ", e)
        }
    }
    async getAll(){
        try{
            const objetList = await fs.promises.readFile(`./${this.fileName}`,'utf-8')
            console.log(JSON.parse(objetList))
        }catch(e){
            console.log("Error: ",e)
        }
    }
    async deleteById(id){
        try{
            const indexList = []
            arr.forEach((objeto) =>{
                indexList.push(objeto.id)
            })
            console.log(indexList)
            const index = indexList.indexOf(id)
            console.log(index)
            if(index>=0){
                arr.splice(index,1)
                console.log("Objeto eliminado con exito")
                await fs.promises.writeFile(`./${this.fileName}`, JSON.stringify(arr,"\n"))
            }
            else{
                console.log("Ese Id no corresponde a ningun objeto")
            }
        }catch(e){
            console.log("Error: ", e)
        }
    }
    async deleteAll(){
        try{
            arr.splice(0)
            await fs.promises.writeFile(`./${this.fileName}`, JSON.stringify(arr,"\n"))
            console.log("Todos los objetos fueron eliminados con exito.")
        }catch(e){
            console.log("Error: ",e)
        }
    }
}
