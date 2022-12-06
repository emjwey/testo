import './style.css' 
export const Footer = () =>{
    const links = ['Home', 'About', 'Services', 'Contact Us']
        .map( (link,i) => <li key={`ft-${i}`}> <a href="#">{link}</a></li> )
    return (
       <footer>
            <p>Logo Name. All Rights Reserved. Powered By [Dna.micro]</p>
            <ul>
                {links}
            </ul>
       </footer>
    )
}