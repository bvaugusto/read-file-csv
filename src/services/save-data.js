const fs = require('fs')

class SaveData {

    static filepath = 'src/file/'

    saveDataToFile = data => new Promise((resolve, reject) => {
        fs.writeFile(SaveData.filepath+'output.txt', data, (err) => { 
            if (err) throw err; 
        })  
    })
}

module.exports = SaveData