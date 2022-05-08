import AcceptedCreditCards from '../AcceptedCreditCards'
import { Container, Heading, Hint } from './styled'

export default function Payment() {
  return (
    <Container>
      <Heading>Estamos quase lá!</Heading>
      <Hint>Insira seus dados de pagamento abaixo:</Hint>
      <AcceptedCreditCards />
    </Container>
  )
}
