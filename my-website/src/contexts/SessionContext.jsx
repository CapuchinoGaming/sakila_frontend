import { createContext } from "react"

export const SessionContext = createContext({
    storeID: null,
    employeeID: null,
    setStoreID: () => {},
    setEmployeeID: () => {}
})