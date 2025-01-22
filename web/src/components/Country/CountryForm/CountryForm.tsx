import type { EditCountryById, UpdateCountryInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

type FormCountry = NonNullable<EditCountryById['country']>

interface CountryFormProps {
  country?: EditCountryById['country']
  onSave: (data: UpdateCountryInput, id?: FormCountry['id']) => void
  error: RWGqlError
  loading: boolean
}

const CountryForm = (props: CountryFormProps) => {
  const onSubmit = (data: FormCountry) => {
    props.onSave(data, props?.country?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormCountry> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.country?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CountryForm
