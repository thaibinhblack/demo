<template>
<div id="page-main">
    <v-toolbar>
        <router-link to="/" style="color:#333;">Website demo</router-link>
        <v-spacer></v-spacer>
        <v-btn icon @click="login()">
           <v-icon>mdi-login</v-icon>
        </v-btn>
    </v-toolbar>
    <v-container grid-list-xs>
        <v-row>
            <v-col cols="12" sm="12">
                <v-select
                    :items="topics"
                    item-text="topic"
                    item-value="id"
                    v-model="topic"
                    label="Topic"
                ></v-select>
            </v-col>
            <v-col cols="12" sm="6" md="6" lg="4" v-for="(post,index) in news" :key="index">
                <v-card>
                    <v-card-title primary-title>
                        <v-row>
                            <v-col cols="12" sm="10">
                                <router-link :to="'/news/'+post.id">{{post.title}}</router-link>
                            </v-col>
                        </v-row>
                    </v-card-title>
                    <v-card-text id="content" >
                        <p v-html="post.content"></p>
                    </v-card-text>
                    <v-card-actions>
                        <v-row>
                            <v-col cols="12" sm="7" md="8">
                               <small>{{post.create_at}}</small>
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
            news_tmp: [],
            topics: [],
            topic: null
        }
    },
    watch: {
        topic(newVal)
        {
            this.news = this.news_tmp.filter((value,index,array) => {
                return array[index].id == newVal
            })
        }
    },
    methods: {
        ApiTopic()
        {
            this.$http.get("https://softwaredevelopmentproject.azurewebsites.net/api.v2/topics/").then((response) => {
                this.topics = response.data.results
            })
        },
        login()
        {
            this.$router.push('/login')
        }
    },
    created()
    {
        this.$http.get("https://softwaredevelopmentproject.azurewebsites.net/api.v2/news/").then((response) => {
            this.news = response.data.results
            this.news_tmp = response.data.results
        })
        this.ApiTopic()
    }
}
</script>

<style scoped>
a {color: #333;text-decoration: none}
#content {overflow: hidden;}
#content p img {width: 100%;height: auto;}
</style>