import Image from "next/image";


export default function Photo(props){
  return (
      <Image
          src={props.src}
          alt={props.alt}
          width={300}
          height={400}
          sizes='(max-width: 750px) 100vw, 750px'
      />
 
  )
}