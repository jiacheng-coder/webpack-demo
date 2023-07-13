import headerStyle from './Header.less'
import demoFun from './demo.ts'

function Header() {
  demoFun()
  const element = document.createElement('div')
  element.innerHTML = 'This is Header'
  element.className = headerStyle.wrapper
  return element
}
document.body.appendChild(Header())