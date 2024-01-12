import { gql } from "@apollo/client";

export const LOGIN = gql`
mutation Login($loginUserInput: LoginUserInput!) {
  login(loginUserInput: $loginUserInput) {
    access_token
    refresh_token
  }
}`

export const GET_ALL_REPORTS = gql`
query GetAllReports {
  GetAllReports {
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