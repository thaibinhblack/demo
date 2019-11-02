<template>
<div id="page-admin">
     <v-card
        height="100%"
        width="256"
    >
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    {{user}}
  </v-card>
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
    created()
    {
        this.$http.get("http://softwaredevelopmentproject.azurewebsites.net/api_v2/user/",{
            headers: {
                Authentication: 'Bearer '+ this.$session.get('token')
            }
        }).then((response) => {
            this.user = response.data
        })
        this.$session.destroy()
    }
  }
</script>

<style scoped>
#page-admin {height: 100%;}
</style>