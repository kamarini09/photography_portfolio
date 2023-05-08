
import PhotoCard from "@/components/PhotoCard";
import { Image } from 'antd';

export default function AthensPage({photos}) {
  return (
    <>
       <div className="photo-grid">
     
        {photos.map(photo => <PhotoCard key={photo.id} imageUrl={photo.imageUrl} />)}
      
      </div>
    </>
  );
}
    
    export async function getStaticProps() {
      const photos = [
        {
          id: 15,
          imageUrl: '/15.jpeg',
          imageAlt: 'Photo 9',
        },
        {
          id: 16,
          imageUrl: '/16.jpeg',
          imageAlt: 'Photo 1',
        },
        {
          id: 17,
          imageUrl: '/17.jpeg',
          imageAlt: 'Photo 17',
        },
        {
          id: 18,
          imageUrl: '/18.jpeg',
          imageAlt: 'Photo 3',
        },
        {
          id: 19,
          imageUrl: '/19.jpeg',
          imageAlt: 'Photo 4',
        },
        {
          id: 20,
          imageUrl: '/20.jpeg',
          imageAlt: 'Photo 5',
        },
        {
          id: 21,
          imageUrl: '/21.JPG',
          imageAlt: 'Photo 6',
        },
        {
          id: 22,
          imageUrl: '/22.JPG',
          imageAlt: 'Photo 7',
        },
        // {
        //   id: 23,
        //   imageUrl: '/23.JPG',
        //   imageAlt: 'Photo 8',
        // },
        {
          id: 24,
          imageUrl: '/24.jpeg',
          imageAlt: 'Photo 9',
        },
        {
          id: 25,
          imageUrl: '/25.jpeg',
          imageAlt: 'Photo 10',
        },
        {
          id: 26,
          imageUrl: '/26.jpeg',
          imageAlt: 'Photo 11',
        },
        {
          id: 27,
          imageUrl: '/27.jpeg',
          imageAlt: 'Photo 12',
        },
      ];
    
      return {
        props: {
          photos: photos,
        },
      };
    }
    
  