<template>

    <div class="vue-tempalte">
     <section class="vh-100 gradient-custom">
      <div class="container py-5 h-100">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-12 col-lg-9 col-xl-7">
            <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
              <div class="card-body p-4 p-md-5">
                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Edit Profile</h3>
                <form>
                 <div class="row">
                    <div class="col-md-6 mb-4">
    
                      <div class="form-outline">
                        <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">User Name {{ this.userName }}</h3>
                        <!-- <input type="text"  value="esraa23" id="username" class="form-control form-control-lg" /> -->
                        
                      </div>
                      
                    </div>
                    <div class="col-md-6 mb-4 pb-2">
    
                      <div class="form-outline">
                        <label class="fs-5">Email:   {{ this.user.email }}</label><br/>
                        <!-- <input type="email" value="esraaa@gmail.com" id="emailAddress" class="form-control form-control-lg" /> -->
                        
                      </div>
    
                    </div>
                    </div>
    
                  <div class="row">
                    <div class="col-md-6 mb-4">
    
                      <div class="form-outline">
                      <label class="form-label" for="firstName">First Name</label>
                        <input type="text" v-model="user.firstname" id="firstName" class="form-control form-control-lg" />
                        
                      </div>
    
                    </div>
                    <div class="col-md-6 mb-4">
    
                      <div class="form-outline">
                      <label class="form-label" for="lastName">Last Name</label>
                        <input type="text"  v-model="user.lastname" id="lastName" class="form-control form-control-lg" />
                        
                      </div>
    
                    </div>
                  </div>
    
                  <div class="row">
                    <div class="col-md-6 mb-4 d-flex align-items-center">
    
                      <div class="form-outline datepicker w-100">
                        <label for="birthdayDate" class="form-label">Birthday</label>
                        <input type="date" v-model="user.birthday" class="form-control form-control-lg" id="birthdayDate" />
                      
                      </div>
    
                    </div>
                    <div class="col-md-6 mb-4">
    
                      <h6 class="mb-2 pb-1">Gender </h6>
    
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                          value="F" checked v-model="user.gender"/>
                        <label class="form-check-label" for="femaleGender">Female</label>
                      </div>
    
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                          value="M" v-model="user.gender"/>
                        <label class="form-check-label" for="maleGender">Male</label>
                      </div>     
    
                    </div>
                  </div>
    
                  <div class="row">
                    
                    <div class="col-md-6 mb-4 pb-2">
    
                      <div class="form-outline">
                       <label class="form-label" for="Password">Password</label>
                        <input type="password" v-model="user.password" id="Password" class="form-control form-control-lg" />
                        
                      </div>
    
                    </div>
                   <div class="col-md-6 mb-4 pb-2">
    
                      <div class="form-outline">
                       <label class="form-label" for="nationality">Nationality</label>
                       <div class="form-group">
        
        <select v-model="user.nationality" class="form-control form-control-lg" name="nationality">
            <option value="AFGHAN">AFGHAN</option>
            <option value="ALBANIAN">ALBANIAN</option>
            <option value="ALGERIAN">ALGERIAN</option>
            <option value="AMERICAN">AMERICAN</option>
            <option value="ANDORRAN">ANDORRAN</option>
            <option value="ANGOLAN">ANGOLAN</option>
            <option value="ANTIGUANS">ANTIGUANS</option>
            <option value="ARGENTINEAN">ARGENTINEAN</option>
            <option value="ARMENIAN">ARMENIAN</option>
            <option value="AUSTRALIAN">AUSTRALIAN</option>
            <option value="AUSTRIAN">AUSTRIAN</option>
            <option value="AZERBAIJANI">AZERBAIJANI</option>
            <option value="BAHAMIAN">BAHAMIAN</option>
            <option value="BAHRAINI">BAHRAINI</option>
            <option value="BANGLADESHI">BANGLADESHI</option>
            <option value="BARBADIAN">BARBADIAN</option>
            <option value="BARBUDANS">BARBUDANS</option>
            <option value="BATSWANA">BATSWANA</option>
            <option value="BELARUSIAN">BELARUSIAN</option>
            <option value="BELGIAN">BELGIAN</option>
            <option value="BELIZEAN">BELIZEAN</option>
            <option value="BENINESE">BENINESE</option>
            <option value="BHUTANESE">BHUTANESE</option>
            <option value="BOLIVIAN">BOLIVIAN</option>
            <option value="BOSNIAN">BOSNIAN</option>
            <option value="BRAZILIAN">BRAZILIAN</option>
            <option value="BRITISH">BRITISH</option>
            <option value="BRUNEIAN">BRUNEIAN</option>
            <option value="BULGARIAN">BULGARIAN</option>
            <option value="BURKINABE">BURKINABE</option>
            <option value="BURMESE">BURMESE</option>
            <option value="BURUNDIAN">BURUNDIAN</option>
            <option value="CAMBODIAN">CAMBODIAN</option>
            <option value="CAMEROONIAN">CAMEROONIAN</option>
            <option value="CANADIAN">CANADIAN</option>
            <option value="CAPE VERDEAN">CAPE VERDEAN</option>
            <option value="CENTRAL AFRICAN">CENTRAL AFRICAN</option>
            <option value="CHADIAN">CHADIAN</option>
            <option value="CHILEAN">CHILEAN</option>
            <option value="CHINESE">CHINESE</option>
            <option value="COLOMBIAN">COLOMBIAN</option>
            <option value="COMORAN">COMORAN</option>
            <option value="CONGOLESE">CONGOLESE</option>
            <option value="COSTA RICAN">COSTA RICAN</option>
            <option value="CROATIAN">CROATIAN</option>
            <option value="CUBAN">CUBAN</option>
            <option value="CYPRIOT">CYPRIOT</option>
            <option value="CZECH">CZECH</option>
            <option value="DANISH">DANISH</option>
            <option value="DJIBOUTI">DJIBOUTI</option>
            <option value="DOMINICAN">DOMINICAN</option>
            <option value="DUTCH">DUTCH</option>
            <option value="EAST TIMORESE">EAST TIMORESE</option>
            <option value="ECUADOREAN">ECUADOREAN</option>
            <option value="EGYPTIAN">EGYPTIAN</option>
            <option value="EMIRIAN">EMIRIAN</option>
            <option value="EQUATORIAL GUINEAN">EQUATORIAL GUINEAN
            </option>
            <option value="ERITREAN">ERITREAN</option>
            <option value="ESTONIAN">ESTONIAN</option>
            <option value="ETHIOPIAN">ETHIOPIAN</option>
            <option value="FIJIAN">FIJIAN</option>
            <option value="FILIPINO">FILIPINO</option>
            <option value="FINNISH">FINNISH</option>
            <option value="FRENCH">FRENCH</option>
            <option value="GABONESE">GABONESE</option>
            <option value="GAMBIAN">GAMBIAN</option>
            <option value="GEORGIAN">GEORGIAN</option>
            <option value="GERMAN">GERMAN</option>
            <option value="GHANAIAN">GHANAIAN</option>
            <option value="GREEK">GREEK</option>
            <option value="GRENADIAN">GRENADIAN</option>
            <option value="GUATEMALAN">GUATEMALAN</option>
            <option value="GUINEA-BISSAUAN">GUINEA-BISSAUAN</option>
            <option value="GUINEAN">GUINEAN</option>
            <option value="GUYANESE">GUYANESE</option>
            <option value="HAITIAN">HAITIAN</option>
            <option value="HERZEGOVINIAN">HERZEGOVINIAN</option>
            <option value="HONDURAN">HONDURAN</option>
            <option value="HUNGARIAN">HUNGARIAN</option>
            <option value="ICELANDER">ICELANDER</option>
            <option value="INDIAN">INDIAN</option>
            <option value="INDONESIAN">INDONESIAN</option>
            <option value="IRANIAN">IRANIAN</option>
            <option value="IRAQI">IRAQI</option>
            <option value="IRISH">IRISH</option>
            <option value="ISRAESLI">ISRAELI</option>
            <option value="ITALIAN">ITALIAN</option>
            <option value="IVORIAN">IVORIAN</option>
            <option value="JAMAICAN">JAMAICAN</option>
            <option value="JAPANESE">JAPANESE</option>
            <option value="JORDANIAN">JORDANIAN</option>
            <option value="KAZAKHSTANI">KAZAKHSTANI</option>
            <option value="KENYAN">KENYAN</option>
            <option value="KITTIAN AND NEVISIAN">KITTIAN AND NEVISIAN
            </option>
            <option value="KUWAITI">KUWAITI</option>
            <option value="KYRGYZ">KYRGYZ</option>
            <option value="LAOTIAN">LAOTIAN</option>
            <option value="LATVIAN">LATVIAN</option>
            <option value="LEBANESE">LEBANESE</option>
            <option value="LIBERIAN">LIBERIAN</option>
            <option value="LIBYAN">LIBYAN</option>
            <option value="LIECHTENSTEINER">LIECHTENSTEINER</option>
            <option value="LITHUANIAN">LITHUANIAN</option>
            <option value="LUXEMBOURGER">LUXEMBOURGER</option>
            <option value="MACEDONIAN">MACEDONIAN</option>
            <option value="MALAGASY">MALAGASY</option>
            <option value="MALAWIAN">MALAWIAN</option>
            <option value="MALAYSIAN">MALAYSIAN</option>
            <option value="MALDIVAN">MALDIVAN</option>
            <option value="MALIAN">MALIAN</option>
            <option value="MALTESE">MALTESE</option>
            <option value="MARSHALLESE">MARSHALLESE</option>
            <option value="MAURITANIAN">MAURITANIAN</option>
            <option value="MAURITIAN">MAURITIAN</option>
            <option value="MEXICAN">MEXICAN</option>
            <option value="MICRONESIAN">MICRONESIAN</option>
            <option value="MOLDOVAN">MOLDOVAN</option>
            <option value="MONACAN">MONACAN</option>
            <option value="MONGOLIAN">MONGOLIAN</option>
            <option value="MOROCCAN">MOROCCAN</option>
            <option value="MOSOTHO">MOSOTHO</option>
            <option value="MOTSWANA">MOTSWANA</option>
            <option value="MOZAMBICAN">MOZAMBICAN</option>
            <option value="NAMIBIAN">NAMIBIAN</option>
            <option value="NAURUAN">NAURUAN</option>
            <option value="NEPALESE">NEPALESE</option>
            <option value="NEW ZEALANDER">NEW ZEALANDER</option>
            <option value="NI-VANUATU">NI-VANUATU</option>
            <option value="NICARAGUAN">NICARAGUAN</option>
            <option value="NIGERIEN">NIGERIEN</option>
            <option value="NORTH KOREAN">NORTH KOREAN</option>
            <option value="NORTHERN IRISH">NORTHERN IRISH</option>
            <option value="NORWEGIAN">NORWEGIAN</option>
            <option value="OMANI">OMANI</option>
            <option value="PAKISTANI">PAKISTANI</option>
            <option value="PALAUAN">PALAUAN</option>
            <option value="PANAMANIAN">PANAMANIAN</option>
            <option value="PAPUA NEW GUINEAN">PAPUA NEW GUINEAN</option>
            <option value="PARAGUAYAN">PARAGUAYAN</option>
            <option value="PERUVIAN">PERUVIAN</option>
            <option value="POLISH">POLISH</option>
            <option value="PORTUGUESE">PORTUGUESE</option>
            <option value="QATARI">QATARI</option>
            <option value="ROMANIAN">ROMANIAN</option>
            <option value="RUSSIAN">RUSSIAN</option>
            <option value="RWANDAN">RWANDAN</option>
            <option value="SAINT LUCIAN">SAINT LUCIAN</option>
            <option value="SALVADORAN">SALVADORAN</option>
            <option value="SAMOAN">SAMOAN</option>
            <option value="SAN MARINESE">SAN MARINESE</option>
            <option value="SAO TOMEAN">SAO TOMEAN</option>
            <option value="SAUDI">SAUDI</option>
            <option value="SCOTTISH">SCOTTISH</option>
            <option value="SENEGALESE">SENEGALESE</option>
            <option value="SERBIAN">SERBIAN</option>
            <option value="SEYCHELLOIS">SEYCHELLOIS</option>
            <option value="SIERRA LEONEAN">SIERRA LEONEAN</option>
            <option value="SINGAPOREAN">SINGAPOREAN</option>
            <option value="SLOVAKIAN">SLOVAKIAN</option>
            <option value="SLOVENIAN">SLOVENIAN</option>
            <option value="SOLOMON ISLANDER">SOLOMON ISLANDER</option>
            <option value="SOMALI">SOMALI</option>
            <option value="SOUTH AFRICAN">SOUTH AFRICAN</option>
            <option value="SOUTH KOREAN">SOUTH KOREAN</option>
            <option value="SPANISH">SPANISH</option>
            <option value="SRI LANKAN">SRI LANKAN</option>
            <option value="SUDANESE">SUDANESE</option>
            <option value="SURINAMER">SURINAMER</option>
            <option value="SWAZI">SWAZI</option>
            <option value="SWEDISH">SWEDISH</option>
            <option value="SWISS">SWISS</option>
            <option value="SYRIAN">SYRIAN</option>
            <option value="TAIWANESE">TAIWANESE</option>
            <option value="TAJIK">TAJIK</option>
            <option value="TANZANIAN">TANZANIAN</option>
            <option value="THAI">THAI</option>
            <option value="TOGOLESE">TOGOLESE</option>
            <option value="TONGAN">TONGAN</option>
            <option value="TRINIDADIAN OR TOBAGONIAN">TRINIDADIAN OR
                TOBAGONIAN</option>
            <option value="TUNISIAN">TUNISIAN</option>
            <option value="TURKISH">TURKISH</option>
            <option value="TUVALUAN">TUVALUAN</option>
            <option value="UGANDAN">UGANDAN</option>
            <option value="UKRAINIAN">UKRAINIAN</option>
            <option value="URUGUAYAN">URUGUAYAN</option>
            <option value="UZBEKISTANI">Uzbekistani</option>
            <option value="VENEZUELAN">VENEZUELAN</option>
            <option value="VIETNAMESE">VIETNAMESE</option>
            <option value="WELSH">WELSH</option>
            <option value="YEMENITE">YEMENITE</option>
            <option value="ZAMBIAN">ZAMBIAN</option>
            <option value="ZIMBABWEAN">ZIMBABWEAN</option>
        </select>
    </div>
                      </div>
                      
    
                    </div>
                   
                    
                  </div>
    
                  
                  
                  <div class="mt-4 pt-2">
                    <input  class="btn btn-primary btn-lg" type="button" @click="edit" value="Save" />
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
        import axios from 'axios';
        export default {
        
        name:'EditProfile',
        data(){
          return{
            user:{
              nationality:'',
              gender:'',
              firstname:'',
              lastname:'',
              birthday:'',
              email:'',
              password:''
            }
          }
        },

        computed:{
          userName(){
            //console.log(localStorage.getItem("username"))
            return localStorage.getItem("username");
          },
          // user(){
          //   return localStorage.getItem("user");
          // }
        },
        async created() {
          try {
          await axios
            .post("http://localhost:3000/user",{
              username:this.userName
            })
            .then((res) => {
              this.user = res.data[0];
              console.log(res.data[0]);
            });
        } catch (e) {
          console.error(e);
        }
        },
        
        methods:
        {
          async edit(){
        try {
            await axios.post("http://localhost:3000/edit_user?username="+ this.userName,{
              //username : this.username,
              gender:this.user.gender,
              firstname:this.user.firstname,
              lastname:this.user.lastname,
              birthday:this.user.birthday,
              nationality:this.user.nationality,
              password:this.user.password
            })
            .then((res) => {
                //this.wrongId=false
                console.log(res.data);
            });
            } catch (e) {
                console.error(e);
                //this.wrongId=true
            }
        },
        }
        
        }
        </script>
        
        <style>
        
        </style>