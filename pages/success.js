import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSubscription } from '../context/SubscriptionContext'
import { Header, Page, SuccessInfo } from '../components'

export default function Success() {
  const { subscription } = useSubscription()
  const router = useRouter()

  useEffect(() => {
    if (!subscription) {
      router.push('/')
    }
  }, [subscription, router])

  return (
    <>
      <Header />
      <Page>
        {subscription && <SuccessInfo />}
      </Page>
    </>
  )
}
