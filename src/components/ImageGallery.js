import { useState } from 'react'
import styles from './ImageGallery.module.css'

export default function ImageGallery({ photos }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % photos.length)
  }

  const currentImage = photos[currentIndex]

  return (
    <div>
       <img className={styles.img} src={currentImage.imageUrl} alt={currentImage.imageAlt} onClick={handleNextClick} style={{ width: '750px', height: '493px' }} />
    </div>
  )
}
