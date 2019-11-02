<template>
<div id="page-list-news">
    <v-container grid-list-xs>
        <v-row>
            <v-col cols="12" sm="12">Danh sách bài đăng</v-col>
            <v-col cols="12" sm="6" md="4" lg="3" v-for="(post,index) in news" :key="index">
                <v-card>
                    <v-card-title primary-title>
                        {{post.title}} - {{post.topic}}
                    </v-card-title>
                    <v-card-text v-html="post.content">
                        
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
            news: []
        }
    },
    created()
    {
        this.$http.get("http://softwaredevelopmentproject.azurewebsites.net/api.v2/news/").then((response) => {
            this.news = response.data
        })
    }
}
</script>