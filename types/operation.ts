import { gql } from "@apollo/client";

export const LOGIN = gql`
mutation Login($loginUserInput: LoginUserInput!) {
  login(loginUserInput: $loginUserInput) {
    access_token
    refresh_token
    email
    name
  }
}
`

export const GET_ALL_REPORTS = gql`
query GetAllReports {
  GetAllReports {
    _id
    apartment
    brand
    createdAt
    name
    nameToVisit
    plateByAI
    plateByPerson
    timeAt
    typeVehicle
    whoRegistered
  }
}`

export const CALL_POLICE = gql`
query Query {
  CallPolice
} 
`

export const REGISTER_VISITOR = gql`
mutation AddReport($image: Upload!, $inputReport: InputSecurityGuardReport!) {
  AddReport(image: $image, inputReport: $inputReport) {
    apartment
    brand
    createdAt
    name
    nameToVisit
    plateByAI
    plateByPerson
    timeAt
    typeVehicle
    whoRegistered
  }
}
`