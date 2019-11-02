<template>
<div id="page-news">
    <v-container grid-list-xs>
        <v-row>
            <v-card>
                <v-card-title primary-title>
                    {{news.title}}
                </v-card-title>
                <v-card-text v-html="news.content">
                    
                </v-card-text>
            </v-card>
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