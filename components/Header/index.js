import Image from 'next/image'
import Link from 'next/link'
import { Container, IconButton } from './styled'
import logo from '../../public/logo.svg'
import arrowLeft from '../../public/icons/arrow-left.svg'

export default function Header() {
  return (
    <Container>
      <Link href={'/'}>
        <IconButton>
          <Image src={arrowLeft} alt="Back" />
        </IconButton>
      </Link>
      <Image src={logo} alt="Whitebook logo" />
    </Container>
  )
}
