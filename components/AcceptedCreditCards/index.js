import Image from 'next/image'
import { cardsList } from './consts'
import { CardsList, CardWrapper, Container, Logo, PoweredBy } from './styled'
import iugu from '../../public/payment/iugu.svg'

export default function AcceptedCreditCards() {
  return (
    <Container>
      <CardsList>
        {cardsList.map(card => (
          <CardWrapper key={card.name}>
            <Image src={card.logo} alt={card.name} />
          </CardWrapper>
        ))}
      </CardsList>
      <PoweredBy>
        Pagamentos por{' '}
        <Logo>
          <Image src={iugu} alt="Iugu" />
        </Logo>
      </PoweredBy>
    </Container>
  )
}
