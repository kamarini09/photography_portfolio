import { useRouter } from 'next/router';
import Anchor from './Anchor';

export default function Layout({children, navData}){
  const router = useRouter();

  return (
    <>
      <nav>
        <ul>
          {navData.map((item, index) => (
            <li key={index}>
              <Anchor href={item.link} className={router.asPath === item.link ? 'active' : ''}>
                {item.name}
              </Anchor>
            </li>
          ))}
        </ul>
      </nav>
      <main>{children}</main>
      <footer> Kamarini Moragianni</footer>
    </>
  )
}






