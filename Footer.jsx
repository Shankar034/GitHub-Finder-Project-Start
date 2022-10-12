function Footer() {

    const footerYear = new Date().getFullYear()
  return (

    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
    <div>
    <svg viewBox="0 0 100 100" width="200" height="200">
  <g transform="translate(50,50)">
    <path d="M38,-1h12v2h-12zM-38-1h-12v2h12z"/>
    <path d="M40,-1h8v2h-8zM-40-1h-8v2h8z" transform="rotate(30)"/>
    <path d="M40,-1h8v2h-8zM-40-1h-8v2h8z" transform="rotate(60)"/>
    <path d="M38,-1h12v2h-12zM-38-1h-12v2h12z" transform="rotate(90)"/>
    <path d="M40,-1h8v2h-8zM-40-1h-8v2h8z" transform="rotate(120)"/>
    <path d="M40,-1h8v2h-8zM-40-1h-8v2h8z" transform="rotate(150)"/>
    <path d="M-0.5,0v-35h1v35z"/>
    <path d="M0,-0.75h30v1.5h-30z"/>
    <path d="M0,-0.75h30v1.5h-30z" transform="rotate(-30)" fill="#888"/>
    <circle r="2"/>
  </g>
</svg>

<p>Copyright &copy; {footerYear} All rights reserved</p>


    </div>
    </footer>
  )
}

export default Footer