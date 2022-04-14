import DatabaseProvider from '../context/dbContext'

// Custom App to wrap it with context provider
export default function App({ Component, pageProps }) {
  return (
    <DatabaseProvider>
      <Component {...pageProps} />
    </DatabaseProvider>
  )
}
