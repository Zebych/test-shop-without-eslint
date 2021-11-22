import React, { memo, ReactElement } from 'react';

import photo1 from '../../../04_assets/img/6-1000x1000.jpg';
import photo3 from '../../../04_assets/img/6064641689.jpg';
import photo2 from '../../../04_assets/img/680395566_w640_h640_kruzhka-s-prikolom.jpg';
import photo4 from '../../../04_assets/img/kruzhka_sgushchenka_img.webp';
import photo5 from '../../../04_assets/img/people_2_mug_chameleon_front_whitered_500.jpg';
import photo7 from '../../../04_assets/img/pic1white.jpg';
import photo6 from '../../../04_assets/img/product_57508_0_0_0.jpg';
import styleContainer from '../../../05_common/styles/Container.module.css';

import styles from './Goods.module.css';
import { Product } from './product';

export const Goods = memo(
  (): ReactElement => (
    <div className={styles.goodsBlock}>
      <div className={`${styleContainer.container} ${styles.goodsContainer}`}>
        <Product photo={photo1} />
        <Product photo={photo2} />
        <Product photo={photo3} />
        <Product photo={photo4} />
        <Product photo={photo5} />
        <Product photo={photo6} />
        <Product photo={photo7} />
      </div>
    </div>
  ),
);
