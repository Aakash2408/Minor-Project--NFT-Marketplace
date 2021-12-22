import '../styles/globals.css'
import './app.css'
import Link from 'next/link'

function KryptoBirdMarketplace({Component, pageProps}) {
  return (
    <div>
      <nav className='border-b p-6' >
        <p className='text-4xl font-bold'>NFT Marketplace</p>
        <div className='flex mt-4 '>
          <Link href='/'>
            <a className='mr-4 text-pink-500'>
              Main Marketplace
            </a>
          </Link>
          <Link href='/mint-item'>
            <a className='mr-6 text-pink-500'>
              Mint Tokens
            </a>
          </Link>
          <Link href='/my-nfts '>
            <a className='mr-6 text-pink-500'>
              My NFts
            </a>
          </Link>
          <Link href='/account-dashboard'>
            <a className='mr-6 text-pink-500'>
              Account Dashboard
            </a>
          </Link>
          </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default KryptoBirdMarketplace 