import styles from "./Athens.module.css"
import Photo from "@/components/Photo";
import Image from "next/image";

export default function AthensPage({photos}) {
  return (
    <>
       <div className={styles.athensgrid}>
     
        {photos.map(photo => <Image
                key={photo.id} 
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes='(max-width: 750px) 100vw, 750px'

        
    />)}
      
      </div>
    </>
  );
}
    
    export async function getStaticProps() {
      const photos = [
          {
            id: 15,
            src: '/15.jpeg',
            alt: 'Photo 9',
            height:'4032',
            width:'3024'

          },
          {
            id: 16,
            src: '/16.jpeg',
            alt: 'Photo 1',
            height:'4032',
            width:'3024'
          },
          {
            id: 17,
            src: '/17.jpeg',
            alt: 'Photo 17',
            height:'4032',
            width:'3024'
          },
          {
            id: 18,
            src: '/18.jpeg',
            alt: 'Photo 3',
            height:'4032',
            width:'3024'
          },
          {
            id: 19,
            src: '/19.jpeg',
            alt: 'Photo 4',
            height:'4032',
            width:'3024'
          },
          {
            id: 20,
            src: '/20.jpeg',
            alt: 'Photo 5',
            height:'4032',
            width:'3024'
          },
          {
            id: 21,
            src: '/21.JPG',
            alt: 'Photo 6',
            height:'4032',
            width:'3024'
          },
          {
            id: 22,
            src: '/22.JPG',
            alt: 'Photo 7',
            height:'4032',
            width:'3024'
          },
        
          {
            id: 24,
            src: '/24.jpeg',
            alt: 'Photo 9',
            height:'4032',
            width:'3024'
          },
          {
            id: 25,
            src: '/25.jpeg',
            alt: 'Photo 10',
            height:'4032',
            width:'3024'
          },
          {
            id: 26,
            src: '/26.jpeg',
            alt: 'Photo 11',
            height:'4032',
            width:'3024'
          },
          {
            id: 27,
            src: '/27.jpeg',
            alt: 'Photo 12',
            height:'4032',
            width:'3024'
          },
        ];
    
      return {
        props: {
          photos: photos,
        },
      };
    }
    
  