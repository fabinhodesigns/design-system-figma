
import { Envelope, Lock } from 'phosphor-react';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput'; 
import { Logo } from './Logo';

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Futurists Arts 
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e tenha conteúdos exclusivos!
        </Text>
      </header>

      <form className="flex flex-col gap-4 items-stretch w-full max-w-md mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text>Endereço de e-mail</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input type="email" id="email" placeholder="Digite seu e-mail" />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text>Sua Senha</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input type="password"  id="password" placeholder="******************" />
          </TextInput.Root>
        </label>
      </form>
    </div>
  )
}