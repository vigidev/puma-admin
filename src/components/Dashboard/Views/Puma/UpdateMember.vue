<template>
  <div>
      <div class="card">
          <div class="header">
            <h4 class="title">Edit Profile</h4>
          </div>
          <div class="content">
            <form action="">
              <div class="row">
                <div class="col-md-12">
                  <fg-input type="text"
                      label="Student ID"
                      placeholder="Paper dashboard"
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
                  <button type="submit" class="btn btn-info btn-fill btn-wd">
                    Update Member
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
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

<style lang="scss" scoped>

</style>
