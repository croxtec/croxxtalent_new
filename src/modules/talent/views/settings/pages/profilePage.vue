<template>
  <div class="settings-container ">
    <h3 class="settings-header">Profile Settings</h3>
        <div>    
            <div class="user-img">
                <img src=""/>
            </div>
            <p class="text-center">Upload A Profile Picture</p>
        </div>
                <div class="input-container">
            <div class="input-group mt-5">  

                    <div class="search">
                        <label class="input-lable">First Name<span class="red-star">*</span></label>
                        <input type="search" placeholder="Enter your first name" />
                    </div>
                    <div class="search">
                        <label class="input-lable">Last Name<span class="red-star">*</span></label>
                        <input type="search" placeholder="Enter your last name" />
                    </div>
            </div>
            <div class="search">
            <label class="input-lable">Email Address<span class="red-star">*</span></label>
            <input type="search" placeholder="Campaign Title" />
        </div>
        <div class="search">
            <label class="input-lable">Phone Number<span class="red-star">*</span></label>
            <input type="search" placeholder="Enter phone number" />
        </div>
      </div>
          <button
            class="primary--button mt-5 p-3 px-5 d-flex align-items-center mx-auto"
            style="gap: 10px"
          >
            <span>Save Changes</span>
          </button>

      </div>
</template>

<script>
export default {

}
</script>

<style>

</style>