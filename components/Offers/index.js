import Image from 'next/image'
import { currency } from '../../utils'
import { useOffers } from '../../context/OffersContext'
import interrogationMarkCircle from '../../public/icons/interrogation-mark-circle.svg'
import { Caption, Container, DiscountTag, Email, Heading, Icon, Info, Installments, Offer, RadioButton, Title } from './styled'

export default function Offers() {
  const { offers, selectedOffer, setSelectedOffer } = useOffers()

  return (
    <Container>
      <Heading>Confira seu plano:</Heading>
      <Email>fulano@cicrano.com.br</Email>
      {
        offers?.map((offer) => {
          const fullPriceLabel = currency.format(offer.fullPrice)
          const discountedPrice = offer.fullPrice - offer.discountAmmount
          const discountedPriceLabel = currency.format(discountedPrice)
          const discountedPerc = offer.discountPercentage * 100
          const monthlyPriceLabel = currency.format(discountedPrice / offer.installments)

          const handleOfferClick = () => setSelectedOffer(offer)

          return (
            <Offer key={offer.id} onClick={handleOfferClick}>
              <Title>{offer.title} | {offer.description}</Title>
              <Caption>
                De R$ {fullPriceLabel} | Por R$ {discountedPriceLabel}
                <DiscountTag>-{discountedPerc}%</DiscountTag>
              </Caption>
              <Installments>{offer.installments}x de R$ {monthlyPriceLabel}{offer.installments > 1 && '/mês'}</Installments>
              <RadioButton checked={offer.id === selectedOffer.id} />
            </Offer>
          )
        })
      }
      <Info>
        Sobre a cobrança
        <Icon>
          <Image src={interrogationMarkCircle} alt="Ajuda" />
        </Icon>
      </Info>
    </Container>
  )
}