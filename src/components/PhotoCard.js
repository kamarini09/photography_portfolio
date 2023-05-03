import { Image } from 'antd';
import { useState } from 'react';

export default function PhotoCard(props){
  const [visible, setVisible] = useState(false);

  return (
    
      <Image 
        preview={{ visible: false}}
        width={300}
        src={props.imageUrl}
        alt=""
        onClick={() => setVisible(true)}
      />
 
  )
}





      
  


