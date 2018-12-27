<template>
    <Layout show-top-header>
        <div slot="mainContent" class="auth-container">
            <div class="form-container">
                <form @submit="submitForm">
                    <h3 class="bs-title auth-title">{{title}}</h3>
                    <div v-if="showSignup" class="input-field col s12">
                        <input 
                            type="text" id="autocomplete-input 1" 
                            class="autocomplete" required
                            v-model="firstName"
                        >
                        <label for="autocomplete-input">FirstName</label>
                    </div>
                    <div v-if="showSignup" class="input-field col s12">
                        <input
                            type="text" id="autocomplete-input 2"
                            class="autocomplete" required
                            v-model="lastName"
                        >
                        <label for="autocomplete-input">Last Name</label>
                    </div>
                    <div class="input-field col s12">
                        <input
                            type="email" id="autocomplete-input 3"
                            class="autocomplete" required
                            v-model="email"
                        >
                        <label for="autocomplete-input">Email</label>
                    </div>
                    <div class="input-field col s12">
                        <input
                            type="password" id="autocomplete-input 4"
                            class="autocomplete" required
                            v-model="password" minlength="7"
                        >
                        <label for="autocomplete-input">Password</label>
                    </div>
                    <div v-if="showSignup" class="input-field col s12">
                        <input
                            type="password" id="autocomplete-input 5"
                            class="autocomplete" required
                            v-model="cpassword" minlength="7"                         
                        >
                        <label for="autocomplete-input">Confirm Password</label>
                        <span v-show="!validPassword" class="danger">
                            Passwords do not match!
                        </span>
                    </div>
                    <button
                        type="submit" 
                        class="waves-effect waves-light btn-large bs-btn auth-btn"
                    >
                        {{buttonLabel}} <i class="material-icons right">send</i>
                    </button>
                </form>
            </div>
        </div>
    </Layout>
</template>

<script>
import Layout from '../Shared/Layout/index.vue';

export default {
  name: 'AuthPage',
  data() {
      return {
          firstName: null,
          lastName: null,
          email: null,
          password: null,
          cpassword: null,
      }
  },
  components: { Layout },
  computed: {
        showSignup() {
            return this.$route.name === 'Signup';
        },
        title() {
            return this.showSignup ? 'Create Account' : 'Log in';
        },
        buttonLabel() {
            return this.showSignup ? 'Signup' : 'Log in';
        },
        validPassword() {
            const match = this.showSignup && (this.password === this.cpassword);
            return match;
        }
  },
  methods: {
        submitForm(e) {
          e.preventDefault();
          console.log('submitted'); // eslint-disable-line
        },
  },
  created() {
      console.log(this.title) //eslint-disable-line
  }
}
</script>

<style lang="scss" src='./authpage.scss' scoped>
</style>

