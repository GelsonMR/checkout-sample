import * as yup from 'yup'
import { cpf } from '../../utils'

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
    .test('cpf', 'Use um CPF válido', value => cpf.test(value.replace(/[\.,\-]+/g, ''))),
  couponCode: yup.string()
    .max(16),
  showInstallments: yup.boolean(),
  installments: yup.string()
    .when('showInstallments', {
      is: true,
      then: yup.string().required('Selecione um valor'),
    }),
}).required()
