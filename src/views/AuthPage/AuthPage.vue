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
                        :disabled="!validateForm"
                    >
                        {{buttonLabel}} 
                        <i v-show="!authLoading" class="material-icons right">send</i>
                        <Spinner v-show="authLoading" />
                    </button>
                </form>
            </div>
        </div>
    </Layout>
</template>

<script>
import Layout from '../../components/Layout';
import Spinner from '../../components/Spinner/index.vue';
import { validateToken } from '../../Utils/token';
import { mapState } from 'vuex';

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
  components: { Layout, Spinner },
  computed: {
        ...mapState('auth', { authLoading: 'loading' }),
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
        },
        validateForm() {
            const valid = this.showSignup ?
             (this.firstName && this.lastName && this.password &&
                this.email && (this.password === this.cpassword))
            : this.email && this.password;

            return valid;
        }
  },
  methods: {
        submitForm(e) {
            e.preventDefault();
            if (this.showSignup) return this.signupUser();
            return this.loginUser();
        },
        signupUser: function() {
            const userData = {
                firstname: this.firstName,
                lastname: this.lastName,
                email: this.email,
                password: this.password
            };
            const validForm = this.validateForm;
            if (validForm) return this.$store.dispatch('auth/signUserIn', userData)
        },
        loginUser: function() {
            const userData = {
                email: this.email,
                password: this.password
            };

            if (this.email && this.password) return this.$store
                .dispatch('auth/logUserIn', userData)
        }
  },
  beforeCreate: function() {
        const validToken = validateToken();
        if (validToken) return this.$router.push({ name: 'Dashboard' });
  }
}
</script>

<style lang="scss" src='./authpage.scss' scoped>
</style>

