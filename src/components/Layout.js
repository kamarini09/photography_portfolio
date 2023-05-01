import Anchor from "./Anchor";

export default function Layout({ children, navData }) {
  return (
    <>
      <nav>
        <ul>
          {navData.map((item, index) => (
            <li key={index}>
              <Anchor href={item.link}>{item.name}</Anchor>
            </li>
          ))}
        </ul>
      </nav>
      <main>{children}</main>
      <footer>Kamarini Moragianni</footer>
    </>
  );
}







