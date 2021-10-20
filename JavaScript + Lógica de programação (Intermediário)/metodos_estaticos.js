class ResouceProcessorStation{
    constructor(name,monthlyProcessing){
        this.name = name
        this.monthlyProcessing = monthlyProcessing
    }

    static calculateProcessInHours(monthlyProcessing,hours){
        return monthlyProcessing / 720 * hours
    }
}

let totalProcessing = ResouceProcessorStation.calculateProcessInHours(500,6)

console.log(totalProcessing)

let processor = new ResouceProcessorStation("Gaia",200)

let totalProcessed = ResouceProcessorStation.calculateProcessInHours(processor.monthlyProcessing,10)

console.log(totalProcessed)