<template>
  <div class="vue-tempalte">
    <section class="vh-100 gradient-custom">
      <div class="container py-5 h-100">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-12 col-lg-9 col-xl-7">
            <div
              class="card shadow-2-strong card-registration"
              style="border-radius: 15px"
            >
              <div class="card-body p-4 p-md-5">
                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">SIGN IN</h3>
                <form @submit.prevent="handleSumbit">
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <label class="form-label" for="firstName"
                          >Username</label
                        >
                        <input
                          type="text"
                          id="username"
                          class="form-control form-control-lg"
                          v-model="username"
                        />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4 pb-2">
                      <div class="form-outline">
                        <label class="form-label" for="Password"
                          >Password</label
                        >
                        <input
                          type="password"
                          id="Password"
                          class="form-control form-control-lg"
                          v-model="userPassword"
                        />
                      </div>
                    </div>
                  </div>
                  <div style="color: red" v-if="emptyError">
                    You have to fill this stuff out, you know.
                  </div>
                  <div
                    style="text-align: left; color: red"
                    v-else-if="emptyEamil"
                  >
                    You forgot to enter your username!
                  </div>
                  <div
                    style="text-align: right; color: red"
                    v-else-if="emptyPassword"
                  >
                    You forgot to enter your password!
                  </div>
                  <br />
                  <div class="row mb-4">
                    <div class="col d-flex justify-content-center">
                      <!-- Checkbox -->
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="form2Example31"
                          checked
                        />
                        <label class="form-check-label" for="form2Example31">
                          Remember me
                        </label>
                      </div>
                    </div>

                    <div class="col">
                      <!-- Simple link -->
                      <a href="#!">Forgot password?</a>
                    </div>
                  </div>
                  <div class="text-center">
                    <p>
                      Not a member?
                      <router-link to="/signup">Register </router-link>
                    </p>
                  </div>
                  <div class="mt-4 pt-2">
                    <input
                      class="btn btn-primary btn-lg"
                      type="submit"
                      value="SIGN IN"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "LogIn",
  data: function () {
    return {
      username: "",
      userPassword: "",
      emptyError: false,
      cleanEmail: false,
      cleanPassword: false,
      emptyEamil: false,
      emptyPassword: false,
    };
  },
  methods: {
    resetFlags() {
      this.emptyPassword = false;
      this.emptyEamil = false;
      this.emptyError = false;
    },
    handleSumbit() {
      if (!this.userEmail && !this.userPassword) {
        this.resetFlags();
        this.emptyError = true;
      } else if (this.userEmail && !this.userPassword) {
        this.resetFlags();
        this.emptyPassword = true;
      } else if (this.userPassword && !this.username) {
        this.resetFlags();
        this.emptyEamil = true;
      } else {
        this.resetFlags();
        this.cleanEmail = true;
        this.cleanPassword = true;
      }
      if (this.cleanEmail && this.cleanPassword) {
        let username = this.username;
        let password = this.userPassword;
        this.$store.dispatch("login", { username, password }).then(() => {
        this.$router.push("/");
        });
      }
    },
  },
};
</script>

<style></style>
