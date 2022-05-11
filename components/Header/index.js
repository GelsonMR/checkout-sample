import Image from 'next/image'
import Link from 'next/link'
import { Container, IconButton, Logo } from './styled'
import logo from '../../public/logo.svg'
import arrowLeft from '../../public/icons/arrow-left.svg'

export default function Header({ loading }) {
  return (
    <Container>
      <Link href={'/'}>
        <IconButton>
          <Image src={arrowLeft} alt="Back" />
        </IconButton>
      </Link>
      <Logo $loading={loading}>
        <Image src={logo} alt="Whitebook logo" />
      </Logo>
    </Container>
  )
}
