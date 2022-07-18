import { useEffect, useState } from "react";


import WomanLink from '../../components/WomanLink/WomanLink';
import BodyPage from '../../components/bodyPage/bodyPage';

import NextBtn from '../../assets/images/product-detail-slider-next-arrow.png';
import PrevBtn from '../../assets/images/product-detail-slider-prev-arrow.png';

//============= DATA ===========
import { WomanData } from '../../data/data';

import './sidebar.scss';

const Woman = () => {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    document.documentElement.style.setProperty("--index", index);
  }, [index]);

  const SliderControllerRightBtn = () => {
    if (index < 2) {
      setIndex(prev => prev + 1)
    }
  }

  const SliderControllerLeftBtn = () => {
    if (index >= 1) {
      setIndex(prev => prev - 1)
    }
  }

  return (

    <>
      <div className="slider-wrapper">
        <ul className="slider-list">
          {
            WomanData.map(item => (
              <li className="slider-item" id={item.id} >
                <WomanLink img={item.image}
                  title={item.title}
                  key={item.id} />
              </li>
              //  img={item.image}
              //  title={item.title}
              //  key={item.id}
            ))
          };
        </ul>
        {index >= 1 && <button className="slider-btn left-btn" onClick={SliderControllerLeftBtn}><img src={PrevBtn} alt="prev-btn" /></button>}
        {index < 1 && <button className="slider-btn right-btn" onClick={SliderControllerRightBtn}><img src={NextBtn} alt="next-btn" /></button>}
      </div>
      <BodyPage />
    </>

  )
}
export default Woman;