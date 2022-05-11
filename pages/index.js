import { Header, Page, Payment, Offers } from '../components'
import { useOffers } from '../context/OffersContext'

export default function Home() {
  const { isLoading, error } = useOffers()

  return (
    <>
      <Header loading={isLoading} />
      <Page>
        {error && 'Erro ao carregar planos'}
        {!isLoading && (
          <>
            <Payment />
            <Offers />
          </>
        )}
      </Page>
    </>
  )
}
