
import PhotoCard from "@/components/PhotoCard";
import { Image } from 'antd';

export default function TomatoPage({photos}) {
  return (
    <>
       <div className="photo-grid">
      <Image.PreviewGroup>
        {photos.map(photo => <PhotoCard key={photo.id} imageUrl={photo.imageUrl} />)}
      </Image.PreviewGroup>
      </div>
    </>
  );
}
    
    export async function getStaticProps() {
      const photos = [
        {
          id: 1,
          imageUrl: '/1.jpeg',
          imageAlt: 'Photo 1',
        },
        {
          id: 2,
          imageUrl: '/2.jpeg',
          imageAlt: 'Photo 2',
        },
        {
          id: 3,
          imageUrl: '/3.jpeg',
          imageAlt: 'Photo 3',
        },
        {
          id: 4,
          imageUrl: '/4.jpeg',
          imageAlt: 'Photo 4',
        },
        {
          id: 5,
          imageUrl: '/5.jpeg',
          imageAlt: 'Photo 5',
        },
        {
          id: 6,
          imageUrl: '/6.jpeg',
          imageAlt: 'Photo 6',
        },
        {
          id: 7,
          imageUrl: '/7.jpeg',
          imageAlt: 'Photo 7',
        },
        {
          id: 8,
          imageUrl: '/8.jpeg',
          imageAlt: 'Photo 8',
        },
        {
          id: 9,
          imageUrl: '/9.jpeg',
          imageAlt: 'Photo 9',
        },
        {
          id: 10,
          imageUrl: '/10.jpeg',
          imageAlt: 'Photo 10',
        },
        {
          id: 11,
          imageUrl: '/11.JPG',
          imageAlt: 'Photo 11',
        },
        {
          id: 12,
          imageUrl: '/12.jpeg',
          imageAlt: 'Photo 12',
        },
      ];
    
      return {
        props: {
          photos: photos,
        },
      };
    }
    
  