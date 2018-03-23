<template>
  <div id="login">
	  <div class="wrapper">
	    <div class="container">
				<div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1 ">
			  <div class="card">
			    <div class="header">
			      <h3 class="title">{{user.title}}</h3>
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
			        <div class="text-center">
			          <button type="submit" class="btn btn-info btn-fill btn-wd" @click.prevent="Login">
			            {{user.title}}
			          </button>
			        </div>
			        <div class="clearfix"></div>
			      </form>
			    <div class="forgot">
						<a href="#" class="btn btn-simple btn-danger">{{user.reset}}</a>
					</div>
			    </div>
			  </div>
				</div>
	    </div>
	  </div>
  </div>
</template>

<style lang="scss">
#login{
	background-image: url("/static/img/fotopu.jpg");
	background-size: cover;
}
.wrapper{
	background-color: rgba(0,0,0,0.5);
}
.card {
	margin-top: 20vh;
	.header {
		text-align: center;
	}
	.forgot {
		text-align: center;
		.btn {
		margin-top: 30px;
		border: 0;
		padding: 7px 18px;
		}
	}
}
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
