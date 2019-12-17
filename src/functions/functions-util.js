class FunctionsUtil {

    static gravitationalConstant = 9.8

    sortDataObject = (arrayCombine) => {
        
        if (arrayCombine === undefined) {
            return []
        }
        
        return arrayCombine.sort(function(a,b) {
            return a.SPEED < b.SPEED ? -1 : a.SPEED > b.SPEED ? 1 : 0;
        });
    }

    calculateSpeed = (strideLength, legLength) => {

        if (strideLength === undefined || legLength === undefined) {
            return ''
        }

        return ((strideLength /legLength) - 1) * Math.sqrt(legLength * Number.parseFloat(FunctionsUtil.gravitationalConstant))
    }

    addSpeedKeyInArray = (arrayCombine) => {

        if (arrayCombine === undefined) {
            return []
        }

        arrayCombine.forEach(val => {
            val.SPEED = this.calculateSpeed(val.STRIDE_LENGTH, val.LEG_LENGTH)
        })
    
        return arrayCombine
    }

    combineArray = (array1, array2) => {

        if (array1 === undefined || array2 === undefined) {
            return []
        }

        let combineArray = []
        array1.forEach(element1 => {
            array2.forEach(element2 => {
                if ((element1.NAME === element2.NAME) && (element2.STANCE === 'bipedal')) {
                    combineArray.push({...element1, ...element2})
                }
            })
        });

        return combineArray;
    }
}

module.exports = FunctionsUtil