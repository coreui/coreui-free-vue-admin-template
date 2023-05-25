<template>
  <div class="glassbackground">
    <form>
      <br />
      <h1>Ввійти</h1>
      <br />
      <div class="form-outline mb-4">
        <h5>Електронна пошта</h5>
        <input
          type="email"
          id="loginmail"
          class="form-control"
          v-model="mail"
          :class="{ 'is-invalid': v$?.mail?.$error }"
          placeholder="example@gmail.com"
        />
      </div>
      <div class="form-outline mb-4">
        <h4>Пароль</h4>
        <input
          type="password"
          aria-label="password"
          class="form-control"
          v-model="password"
          :class="{ 'is-invalid': v$?.password?.$error }"
          placeholder="Вашпароль123"
          aria-describedby="forgotPassword"
        />
        <div id="forgotPassword" class="form-text">
          <a href="google.com">Скинути пароль</a>
        </div>
      </div>
      <br />
      <button type="button" @click="login" class="btn btn-primary">
        Ввійти
      </button>
    </form>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import {
  minLength,
  maxLength,
  email,
  required,
  helpers,
} from '@vuelidate/validators'

export default {
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      mail: '',
      password: '',
    }
  },
  validations() {
    return {
      mail: {
        email: helpers.withMessage('Please enter only valid mails!', email),
        required: helpers.withMessage("This fill can't be empty", required),
      },
      password: {
        minLength: minLength(6),
        maxLength: maxLength(24),
        required,
      },
    }
  },
  computed: {
    mailErrors() {
      const errors = []
      if (!this.v$.$dirty) return errors
      if (!this.v$.$invalid) return errors
      if (!this.v$?.mail?.email)
        errors.push('Please enter valid email address.')
      if (!this.v$?.mail?.required) errors.push('Please fill this line.')
      return errors
    },
    passwordErrors() {
      const errors = []
      if (!this.v$.$dirty) return errors
      if (!this.v$.$invalid) return errors
      if (!this.v$?.password?.minLength)
        errors.push('Please enter at least 6 characters')
      if (!this.v$?.password?.maxLength)
        errors.push('Please enter at most 24 characters')
      if (!this.v$?.password?.required) errors.push('Please fill this line.')
      return errors
    },
  },
  methods: {
    login() {
      this.v$.$touch()
      if (this.v$.$invalid) return
    },
  },
}
</script>
