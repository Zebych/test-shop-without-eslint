import React, {memo, useEffect} from 'react';
import {SetRoute} from './01_userInterface/01.2_navigate/SetRoute';
import {Header} from './01_userInterface/components/C1_header/Header';
import {setCart} from "./02_bisnessLogik/cart-reducer";
import {useDispatch} from "react-redux";
import {ProductObjType} from './03.1_server simulator/server';
import {goodsAllTC} from "./02_bisnessLogik/goods-reducer";
import {AppBar, Toolbar} from "@material-ui/core";
import {getLocalData} from "./06_utils/localStorage";

const commandForGettingData = 1
const App = memo(() => {
    const dispatch = useDispatch()

    //обработка и добавление запланированых покупок из localStorage
    //данные для отрисовки стартовой страницы
    useEffect(() => {
        getLocalData().map((a: ProductObjType) => dispatch(setCart({addProduct: a})))
        dispatch(goodsAllTC(commandForGettingData))
    }, [])

    return (
        <div>
            <AppBar position={"static"}>
                <Toolbar style={{display:'flex',justifyContent: 'flex-end'}}>
                    <Header/>
                </Toolbar>
            </AppBar>
            <SetRoute/>
        </div>
    )
});
export default App;
