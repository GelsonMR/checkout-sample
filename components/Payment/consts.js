import * as yup from 'yup'
import { testCPF } from '../../utils'

yup.setLocale({
  mixed: {
    required: 'Digite um valor',
  },
  string: {
    length: ({ length }) => `Digite ${length} ${length === 1 ? 'carater' : 'caracteres'}`,
    min: ({ min }) => `Digite no mínimo ${min} ${min === 1 ? 'carater' : 'caracteres'}`,
    max: ({ max }) => `Digite no máximo ${max} ${max === 1 ? 'carater' : 'caracteres'}`,
  },
})

export const schema = yup.object().shape({
  creditCardNumber: yup.string()
    .required()
    .test('number', 'Digite 16 caracteres', value => value.split(' ').join('').length === 16),
  creditCardExpirationDate: yup.string()
    .required()
    .test('expiration-pattern', 'Use o padrão MM/AA', value => /^[0-9][0-9]\/[0-9][0-9]+$/g.test(value))
    .test('expiration-valid', 'Use uma data válida', value => {
      let [month, year] = value.split('/')
      month = Number(month)
      if (!month || Number(month) > 12 || year === '00') {
        return false
      }
      const now = new Date()
      const minDate = new Date(now.getFullYear(), now.getMonth()).getTime()
      const selectedDate = new Date(`20${year}`, month - 1).getTime()
      return selectedDate >= minDate
    }),
  creditCardCVV: yup.string()
    .required()
    .test('number', 'Use apenas números', value => /^[0-9]+$/g.test(value))
    .length(3),
  creditCardHolder: yup.string()
    .required()
    .min(2)
    .max(26),
  creditCardCPF: yup.string()
    .required()
    .test('cpf', 'Use um CPF válido', value => testCPF(value.replace(/[\.,\-]+/g, ''))),
  couponCode: yup.string()
    .min(2)
    .max(16),
  installments: yup.string()
    .required('Selecione um valor')
}).required()

export const installmentsOptions = [
  { label: 'Selecione', value: '' },
  { label: '2 parcelas', value: '2' },
  { label: '3 parcelas', value: '3' },
  { label: '4 parcelas', value: '4' },
  { label: '5 parcelas', value: '5' },
  { label: '6 parcelas', value: '6' },
  { label: '7 parcelas', value: '7' },
  { label: '8 parcelas', value: '8' },
  { label: '9 parcelas', value: '9' },
  { label: '10 parcelas', value: '10' },
  { label: '11 parcelas', value: '11' },
  { label: '12 parcelas', value: '12' },
]
