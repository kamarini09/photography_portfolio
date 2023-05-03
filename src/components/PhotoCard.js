import { Image } from 'antd';
import { useState } from 'react';

export default function PhotoCard(props){
  const [visible, setVisible] = useState(false);

  return (
    <Image.PreviewGroup>
      <Image 
        preview={{ visible }}
        width={300}
        src={props.imageUrl}
        alt=""
        onClick={() => setVisible(true)}
      />
    </Image.PreviewGroup>
  )
}





      
  


