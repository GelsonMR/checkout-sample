import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { getOffers } from '../client'

export const OffersContext = createContext({})

export function OffersContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false)
  const [offers, setOffers] = useState()
  const [selectedOffer, setSelectedOffer] = useState()
  const [error, setError] = useState(false)

  const fetchOffers = useCallback(async () => {
    setIsLoading(true)
    setError(false)
    try {
      const res = await getOffers()
      setOffers(res.data.sort((a, b) => a.order - b.order))
      setSelectedOffer(res.data[0])
    } catch (e) {
      console.error(e)
      setError(true)
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    fetchOffers()
  }, [fetchOffers])

  const sharedState = {
    isLoading,
    offers,
    selectedOffer,
    error,
    setSelectedOffer
  }

  return (
    <OffersContext.Provider value={sharedState}>
      {children}
    </OffersContext.Provider>
  )
}

export function useOffers() {
  return useContext(OffersContext)
}
