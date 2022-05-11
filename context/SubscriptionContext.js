import { createContext, useCallback, useContext, useState } from 'react'
import { subscribe } from '../client'

export const SubscriptionContext = createContext()

export function SubscriptionContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false)
  const [subscription, setSubscription] = useState()
  const [error, setError] = useState(false)

  const fetchSubscribe = useCallback(async (params) => {
    setIsLoading(true)
    setError(false)
    try {
      const res = await subscribe(params)
      setSubscription({
        ...res.data,
        ...params
      })
      setIsLoading(false)
      return res
    } catch (e) {
      console.error(e)
      setError(true)
      setIsLoading(false)
      return { error: true }
    }
  }, [])

  const sharedState = {
    isLoading,
    subscription,
    error,
    subscribe: fetchSubscribe
  }

  return (
    <SubscriptionContext.Provider value={sharedState}>
      {children}
    </SubscriptionContext.Provider>
  )
}

export function useSubscription() {
  return useContext(SubscriptionContext)
}
