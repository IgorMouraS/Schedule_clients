import { NavLink } from "react-router";
import Card from "../components/Card/Card";
import Container from "../components/Container/Container";
import Text from "../components/Text/Text";

export default function Footer() {
  return (
    <Card as='footer' className={`w-full`} variant={'none'}>
      <Container size={'lg'} className='flex justify-center items-center'>
        <nav className='flex gap-4'>
          <NavLink to="/" end>
            <Text size={'title-md'} variant={'gray-200'}>Schedule</Text>
          </NavLink>
          <NavLink to="/components" end>
            <Text size={'title-md'} variant={'gray-200'}>Components</Text>
          </NavLink>
        </nav>
      </Container>
    </Card>
  )
}