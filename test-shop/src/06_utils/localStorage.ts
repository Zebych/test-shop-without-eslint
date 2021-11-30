import {ProductObjType} from "../03.1_server simulator/server";

//запрос данных состояния localStorage
export const getLocalData=()=>{
    try{
        const serializedState = localStorage.getItem('addedProduct')
        if (serializedState !== null) {
          return JSON.parse(serializedState).filter((l: any) => l !== null)
        }
        return []
    }catch {
        // ignore write errors
    }
}
// сохранение состояния в localStorage
export const saveAddedCartToLocalStorage = (state:Array<ProductObjType>) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('addedProduct', serializedState);
    } catch {
        // ignore write errors
    }
}


