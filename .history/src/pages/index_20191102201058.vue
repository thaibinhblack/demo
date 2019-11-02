<template>
<div id="page-main">
    <v-container grid-list-xs>
        <v-row>
            <v-col cols="12" sm="6" md="4" lg="3" v-for="(post,index) in news" :key="index">
                <v-card>
                    <v-card-title primary-title>
                        <v-row>
                            <v-col cols="12" sm="10">
                                <router-link :to="'/news/'+post.id">{{post.title}}</router-link>
                            </v-col>
                            <v-col cols="12" sm="2">
                                <button @click="deleteNews(post.id)"><v-icon>mdi-delete</v-icon></button>
                            </v-col>
                        </v-row>
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
            this.news = response.data.results
        })
    }
}
</script>