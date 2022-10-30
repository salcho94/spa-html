// template
const homeTemplate = require('./pages/home.hbs')
const aboutTemplate = require('./pages/about.hbs')
const ponyoTemplate = require('./pages/ponyo.hbs')
const gitBlog = require('./pages/gitblog.hbs')
const salcho = require('./pages/salcho.hbs')
const chat = require('./pages/chat.hbs')

const Home = homeTemplate()
const About = aboutTemplate()
const Ponyo = ponyoTemplate()
const Salcho = salcho()
const GitBlog = gitBlog()
const Chat = chat();

const routes = {
  '/': Home,
  '/home': Home,
  '/about': About,
  '/ponyo' : Ponyo,
  '/salcho' : Salcho,
  '/gitblog' : GitBlog,
  '/chat' : Chat,
}

// entry point
function initialRoutes (mode, el) {
  renderHTML(el, routes['/'])
  window.onpopstate = () => renderHTML(el, routes[window.location.pathname])

}

// set browser history
function historyRouterPush (pathName, el) {
  window.history.pushState({}, pathName, window.location.origin + pathName)
  renderHTML(el, routes[pathName])
}



// render
function renderHTML (el, route) {
  el.innerHTML = route
}

module.exports = {
  initialRoutes,
  historyRouterPush
}
