import React from 'react';

import Coverflow from "react-coverflow";


const SliderCoverflow = () => {


    var fn = function () {
                           }

    return (
   <div  style={{ marginBottom: '50px' }} >
     <Coverflow
    width={400}
    height={400}
    displayQuantityOfSide={2}
    navigation={false}
    enableHeading={false}
  >
    <div
      onClick={() => fn()}
      onKeyDown={() => fn()}
      role="menuitem"
      tabIndex="0"
    >
      <img
        src="/Esprit.jpg"
        alt='Esprit'
        style={{ display: 'block', width: '100%' }}
      />
    </div>

<img src="/ANETI.png"
         alt='ANETI' />

 <img src="/UNICEF.png"
         alt='UNICEF' />

<img src="/CiteDesSciences.png"
         alt='Cité des sciences' />

<img src="/CONECT.png"
         alt='CONECT' />

<img src="/IECD.png"
         alt='IECD' />

<img src="/MEDNC.png"
         alt='MEDNC' />

<img src="/MuniciPaliteTunis.jpg "
         alt='Munici palité Tunis' />

<img src="/PCPA.png"
         alt='PCPA' />

<img src="/Tunisia88.png"
         alt='Tunisia88' />

<img src="/AmbassadeSuisse.png "
         alt='Ambassade Suisse' />




  </Coverflow>
  </div>
    )
}

export default SliderCoverflow
