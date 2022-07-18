import { useEffect, useState } from "react";

import WomanLink from '../../components/WomanLink/WomanLink';
import BodyPage from '../../components/bodyPage/bodyPage';

import { WomanData } from '../../data/data';

import './sidebar.scss';
const Man = () => {

  // const DATA = [
  //   {
  //     name: "bir",
  //     id: 1,
  //   },
  //   {
  //     name: "ikki",
  //     id: 2,
  //   },
  //   {
  //     name: "uch",
  //     id: 3,
  //   },
  //   {
  //     name: "to'rt",
  //     id: 4,
  //   },
  //   {
  //     name: "besh",
  //     id: 5,
  //   },
  //   {
  //     name: "olti",
  //     id: 6,
  //   },
  //   {
  //     name: "yetti",
  //     id: 7,
  //   },
  //   {
  //     name: "sakkiz",
  //     id: 8,
  //   },
  //   {
  //     name: "to'qqiz",
  //     id: 9,
  //   },
  //   {
  //     name: "o'n",
  //     id: 10,
  //   },
  //   {
  //     name: "o'n bir",
  //     id: 11,
  //   },
  //   {
  //     name: "o'n ikki",
  //     id: 12,
  //   },
  //   {
  //     name: "o'n uch",
  //     id: 13,
  //   },
  //   {
  //     name: "o'n to'rt",
  //     id: 14,
  //   },
  //   {
  //     name: "o'n besh",
  //     id: 15,
  //   },
  //   {
  //     name: "o'n olti",
  //     id: 16,
  //   },
  //   {
  //     name: "o'n yetti",
  //     id: 17,
  //   },
  //   {
  //     name: "o'n sakkiz",
  //     id: 18,
  //   },
  //   {
  //     name: "o'n to'qqiz",
  //     id: 19,
  //   },
  //   {
  //     name: "yigirma",
  //     id: 20,
  //   },
  //   {
  //     name: "yigirma bir",
  //     id: 21,
  //   },
  //   {
  //     name: "yigirma ikki",
  //     id: 22,
  //   },
  //   {
  //     name: "yigirma uch",
  //     id: 23,
  //   },
  //   {
  //     name: "o'n olti",
  //     id: 16,
  //   },
  //   {
  //     name: "o'n yetti",
  //     id: 17,
  //   },
  //   {
  //     name: "o'n sakkiz",
  //     id: 18,
  //   },
  //   {
  //     name: "o'n to'qqiz",
  //     id: 19,
  //   },
  //   {
  //     name: "yigirma",
  //     id: 20,
  //   },
  //   {
  //     name: "yigirma bir",
  //     id: 21,
  //   },
  //   {
  //     name: "yigirma ikki",
  //     id: 22,
  //   },
  //   {
  //     name: "yigirma uch",
  //     id: 23,
  //   },
  //   {
  //     name: "yigirma bir",
  //     id: 21,
  //   },
  //   {
  //     name: "yigirma ikki",
  //     id: 22,
  //   },
  //   {
  //     name: "yigirma uch",
  //     id: 23,
  //   },
  // ]

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
        {index >= 1 && <button className="slider-btn left-btn" onClick={SliderControllerLeftBtn}>left</button>}
        {index < 1 && <button className="slider-btn right-btn" onClick={SliderControllerRightBtn}>right</button>}
      </div>
      <BodyPage />
    </>
  )
}
export default Man;