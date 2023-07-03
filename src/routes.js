import Home from './sections/Home'

export const routes = [
  {
    path: '/',
    element: <Home />,
    name: 'Projects'
  },
  {
    path: "/about-me",
    element: <div>About Me</div>,
    name: 'About Me'
  },
  {
    path: 'resume',
    element: <div>resume</div>,
    name: 'Resume'
  }
]