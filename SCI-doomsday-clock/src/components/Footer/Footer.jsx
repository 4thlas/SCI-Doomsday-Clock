import "./footer.css"

function Footer()
{
    const date = new Date();

    return <footer>
        <span>
            {date.getFullYear()}
        </span>
    </footer>
}

export default Footer;