import { faker } from '@faker-js/faker'

export type Employee = {
  EmpID: string
    EmpName: string
    employeeId:string
    Tickets:any
}
export type Ticket = {
  TicketID: string
  status: string
  Reportee:string
  ReporteeID:string
  createdOn:any
}
