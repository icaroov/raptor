import { CSSReset } from '@chakra-ui/react'
import { AppProps } from 'next/app'

import Layout from 'components/Layout'
import MainContainer from 'components/Layout/MainContainer'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MainContainer cookies={pageProps.cookies}>
      <CSSReset />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MainContainer>
  )
}

export { getServerSideProps } from 'components/Layout/MainContainer'

export default App
