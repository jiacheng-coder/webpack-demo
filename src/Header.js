import headerStyle from './Header.css'
function Header() {
  const element = document.createElement('div')
  element.innerHTML = 'This is Header'
  element.className = headerStyle.wrapper
  return element
}
document.body.appendChild(Header())