<template>
<div id="page-admin" style="padding: 15px;">
    <v-row class="layout">
        <v-card
            height="100%"
            width="256">
            <v-navigation-drawer permanent>
            <v-list-item>
                <v-list-item-content>
                <v-list-item-title class="title">
                    {{user.username}}
                </v-list-item-title>
                <v-list-item-subtitle>
                    {{user.name}}
                </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list
                dense
                nav
            >
                <v-list-group>
                        <template v-slot:activator>
                            <v-list-item-icon><v-icon>mdi-newspaper-variant-outline</v-icon></v-list-item-icon>
                            <v-list-item-title>Quản lý bài dăng</v-list-item-title>
                        </template>
                        <v-list-item link to="/admin/news">

                            <v-list-item-icon></v-list-item-icon>
                            <v-list-item-title>Danh sách bài đăng</v-list-item-title>
                        </v-list-item>
                        <v-list-item link to="/admin/add-news">
                        <v-list-item-icon></v-list-item-icon>
                            <v-list-item-title>Đăng bài</v-list-item-title>
                        </v-list-item>
                </v-list-group>
                <v-list-item link @click="logout()"> 
                    <v-list-item-icon><v-icon>mdi-logout</v-icon></v-list-item-icon>
                    <v-list-item-title>Đăng xuất</v-list-item-title>
                </v-list-item>
            </v-list>
            </v-navigation-drawer>
        </v-card>
        <div class="main-content">
            <router-view></router-view>
        </div>
    </v-row>
    
</div>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
        right: null,
        user: {}
      }
    },
    methods: {
        logout()
        {
            this.$session.destroy()
            this.$router.push("/login")
        }
    },
    created()
    {
        if(!this.$session.has('token'))
        {
            this.$router.push('/login')
        }
        this.$http.get("https://softwaredevelopmentproject.azurewebsites.net/api_v2/user/",{
            headers: {
                Authorization: 'Bearer '+ this.$session.get('token')
            }
        }).then((response) => {
            this.user = response.data
        })
        
    }
  }
</script>

<style scoped>
#page-admin,.layout {height: 100%;}
.main-content {width: calc(100% - 256px)}
</style>