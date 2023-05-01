export default function Layout({children}){
    return(
        <>
        <nav>
            <a href="/">Home</a>
        </nav>
        <main>
        {children}
        </main>
        <footer> Kamarini Moragianni</footer>
        </>
    )
}