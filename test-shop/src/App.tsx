import React, {memo, useEffect} from 'react';
import { SetRoute } from './01_userInterface/01.2_navigate/SetRoute';
import { Header } from './01_userInterface/components/C1_header/Header';

import './App.css';
import {setCart} from "./02_bisnessLogik/cart-reducer";
import {useDispatch} from "react-redux";
import { ProductObjType } from './03.1_server simulator/server';
import {goodsAllTC} from "./02_bisnessLogik/goods-reducer";


const App = memo(() => {
    const dispatch = useDispatch()
    //данные для отрисовки стартовой страницы
    useEffect(() => {
        debugger
        dispatch(goodsAllTC(1))
    }, [])
    useEffect(()=>{
        const serializedState = localStorage.getItem('addedProduct')
        if(serializedState){
            let arrAddProduct= JSON.parse(serializedState).filter((l: any) => l !== null)
            arrAddProduct.map((a:ProductObjType)=>dispatch(setCart({addProduct:a})))
        }
    },[])

    return(
        <div>
            <Header />
            <SetRoute />
        </div>
    )
});
export default App;
