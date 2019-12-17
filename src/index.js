const CSV = require('./services/csv-service')
const SaveData = require('./services/save-data')
const FunctionsUtil = require('./functions/functions-util')
const functionsUtil = new FunctionsUtil()

const fetchData = async (fileName) => {
    if (fileName === undefined) {
        return []
    }

    const csv = new CSV()
    return await csv.fetchDataCSV(fileName)
}

const saveDataFile = arrayCombine => {
    if (arrayCombine === undefined) {
        return false
    }

    let dataFile = []
    arrayCombine.forEach(val => {
        dataFile.push(val.NAME)
    })
    const saveData = new SaveData()
    saveData.saveDataToFile(dataFile)
}

try {

    let arrayDataset1 = []
    let arrayDataset2 = []
    let arrayCombine = []
    
    fetchData('dataset1').then((value) => {
        arrayDataset1.push(value)
    })

    fetchData('dataset2').then((value) => {
        arrayDataset2.push(value)
    })

    setTimeout(() => {
        arrayCombine = functionsUtil.combineArray(arrayDataset1[0], arrayDataset2[0])
        arrayCombine = functionsUtil.addSpeedKeyInArray(arrayCombine)
        arrayCombine = functionsUtil.sortDataObject(arrayCombine)
        saveDataFile(arrayCombine)
    }, 100);

    console.log("Dados gerados com sucesso!")

} catch (error) {
    console.log(error)
}

