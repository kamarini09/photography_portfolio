
import ImageGallery from "@/components/ImageGallery";
import styles from "./Kitchen.module.css"


export default function KitchenPage() {
  return (
    <div className={styles.photos}>
      <ImageGallery photos={photos} />
      <div>
      <h2 className={styles.h2}>Kitchen stories</h2>
      <p className={styles.p} >During my time in photography school, I embarked on a project where I captured a series of images in my old kitchen in Athens. I intentionally refrained from styling the setting, opting instead to take photos of whatever caught my eye at the moment. The premise was simple: I would enter the kitchen randomly and snap pictures of anything that piqued my interest.
      </p>
      <br></br>
      <p className={styles.p}>You can click to see the images</p>
      </div>
      
    </div>
  );
}


const photos = [
  {
    id: 31,
    imageUrl: '/12.png',
    imageAlt: 'Photo of a sponge',
  },
  {
    id: 32,
    imageUrl: '/3.png',
    imageAlt: 'Photo of a sponge',
  },
  {
    id: 33,
    imageUrl: '/4.png',
    imageAlt: 'Photo of a lemon',
  },
  {
    id: 34,
    imageUrl: '/13.png',
    imageAlt: 'Photo of a toast',
  },{
    id: 35,
    imageUrl: '/15.png',
    imageAlt: 'Photo with shadow',
  },{
    id: 36,
    imageUrl: '/6.png',
    imageAlt: 'Photo of a towel',
  },{
    id: 37,
    imageUrl: '/14.png',
    imageAlt: 'Photo of a glass',
  },{
    id: 38,
    imageUrl: '/7.png',
    imageAlt: 'Photo of a glass',
  },{
    id: 39,
    imageUrl: '/11.png',
    imageAlt: 'Photo of a shadow',
  }
  //,{
  //   id: 40,
  //   imageUrl: '/10.png',
  //   imageAlt: 'Photo 3',
  // },
  // {
  //   id: 41,
  //   imageUrl: '/11.png',
  //   imageAlt: 'Photo 3',
  // },{
  //   id: 42,
  //   imageUrl: '/12.png',
  //   imageAlt: 'Photo 3',
  // },{
  //   id: 43,
  //   imageUrl: '/13.png',
  //   imageAlt: 'Photo 3',
  // }
]



    
   
      