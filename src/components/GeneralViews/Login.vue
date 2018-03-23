<template>
  <div class="wrapper">
    <side-bar type="sidebar" :sidebar-links="$sidebar.sidebarLinks">

    </side-bar>
    <notifications>

    </notifications>

    <div class="main-panel">
      <top-navbar></top-navbar>

	  <div class="content">
	    <div class="container">
	        <transition name="fade" mode="out-in">
			  <div class="card">
			    <div class="header">
			      <h4 class="title">{{user.title}}</h4>
			    </div>
			    <div class="content">
			      <form>
			        <div class="row">
			          <div class="col-md-12">
			            <fg-input type="text"
			                      label="Email"
			                      placeholder="email"
			                      v-model="user.email">
			            </fg-input>
			          </div>
			        </div>
			        <div class="row">
			          <div class="col-md-12">
			            <fg-input type="password"
			                      label="Password"
			                      placeholder="Password"
			                      v-model="user.password">
			            </fg-input>
			          </div>
			        </div>
			        <a href="#" class="text-danger">{{user.reset}}</a>
			        <div class="text-center">
			          <button type="submit" class="btn btn-info btn-fill btn-wd" @click.prevent="Login">
			            {{user.title}}
			          </button>
			        </div>
			        <div class="clearfix"></div>
			      </form>
			    </div>
			  </div>
	        </transition>
	    </div>
	  </div>

      <content-footer></content-footer>
    </div>
  </div>
</template>

<style lang="scss">

</style>

<script>
  import TopNavbar from '../Dashboard/Layout/TopNavbar.vue'
  import ContentFooter from '../Dashboard/Layout/ContentFooter.vue'
  import DashboardContent from '../Dashboard/Layout/Content.vue'
  export default {
    data () {
      return {
        user: {
          title: 'Login',
          email: 'hilman@pucomputing.org',
          password: 'password',
          reset: 'Lupa password'
        }
      }
    },
    methods: {
      Login () {
        alert('Your data: ' + JSON.stringify(this.user))
      }
    },
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent
    }
  }

</script>