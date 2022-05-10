import { forwardRef } from 'react'
import { Container, Label, Field, Error } from './styled'

export default forwardRef(function FormField({ label, error, options, style, ...props }, ref) {
  return (
    <Container style={style}>
      <Label error={!!error}>
        {label}
        <Field as={options ? 'select' : 'input'} ref={ref} {...props}>
          {
            options?.map(({ label, value }) => (
              <option key={label} value={value}>{label}</option>
            ))
          }
        </Field>
        {error && <Error>{error}</Error>}
      </Label>
    </Container>
  )
})
