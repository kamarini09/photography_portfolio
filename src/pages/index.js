import Image from 'next/image'
import styles from '@/styles/Home.module.css'



export default function HomePage() {
  return (
    <div className={styles.grid}>
      <img className={styles.img} src='./42.png' alt='sunflowers'></img>
      <div>
         <h1 className={styles.h1}>Hello there!</h1>
         <p className={styles.p}>Welcome to my photography portfolio!My name is Kamarini and I am a photographer from Greece. 
         After studying photography in Athens, I had the amazing opportunity to intern for six months with a fashion photographer in the city. During this time, I learned a lot about the industry and honed my skills as a photographer.
         Since then, I have participated in five group photo exhibitions, showcasing my work alongside other talented artists. While working at the theatre, I also had the chance to take pictures of rehearsals, capturing the emotions and energy of the performers.
         One of my favorite things about photography is using natural light to create beautiful and unique images. Currently, I am living in Copenhagen and am obsessed with finding the color and light in this beautiful city. Through my lens, I strive to capture the beauty and essence of the world around me.
         Please take a look at my portfolio to see some of my favorite works. I hope you enjoy them as much as I enjoyed creating them. Thank you for stopping by!</p>
      </div>
    </div>
    
  )
}


