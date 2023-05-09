import { Image } from 'antd';
import { useState } from 'react';
import styles from './PhotoCard.module.css';

export default function PhotoCard(props){
  const [visible, setVisible] = useState(false);

  return (
    <Image 
      preview={{ visible: false }}
      className={styles.image}
      src={props.imageUrl}
      alt=""
      onClick={() => setVisible(true)}
    />
  )
}




      
  


