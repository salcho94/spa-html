// css
require('./css/style.css')

// router
const {
  initialRoutes,
  historyRouterPush,
  hashRouterPush
} = require('./router')

// app division
const historyAppDiv = document.querySelector('#history-app')

// Browser History
initialRoutes('history', historyAppDiv)


window.onload = () => {
  const historyLinker = document.querySelectorAll('span.history')

  historyLinker.forEach(el => {
    el.addEventListener('click', (evt) => {
      const pathName = evt.target.getAttribute('route')
      console.log(pathName);
      historyRouterPush(pathName, historyAppDiv)
    })
  })

}
