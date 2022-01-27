import { useEffect, useState } from "react";


import WomanLink from '../../components/WomanLink/WomanLink';
import BodyPage from '../../components/bodyPage/bodyPage';

//============= DATA ===========
import { WomanData } from '../../data/data';



import './sidebar.scss';

const Woman = ()=> {
 
  const [index, setIndex] = useState(0);

  useEffect(() => {
    document.documentElement.style.setProperty("--index", index);
  }, [index]);

  const SliderControllerRightBtn = () => {
    if(index < 2) {
      setIndex(prev => prev + 1)
    }
  }

  const SliderControllerLeftBtn = () => {
    if(index >= 1) {
      setIndex(prev => prev - 1)
    }
  }

  return(

    <>
    <div>
      <div className="slider-wrapper">
        <ul className="slider">
          {
          WomanData.map(item => (
            <li className="slider-item"  id={item.id} >
              <WomanLink  img={item.image}
              title={item.title}
              key={item.id}>
              </WomanLink>
            </li> 
            //  img={item.image}
            //  title={item.title}
            //  key={item.id}
          ))
          };
        </ul>
        {index >= 1 && <button className="left-btn" onClick={SliderControllerLeftBtn}>left</button>}
        {index < 1 && <button className="right-btn" onClick={SliderControllerRightBtn}>right</button>}
      </div>
      <BodyPage  />
    </div>
    
    </>

  )
}
export default Woman;