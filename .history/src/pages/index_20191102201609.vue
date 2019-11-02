<template>
<div id="page-main">
    <v-container grid-list-xs>
        <v-row>
            <v-col cols="12" sm="6" md="6" lg="4" v-for="(post,index) in news" :key="index">
                <v-card>
                    <v-card-title primary-title>
                        <v-row>
                            <v-col cols="12" sm="10">
                                <router-link :to="'/news/'+post.id">{{post.title}}</router-link>
                            </v-col>
                        </v-row>
                    </v-card-title>
                    <v-card-text v-html="post.content">
                        
                    </v-card-text>
                    <v-card-actions>
                        <v-row>
                            <v-col cols="12" sm="7" md="8">
                               <small>{{post.created_at}}</small>
                            </v-col>
                        </v-row>
                    </v-card-actions>
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
            news: [],
            topics: []
        }
    },
    methods: {
        ApiTopic()
        {
            this.$http.get("http://softwaredevelopmentproject.azurewebsites.net/api.v2/topics/").then((response) => {
                this.topics = response.data.results
            })
        },
    },
    created()
    {
        this.$http.get("http://softwaredevelopmentproject.azurewebsites.net/api.v2/news/").then((response) => {
            this.news = response.data.results
        })
    }
}
</script>

<style scoped>
a {color: #333;text-decoration: none}
</style>