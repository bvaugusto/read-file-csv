const fast = require('fast-csv')
const fs = require('fs')

class CSV {

    static filepath = 'src/file/'

    fetchDataCSV = fileName => new Promise((resolve, reject) => {
        
        if (fileName === undefined) {
            reject([])
        }
    
        const arrayRows = []
        const filepath = CSV.filepath+fileName+'.csv'
    
        fs.createReadStream(filepath).pipe(fast.parse({ headers: true }))
        .on('data', row => {
            arrayRows.push(row)
        })
        .on('end', () => {
            return resolve(arrayRows)
        })
    })
}

module.exports = CSV