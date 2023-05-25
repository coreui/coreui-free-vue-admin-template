<template>
  <div class="glassbackground">
    <form>
      <br />
      <h4>Password Recovery</h4>
      <br />
      <div class="form-outline mb-4">
        <h5>Password</h5>
        <input
          type="password"
          aria-label="password"
          class="form-control"
          v-model="password"
          :class="{ 'is-invalid': v$?.password?.$error }"
          placeholder="Password"
        />
      </div>
      <div class="form-outline mb-4">
        <h5>Confirm Password</h5>
        <input
          type="password"
          aria-label="password"
          class="form-control"
          v-model="password1"
          :class="{ 'is-invalid': v$?.password1?.$error }"
          placeholder="Password"
        />
      </div>
      <div class="text-danger" v-if="password1 != password">
        <button type="button" class="btn btn-danger" disabled>
          Passwords must be the same!
        </button>
      </div>
      <br />
      <button type="button" @click="changepass" class="btn btn-primary">
        Change Password
      </button>
    </form>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { minLength, maxLength, sameAs, required } from '@vuelidate/validators'

export default {
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      password: '',
      password1: '',
    }
  },
  validations() {
    return {
      password: {
        minLength: minLength(6),
        maxLength: maxLength(24),
        required,
      },
      password1: {
        minLength: minLength(6),
        maxLength: maxLength(24),
        sameAs: sameAs(this.password),
        required,
      },
    }
  },
  computed: {
    password1Errors() {
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
    passwordErrors() {
      const errors = []
      if (!this.v$.$dirty) return errors
      if (!this.v$.$invalid) return errors
      if (!this.v$?.password?.minLength)
        errors.push('Please enter at least 6 characters')
      if (!this.v$?.password?.maxLength)
        errors.push('Please enter at most 24 characters')
      if (!this.v$?.password?.required) errors.push('Please fill this line.')
      if (!this.v$?.password?.sameAs) errors.push('Passwords must be the same!')
      return errors
    },
  },
  methods: {
    changepass() {
      this.v$.$touch()
      if (this.v$.$invalid) return
    },
  },
}
</script>
