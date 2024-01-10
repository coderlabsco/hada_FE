export interface IReport {
    key?: any
    _id?: any
    name?: string
    apartment?: string
    plateByPerson?: string
    plateByAI?: string
    typeVehicle?: typeVehicle
    brand?: string
    nameToVisit?: string
    imageID?: any
    whoRegistered?: any
    timeAt?: string
}

export enum typeVehicle {
    MOTORCYCLE = "Motocicleta",
    CAR = "Carro"
}

export interface IRegisterReportType {
    photo?: string
    name?: string
    typeVehicle?: string
    brand?: string
    apartment?: string
    plateByPerson?: string
    nameToVisit?: string
  }