import { Header, Page, Payment, Offers } from '../components'
import { useOffers } from '../context/OffersContext'
import { useSubscription } from '../context/SubscriptionContext'

export default function Home() {
  const offers = useOffers()
  const subscription = useSubscription()

  return (
    <>
      <Header loading={offers.isLoading || subscription.isLoading} />
      <Page>
        {offers.error && 'Erro ao carregar planos'}
        {offers.offers && (
          <>
            <Payment />
            <Offers />
          </>
        )}
      </Page>
    </>
  )
}
