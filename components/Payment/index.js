import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import InputMask from 'react-input-mask'

import AcceptedCreditCards from '../AcceptedCreditCards'
import FormField from '../FormField'
import { Container, Form, Heading, Hint } from './styled'
import { installmentsOptions, schema } from './consts'
import Button from '../Button'

export default function Payment() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = data => console.log(data)

  return (
    <Container>
      <Heading>Estamos quase lá!</Heading>
      <Hint>Insira seus dados de pagamento abaixo:</Hint>
      <AcceptedCreditCards />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputMask mask="9999 9999 9999 9999" maskChar="" {...register('creditCardNumber')}>
          {(inputProps) => (
            <FormField
              label="Número do cartão"
              autoComplete="cc-number"
              placeholder="0000 0000 0000 0000"
              error={errors.creditCardNumber?.message}
              {...inputProps}
            />
          )}
        </InputMask>
        <InputMask mask="99/99" maskChar="" {...register('creditCardExpirationDate')}>
          {(inputProps) => (
            <FormField
              label="Validade"
              autoComplete="cc-exp"
              placeholder="MM/AA"
              error={errors.creditCardExpirationDate?.message}
              style={{ gridColumn: '1 / 2' }}
              {...inputProps}
            />
          )}
        </InputMask>
        <InputMask mask="999" maskChar="" {...register('creditCardCVV')}>
          {(inputProps) => (
            <FormField
              label="CVV"
              autoComplete="cc-csc"
              placeholder="000"
              error={errors.creditCardCVV?.message}
              style={{ gridColumn: '2 / 3' }}
              {...inputProps}
            />
          )}
        </InputMask>
        <FormField
          label="Nome impresso no cartão"
          autoComplete="cc-name"
          placeholder="Seu nome"
          error={errors.creditCardHolder?.message}
          {...register('creditCardHolder')}
        />
        <InputMask mask="999.999.999-99" maskChar="" {...register('creditCardCPF')}>
          {(inputProps) => (
            <FormField
              label="CPF"
              placeholder="000.000.000-00"
              error={errors.creditCardCPF?.message}
              {...inputProps}
            />
          )}
        </InputMask>
        <FormField
          label="Cupom"
          placeholder="Insira aqui"
          error={errors.couponCode?.message}
          {...register('couponCode')}
        />
        <FormField
          label="Número de parcelas"
          options={installmentsOptions}
          error={errors.installments?.message}
          {...register('installments')}
        />
        <Button>Finalizar pagamento</Button>
      </Form>
    </Container>
  )
}
