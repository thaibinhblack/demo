<template>
<div id="page-news">
    <v-container grid-list-xs>
        <v-toolbar color="primary">
            
        </v-toolbar>
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
            this.$http.get("http://softwaredevelopmentproject.azurewebsites.net/api.v2/news/"+this.$route.params.id+'/').then((response) => {
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