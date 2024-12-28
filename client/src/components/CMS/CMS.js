import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import RemoveProduct from './RemoveProduct';
import SideBar  from './SideBar';
import CMSHeader from './CMSHeader';
import CMSTables from './CMSTables';
import '../../css/CMS.css';
import { useState } from 'react';

function CMS() {


  const [com, setCom] = useState(null);

  function getLi(id) {
    if (id === 'add'){
      setCom((<AddProduct />));
    }
    else if (id === 'update'){
      setCom((<UpdateProduct />));
    }
    else if (id === 'delete'){
      setCom((<RemoveProduct />));
    }
    else if (id === 'price'){
      setCom((<CMSTables />));
    }
  }

  return (
    <div className='main' >
        <article>
          <CMSHeader />
          {com}
        </article>
        <SideBar getLi={getLi}/> 

    </div>
  );
}

export default CMS;
