import { Image } from 'antd';
import { useState } from 'react';
import styles from './PhotoCard.module.css';

export default function PhotoCard(props){
  const [visible, setVisible] = useState(false);

  return (
    <Image 
      preview={{ visible: false }}
      className={styles.image}
      width={300}
      src={props.imageUrl}
      alt={props.imageAlt}
      onClick={() => setVisible(true)}
    />
  )
}




      
  


