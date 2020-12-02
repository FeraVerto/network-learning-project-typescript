import React from 'react'
import {StoreType} from "../redux/redux-store";

export const StoreContext = React.createContext({} as StoreType)

export type ProviderType = {
    store: any
    children: React.ReactNode
}


const Provider: React.FC<ProviderType> = (props: ProviderType) => {
    console.log(props.store)
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default Provider