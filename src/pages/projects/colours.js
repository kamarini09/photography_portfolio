
import PhotoCard from "@/components/PhotoCard"
import styles from "./Colours.module.css"




export default function ColourPage({photos}) {
  return (
    <>
       <div className={styles.photogrid}>
     
        {photos.map(photo => <PhotoCard key={photo.id} imageUrl={photo.imageUrl} />)}
     
      </div>
    </>
  );
}
    
    export async function getStaticProps() {
      const photos = [
        {
          id: 40,
          imageUrl: '/40.png',
          imageAlt: 'Photo of lemons',
        },
        {
          id: 41,
          imageUrl: '/41.png',
          imageAlt: 'Photo of tomatoes',
        },
        {
          id: 42,
          imageUrl: '/42.png',
          imageAlt: 'Photo of sunflowers',
        },
        {
          id: 43,
          imageUrl: '/43.png',
          imageAlt: 'Photo of old things',
        },
        {
          id: 44,
          imageUrl: '/44.png',
          imageAlt: 'Photo of an orange car',
        },
        {
          id: 45,
          imageUrl: '/45.png',
          imageAlt: 'Photo of a store',
        },
        {
          id: 46,
          imageUrl: '/46.png',
          imageAlt: 'Photo of food',
        },
        {
          id: 47,
          imageUrl: '/47.png',
          imageAlt: 'Photo of fruits',
        },
        {
          id: 48,
          imageUrl: '/48.png',
          imageAlt: 'Photo of souvlaki',
        },
        {
          id: 49,
          imageUrl: '/49.png',
          imageAlt: 'Photo of yellow store',
        },
        {
          id: 50,
          imageUrl: '/50.png',
          imageAlt: 'Photo of a colourful market',
        },
        {
          id: 51,
          imageUrl: '/51.png',
          imageAlt: 'Photo of a yellow building',
        },
      ];
    
      return {
        props: {
          photos: photos,
        },
      };
    }
    
  