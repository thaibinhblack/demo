<template>
<div id="page-main">
    <v-toolbar>
        <router-link to="/" style="color:#333;">Website demo</router-link>
        <router-link to='/news' style="margin-left: 15px">Tin tức</router-link>
        <v-spacer></v-spacer>
        <v-btn icon @click="login()">
           <v-icon>mdi-login</v-icon>
        </v-btn>    
    </v-toolbar>
    <v-container grid-list-xs>
        <v-row>
            <v-col cols="12" sm="6" md="4" lg="3" v-for="(restaurant,index) in restaurants" :key="index">
                <v-card>
                    <router-link :to="'/restaurent/'+restaurant.id">
                        <v-card-text>
                            <div class="img-restaurant">
                                <v-img width="100%" height="auto" :src="'https://softwaredevelopmentproject.azurewebsites.net' + restaurant.image"></v-img>
                            </div>
                            <div class="content-restaurant">
                                <h3>{{restaurant.name}}</h3>
                                <p><v-icon>mdi-map-marker</v-icon> {{restaurant.address}}</p>
                            </div>
                        </v-card-text>
                    </router-link>
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
            topic: null,
            restaurants: []
        }
    },
    watch: {
        topic(newVal)
        {
            this.news = this.news_tmp.filter((value,index,array) => {
                return array[index].topic == newVal
            })
        }
    },
    methods: {
        ApiTopic()
        {
            this.$http.get("https://softwaredevelopmentproject.azurewebsites.net/api.v2/topics/").then((response) => {
                this.topics = response.data.results
                this.topics.push({
                    id: null,
                    topic: 'Chưa có chủ đế'
                })
            })
        },
        ApiRestaurant()
        {
            this.$http.get("https://softwaredevelopmentproject.azurewebsites.net/api/restaurant/").then((response) => {
                this.restaurants = response.data.results
            })
        },
        login()
        {
            this.$router.push('/login')
        }
    },
    created()
    {
        this.ApiRestaurant()
    }
}
</script>

<style scoped>
a {color: #333;text-decoration: none}
#content {overflow: hidden;}
#content p img {width: 100%;height: auto;}
.content-restaurant {padding:  10px 5px;}
</style>