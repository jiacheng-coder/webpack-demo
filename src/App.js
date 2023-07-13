import appStyle from './App.less'

function App() {
  const element = document.createElement('div')
  element.innerHTML = 'This is App'
  element.className = appStyle.wrapper
  return element
}
document.body.appendChild(App())