import {ProductObjType} from "../03.1_server simulator/server";

// сохранение состояния в localStorage
export const saveState = (state:Array<ProductObjType>) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('addedProduct', serializedState);
    } catch {
        // ignore write errors
    }
}


