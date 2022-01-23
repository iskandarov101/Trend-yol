import WomanLink from '../../components/WomanLink/WomanLink';
import BodyPage from '../../components/bodyPage/bodyPage';

//============= DATA ===========
import { WomanData } from '../../data/data';

import './sidebar.scss';

const Woman = ()=> {
 
  return(

    <>
      <div className='woman__links'>
        {WomanData.map((item)=> (
          <WomanLink 
              img={item.image}
              title={item.title}
              key={item.id}
          />
        ))}
      </div>
      <div>
        <BodyPage  />

      </div>
    </>

  )
}
export default Woman;