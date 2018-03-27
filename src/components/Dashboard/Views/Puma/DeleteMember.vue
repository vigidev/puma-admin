<template>
  <div>
      <div class="card">
          <div class="header">
              <h4 class="title">Delete Member</h4>
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
                <div class="col-md-12">
                  <p><b>Full Name: </b>-</p>
                  <p><b>Nickname: </b>-</p>
                  <p><b>Position: </b>-</p>
                  <p><b>Email: </b>-</p>
                  <p><b>Phone Number: </b>-</p>
                  <p><b>Password: </b>-</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 text-center">
                  <button type="submit" class="btn btn-danger btn-fill btn-wd">
                    Delete Member
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
