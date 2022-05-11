import Image from 'next/image'
import { cpf, currency } from '../../utils'
import { useSubscription } from '../../context/SubscriptionContext'
import check from '../../public/icons/check.svg'
import star from '../../public/icons/star.svg'
import { Check, Container, Description, Heading, Congratulations, Card, Highlight, Star, Primary, Secondary, Field, Value } from './styled'
import { useOffers } from '../../context/OffersContext'
import Button from '../Button'
import Link from 'next/link'

export default function SuccessInfo() {
  const { subscription } = useSubscription()
  const { selectedOffer } = useOffers()

  const discountedPrice = selectedOffer.fullPrice - selectedOffer.discountAmmount
  const discountedPriceLabel = currency.format(discountedPrice)
  const monthlyPriceLabel = currency.format(discountedPrice / subscription.installments)
  const maskedCPF = cpf.mask(subscription.creditCardCPF)

  return (
    <Container>
      <Congratulations>
        <Check>
          <Image src={check} alt="Sucesso" />
        </Check>
        <Heading>Parabéns!</Heading>
        <Description>
          Sua assinatura foi realizada
          <br />
          com sucesso.
        </Description>
      </Congratulations>
      <Card>
        <Highlight>
          <Star>
            <Image src={star} alt="" />
          </Star>
          <Primary>{selectedOffer.title} | {selectedOffer.description}</Primary>
          <Secondary>{discountedPriceLabel} | {subscription.installments}x {monthlyPriceLabel}</Secondary>
        </Highlight>
        <Field>
          E-mail
          <Value>fulano@cicrano.com.br</Value>
        </Field>
        <Field>
          CPF
          <Value>{maskedCPF}</Value>
        </Field>
      </Card>
      <Link href="/">
        <Button as="a" text>Gerenciar assinatura</Button>
      </Link>
      <Link href="/">
        <Button as="a">IR PARA A HOME</Button>
      </Link>
    </Container>
  )
}
