import logoPath from '../images/logo.svg'

export default function Header() {
  return (
  <header className="header">
    <img className="header__logo" src={logoPath} alt="логотип в шапке"/>
  </header>
  )
}