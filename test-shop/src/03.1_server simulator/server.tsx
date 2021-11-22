import photo1 from '../04_assets/img/6-1000x1000.jpg';
import photo3 from '../04_assets/img/6064641689.jpg';
import photo2 from '../04_assets/img/680395566_w640_h640_kruzhka-s-prikolom.jpg';
import photo4 from '../04_assets/img/kruzhka_sgushchenka_img.webp';
import photo5 from '../04_assets/img/people_2_mug_chameleon_front_whitered_500.jpg';
import photo7 from '../04_assets/img/pic1white.jpg';
import photo6 from '../04_assets/img/product_57508_0_0_0.jpg';

const arrData: Array<ArrDataType> = [
    {name: 'mug1', picture: photo1, id: 1, price: 50},
    {name: 'mug3', picture: photo3, id: 3, price: 90},
    {name: 'mug2', picture: photo2, id: 2, price: 70},
    {name: 'mug4', picture: photo4, id: 4, price: 100},
    {name: 'mug5', picture: photo5, id: 5, price: 110},
    {name: 'mug6', picture: photo6, id: 6, price: 120},
    {name: 'mug7', picture: photo7, id: 7, price: 130}
]

export const serverAPI = {
    getGoodsAll(response: number) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                if (response === 1) {
                    res({
                        result: 'success',
                        data: arrData,
                    })
                }
                rej({result: 'error',data:[]})
            }, 1000)
        })
    }
}

//Types
export type ArrDataType = {
    name: string
    picture: string
    id: number
    price: number
}
export type ResDatatype={
    result:string
    data:Array<ArrDataType>
}