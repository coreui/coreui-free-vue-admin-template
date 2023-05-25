<template>
  <div class="glassbackground">
    <form>
      <br />
      <h2>Забули пароль</h2>
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
          aria-describedby="forgotPassword"
        />
        <div id="forgotPassword" class="form-text">
          Код буде надіслано на вашу електронну пошту
        </div>
      </div>
      <br />
      <button
        type="button"
        v-if="codeSent == false"
        @click="resetpass"
        class="btn btn-primary"
      >
        Надіслати код
      </button>
      <button
        type="button"
        v-if="codeSent == true"
        @click="resetpass"
        disabled
        class="btn btn-primary"
      >
        Код було надіслано!
      </button>
    </form>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'

export default {
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      mail: '',
      codeSent: false,
    }
  },
  validations() {
    return {
      mail: {
        email,
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
  },
  methods: {
    resetpass() {
      this.v$.$touch()
      if (this.v$.$invalid) return
      this.codeSent = true
    },
  },
}
</script>
