<template>
<div id="page-news">
    <v-toolbar>
        <router-link to="/" style="color:#333;">Website demo</router-link>
        <v-spacer></v-spacer>
        <v-btn icon>
            <router-link to="/login"><v-icon>mdi-login</v-icon></router-link>
        </v-btn>
    </v-toolbar>
    <v-container grid-list-xs>
        
        <v-row>
            <v-col cols="12" sm="12">
                Trang chi tiết bài đăng
            </v-col>
            <v-col cols="12" sm="12">
                <v-card>
                    <v-card-title primary-title>
                        {{news.title}}
                    </v-card-title>
                    <v-card-text v-html="news.content">
                        
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
export default {
    data()
    {
        return {
            news: {}
        }
    },
    methods: {
        getNews()
        {
            this.$http.get("https://softwaredevelopmentproject.azurewebsites.net/api.v2/news/"+this.$route.params.id+'/').then((response) => {
               this.news = response.data
            }).catch(() => {
                alert("Server lỗi")
            })
        },
    },
    created()
    {
        this.getNews()
    }
}
</script>