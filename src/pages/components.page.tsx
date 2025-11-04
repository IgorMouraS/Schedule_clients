import Text from './../components/components/Text/Text'
import Icon from './../components/components/Icon/Icon'

import { SunHorizonIcon, CloudSunIcon, UserSquareIcon, MoonStarsIcon, CaretDownIcon, CalendarBlankIcon, CaretRightIcon, CaretLeftIcon, TrashIcon } from "@phosphor-icons/react/ssr";
import Button from './../components/components/Button/Button';
import Input from './../components/components/Input/Input';
import ButtonIcon from './../components/components/ButtonIcon/ButtonIcon';
import TimeSelect from './../components/components/TimeSelect/TimeSelect';
import Container from './../components/components/Container/Container';
import Card from './../components/components/Card/Card';

export default function ComponentsPage() {
  return <>
    <Container className="p-5" size={'lg'}>
      <div className='flex flex-col m-4 gap-2'>
        <Text size={'title-lg'} variant={'yellow-dark'}>Olá Mundo!</Text>
        <Text size={'title-md'}>Olá Mundo!</Text>
        <Text size={'title-sm'}>Olá Mundo!</Text>
        <Text>Olá Mundo!</Text>
        <Text size={'text-sm'}>Olá Mundo!</Text>
      </div>
      <div className="flex m-4 gap-2">
        <Icon as={SunHorizonIcon} />
        <Icon as={CloudSunIcon} />
        <Icon as={UserSquareIcon} />
        <Icon as={MoonStarsIcon} />
        <Icon as={CaretDownIcon} />
        <Icon as={CalendarBlankIcon} />
        <Icon as={CaretRightIcon} />
        <Icon as={CaretLeftIcon} color={'yellow'} />
        <Icon as={TrashIcon} color={'yellow-dark'} />
      </div>
      <div className='flex flex-col gap-3'>
        <Button>AGENDAR</Button>
        <Input as={UserSquareIcon} placeholder='Nome do Cliente'></Input>
        <ButtonIcon as={TrashIcon} />
      </div>
      <div className='flex gap-2'>
        <TimeSelect>09:00</TimeSelect>
        <TimeSelect selected>09:00</TimeSelect>
        <TimeSelect disabled>09:00</TimeSelect>
      </div>
      <div className="flex mt-5">
        <Card className='min-h-screen'>
          <Container>Ola</Container>
        </Card>
        <Card variant={'none'} size={'lg'} className='min-h-screen'>
          <Container size={'lg'}>TESTE</Container>
        </Card>
      </div>
    </Container>
  </>
}
