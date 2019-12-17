const CSV = require('../services/csv-service')
const csv = new CSV()

const FunctionsUtil = require('../functions/functions-util')
const functionsUtil = new FunctionsUtil()

const should = require('should')

const array = [
    { NAME: 'Hadrosaurus', LEG_LENGTH: '1.2', DIET: 'herbivore' },
  { NAME: 'Struthiomimus', LEG_LENGTH: '0.92', DIET: 'omnivore' },
  { NAME: 'Velociraptor', LEG_LENGTH: '1.0', DIET: 'carnivore' },
  { NAME: 'Triceratops', LEG_LENGTH: '0.87', DIET: 'herbivore' },
  { NAME: 'Euoplocephalus', LEG_LENGTH: '1.6', DIET: 'herbivore' },
  { NAME: 'Stegosaurus', LEG_LENGTH: '1.40', DIET: 'herbivore' },
  { NAME: 'Tyrannosaurus Rex', LEG_LENGTH: '2.5', DIET: 'carnivore' }
]

const array2 = [
    {NAME: 'Euoplocephalus', STRIDE_LENGTH: '1.87', STANCE: 'quadrupedal'},
    {NAME: 'Stegosaurus', STRIDE_LENGTH: '1.90', STANCE: 'quadrupedal' },
    {NAME: 'Tyrannosaurus Rex', STRIDE_LENGTH: '5.76', STANCE: 'bipedal'},
    {NAME: 'Hadrosaurus', STRIDE_LENGTH: '1.4', STANCE: 'bipedal' },
    {NAME: 'Deinonychus', STRIDE_LENGTH: '1.21', STANCE: 'bipedal' },
    {NAME: 'Struthiomimus', STRIDE_LENGTH: '1.34', STANCE: 'bipedal' },
    {NAME: 'Velociraptor', STRIDE_LENGTH: '2.72', STANCE: 'bipedal' }
]

const arrayCombine = [
    {NAME: 'Hadrosaurus',LEG_LENGTH: '1.2',DIET: 'herbivore',STRIDE_LENGTH: '1.4',STANCE: 'bipedal'},
    {NAME: 'Struthiomimus',LEG_LENGTH: '0.92',DIET: 'omnivore',STRIDE_LENGTH: '1.34',STANCE: 'bipedal'},
    {NAME: 'Velociraptor',LEG_LENGTH: '1.0',DIET: 'carnivore',STRIDE_LENGTH: '2.72',STANCE: 'bipedal'},
    {NAME: 'Tyrannosaurus Rex',LEG_LENGTH: '2.5',DIET: 'carnivore',STRIDE_LENGTH: '5.76',STANCE: 'bipedal'}
]

describe('find dataset 1', () => {
    it('valida dataset 1', () => {
        csv.fetchDataCSV('dataset1').should.be.equal(csv.fetchDataCSV('dataset1'))
    })
})

describe('find dataset 2', () => {
    it('valida dataset 2', () => {
        csv.fetchDataCSV('dataset2').should.be.equal(csv.fetchDataCSV('dataset2'))
    })
})

describe('Combine 2 Arrays', () => {
    it('Union 2 array', () => {
        functionsUtil.combineArray(array, array2).should.be.equal(functionsUtil.combineArray(array, array2))
    })
})

describe('Add key add key and value in array', () => {
    it('Add Speed Key In Array', () => {
        functionsUtil.addSpeedKeyInArray(arrayCombine).should.be.equal(functionsUtil.addSpeedKeyInArray(arrayCombine))
    })
})

describe('Calculate Speec', () => {
    it('Calculete Speed', (sarrayCombine) => {
        functionsUtil.calculateSpeed(strideLength, legLength).should.be.equal(functionsUtil.calculateSpeed(strideLength, legLength))
    })
})

describe('Funciton sort passa', () => {
    it('Calculete Speed', (sarrayCombine) => {
        functionsUtil.sortDataObject(arrayCombine).should.be.equal(functionsUtil.sortDataObject(arrayCombine))
    })
})

