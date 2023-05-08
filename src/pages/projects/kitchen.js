
import ImageGallery from "@/components/ImageGallery";


export default function KitchenPage() {
  return (
    <div >
    <p>Click to see the images</p>
    <ImageGallery photos={photos} />
  </div>
  );
}



const photos = [
  {
    id: 31,
    imageUrl: '/31.jpg',
    imageAlt: 'Photo 1',
  },
  {
    id: 32,
    imageUrl: '/33.jpg',
    imageAlt: 'Photo 2',
  },
  {
    id: 32,
    imageUrl: '/32.jpg',
    imageAlt: 'Photo 3',
  },
  // {
  //   id: 4,
  //   imageUrl: '/4.jpeg',
  //   imageAlt: 'Photo 4',
  // },
  // {
  //   id: 5,
  //   imageUrl: '/5.jpeg',
  //   imageAlt: 'Photo 5',
  // },
  // {
  //   id: 6,
  //   imageUrl: '/6.jpeg',
  //   imageAlt: 'Photo 6',
  // },
  // {
  //   id: 7,
  //   imageUrl: '/7.jpeg',
  //   imageAlt: 'Photo 7',
  // },
  // {
  //   id: 8,
  //   imageUrl: '/8.jpeg',
  //   imageAlt: 'Photo 8',
  // },
  // {
  //   id: 9,
  //   imageUrl: '/9.jpeg',
  //   imageAlt: 'Photo 9',
  // },
  // {
  //   id: 10,
  //   imageUrl: '/10.jpeg',
  //   imageAlt: 'Photo 10',
  // },
  // {
  //   id: 11,
  //   imageUrl: '/11.JPG',
  //   imageAlt: 'Photo 11',
  // },
  // {
  //   id: 12,
  //   imageUrl: '/12.jpeg',
  //   imageAlt: 'Photo 12',
  // }
]



    
   
      