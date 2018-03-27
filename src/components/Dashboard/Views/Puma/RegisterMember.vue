<template>
  <div>
      <div class="card">
          <div class="header">
              <h4 class="title">Register Member</h4>
          </div>
          <div class="content">
              <form action="">
                <div class="row">
                    <div class="col-md-12">
                      <fg-input type="text"
                      label="Student ID"
                      placeholder="Student ID"
                      v-model="findId"
                      >
                      </fg-input>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <fg-input type="text"
                            label="Full Name"
                            placeholder="Full Name"
                            >
                        </fg-input>
                    </div>
                    <div class="col-md-6">
                        <fg-input type="text"
                            label="Nickame"
                            placeholder="Nickname"
                            >
                        </fg-input>
                    </div>
              </div>
              <div class="row">
                    <div class="col-md-6">
                        <fg-input type="text"
                            label="Position"
                            placeholder="ex. BOD, SA, SD, COMM"
                            >
                        </fg-input>
                    </div>
                    <div class="col-md-6">
                        <fg-input type="text"
                            label="Email"
                            placeholder="Email"
                            >
                        </fg-input>
                    </div>
              </div>
              <div class="row">
                    <div class="col-md-6">
                        <fg-input type="password"
                            label="Password"
                            placeholder="Password"
                            >
                        </fg-input>
                    </div>
                    <div class="col-md-6">
                        <fg-input type="password"
                            label="Re-enter Password"
                            placeholder="Password"
                            >
                        </fg-input>
                    </div>
              </div>
              
              <div class="row">
                <div class="col-md-12 text-center">
                  <button type="submit" class="btn btn-success btn-fill btn-wd">
                    Register Member
                  </button>
                </div>
              </div>
              </form>
          </div>
          <!-- End of Content -->
      </div>
      <!-- End of Card -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      findId: ''
    }
  }
}
</script>

<style>

</style>
