<template>
  <div class="vue-tempalte">
 <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
          <div class="card-body p-4 p-md-5">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">User Name</h3>
            <Card>
                <label class="fs-5" >First Name:</label><br/>
                <label class="fs-5" >Last Name:</label><br/>

               <label class="fs-5">Email:</label><br/>
               <label class="fs-5">Birth Date : </label><br/>
               <label class="fs-5"> Gender: </label><br/>
               <label class="fs-5"> Password :</label> <br/>
               <label class="fs-5" >Nationality:</label><br/>
               <label class="fs-5" >Role:</label><br/>

                
                <div class="mt-4 pt-2">
                <input class="btn btn-primary btn-lg" type="submit" value="Edit" />
              </div> 
                
            
            </Card>
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

name:'ProfileDetails'

}
</script>

<style>

</style>