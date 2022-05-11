import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import InputMask from 'react-input-mask'
import { useRouter } from 'next/router'

import { useOffers } from '../../context/OffersContext'
import { useSubscription } from '../../context/SubscriptionContext'
import AcceptedCreditCards from '../AcceptedCreditCards'
import FormField from '../FormField'
import { Container, Form, Heading, Hint } from './styled'
import { schema } from './consts'
import Button from '../Button'

export default function Payment() {
  const router = useRouter()
  const [installmentsOptions, setInstallmentsOptions] = useState([])
  const { selectedOffer } = useOffers()
  const { isLoading, subscribe } = useSubscription()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = async data => {
    const body = {
      ...data,
      couponCode: data.couponCode || null,
      installments: data.installments || 1,
      gateway: selectedOffer.gateway,
      offerId: selectedOffer.id,
      userId: 1
    }
    const res = await subscribe(body)
    if (res.error) {
      alert('Houve um erro ao processar sua assinatura, tente novamente.')
      return
    }
    router.push('/success')
  }

  useEffect(() => {
    if (!selectedOffer) {
      return
    }
    if (!selectedOffer.acceptsCoupon) {
      setValue('couponCode', '')
    }
    setValue('installments', '')
    setValue('showInstallments', selectedOffer.splittable)
    if (!selectedOffer.splittable) {
      setInstallmentsOptions([])
      return
    }
    const newInstallmentsOptions = [
      { label: 'Selecione', value: '' },
      ...Array.from({ length: selectedOffer.installments - 1 }).map((_, index) => {
        const installments = `${index + 2}`
        return {
          label: `${installments} parcelas`,
          value: installments,
        }
      })
    ]
    setInstallmentsOptions(newInstallmentsOptions)
  }, [selectedOffer, setValue])

  return (
    <Container>
      <Heading>Estamos quase lá!</Heading>
      <Hint>Insira seus dados de pagamento abaixo:</Hint>
      <AcceptedCreditCards />
      <Form disabled={isLoading} onSubmit={handleSubmit(onSubmit)}>
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
        {
          selectedOffer?.acceptsCoupon && (
            <FormField
              label="Cupom"
              placeholder="Insira aqui"
              error={errors.couponCode?.message}
              {...register('couponCode')}
            />
          )
        }
        {
          selectedOffer?.splittable && (
            <FormField
              label="Número de parcelas"
              options={installmentsOptions}
              error={errors.installments?.message}
              {...register('installments')}
            />
          )
        }
        <Button>Finalizar pagamento</Button>
      </Form>
    </Container>
  )
}
