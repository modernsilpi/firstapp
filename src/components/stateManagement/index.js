import React from "react";
import ServiceList from "./servicesList"; 

class RootStore {
    constructor() {
        this.services = new ServiceList(this);
    }
}

const StoreContext = React.createContext(new RootStore());

export const useStores = () => React.useContext(StoreContext);