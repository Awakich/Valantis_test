import './globals.css'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import Layout from './components/Layout.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Layout>
      <App />
    </Layout>
  </BrowserRouter>
)