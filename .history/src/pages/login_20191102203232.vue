<template>
<div id="page-login">
    <v-card class="form-login">
        <v-card-title primary-title style="text-align: center">
            <p align="center" style="width:100%;">Đăng nhập</p>
        </v-card-title>
         <v-form @submit.prevent="login()">
        <v-card-text>
           
                <v-text-field
                    name="USERNAME"
                    label="Username"
                    placeholder="Nhập username"
                    v-model="user.username"
                    prepend-icon="mdi-account"
                    required
                ></v-text-field>
                <v-text-field
                    name="PASSWORD"
                    label="Password"
                    type="password"
                    prepend-icon="mdi-account-key"
                    required
                    v-model="user.password"
                ></v-text-field>
            
        </v-card-text>
        <v-card-actions>
            <v-btn type="submit" color="primary" >Đăng nhập</v-btn>
            {{result}}
        </v-card-actions>
        </v-form>
    </v-card>
</div>
</template>

<script>
export default {
    data()
    {
        return {
            user: {},
            result: null
        }
    },
    methods: {
        login()
        {
            this.$http.post("http://softwaredevelopmentproject.azurewebsites.net/api/user/login/",this.user).then((response) => {
               this.$session.start()
               this.$session.set('token',response.data.access)
               this.$router.push('/admin')
            }).catch(() => {
                alert('Đăng nhập thất bại!')
            })
        }
    },
    created()
    {
        if(this.$session.has('token'))
        {
            this.$router.push('/admin')
        }
    }
}
</script>

<style scoped>
.form-login {width: 500px;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);padding: 55px 10px;}
</style>