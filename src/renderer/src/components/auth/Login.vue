<script >
import Button from '../Button.vue';
import Header from '../helper/Header.vue';

    export default {
      data(){
        return{
          user: {
            email: '',
            password: ''
          },
          showError: false,
          error:{
            email:{
              error: false,
              errorMessage: 'Required email'
            },
            password:{
              error: false,
              errorMessage: 'Required Password'
            }
          }
        }
      },
      methods:{
        login(){
          if(this.validateInputs()){
            this.showError = !this.showError
            this.$router.push({name:'Home'})
            console.log(this.user);
          } else {
            this.showError = !this.showError
            return
          }
        },
        validateInputs(){
          const email = document.getElementById('email');
          const password = document.getElementById('password');

          let isValid = true;

          if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            this.error.email.error = true;
            this.error.email.errorMessage = 'Please enter a valid email address.';
            isValid = false;
          } else {
            this.error.email.error = false;
            this.error.email.errorMessage='';
          }

          if (!password.value || password.value.length < 8) {
            this.error.password.error = true;
            this.error.password.errorMessage='Password must be at least 8 characters long.';
            isValid = false;
          } else {
            this.error.password.error = false;
            this.error.password.errorMessage='';
          }
          return isValid;
        }
      },
      components:{
        Button,
        Header,
      }
    }
</script>

<template>
    <Header class="px-3" title="Login"/>
    <div class="min-h-screen flex flex-col items-center justify-center py-6 px-4">
      <div class="max-w-md w-full">
        <div class="p-8 rounded-2xl bg-white shadow">
          <h2 class="text-gray-800 text-center text-2xl font-bold">Sign in</h2>
          <form class="mt-8 space-y-4" @submit.prevent="login">
            <div>
              <label class="text-gray-800 text-sm mb-2 block">User name</label>
              <div class="relative flex items-center">
                <input name="username" v-model="user.email" type="text" id="email"
                class="w-full text-gray-800 text-sm border  px-4 py-3 rounded-md" 
                :class="showError ? 'border-red-600  outline-red-600' : 'border-gray-300  outline-blue-600' "
                placeholder="Enter user name" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                  <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                  <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                </svg>
                
              </div>
              <span v-if="error.email.error" class="text-red-600 text-[14px] ps-[1.2em]">
                {{ error.email.errorMessage }}
              </span>
            </div>

            <div>
              <label class="text-gray-800 text-sm mb-2 block">Password</label>
              <div class="relative flex items-center">
                <input name="password" v-model="user.password" type="password"  id="password"
                :class="showError ? 'border-red-600  outline-red-600' : 'border-gray-300  outline-blue-600' "
                class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter password" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                </svg>
              </div>
              <span v-if="error.password.error" class="text-red-600 text-[14px] ps-[1.2em]">
                {{ error.password.errorMessage }}
              </span>
            </div>

            <div class="flex flex-wrap items-center justify-between gap-4">
             
            </div>

            <div class="!mt-8">
              <Button title="Sign In"></Button>
            </div>
             </form>
        </div>
      </div>
    </div>
 
</template>

<style scoped>

.login-parent-container{
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-container {
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
  padding: 30px;
  text-align: center;
}


.login-container img {
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
}

.login-container input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}
.login-container input:active {

  border: 1px solid #ee0000;
}

.login-container input[type="password"] {
  position: relative;
}

.login-container input[type="password"]::placeholder {
  padding-right: 30px;
}

.login-container .password-icon {
  position: absolute;
  right: 10px;
  top: 17px;
  cursor: pointer;
  color: black;
}

.login-btn {
  background: linear-gradient(to right, #00c6ff, #0072ff);
  color: white;
  border: none;
  padding: 0px 15px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}

.link {
  color: #0072ff;
  text-decoration: none;
  font-size: 14px;
}

.link:hover {
  text-decoration: underline;
}

</style>
