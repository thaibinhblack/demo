<template>
<div id="page-add-news">
   <v-container grid-list-xs>
        <v-row>
            <v-col cols="12" sm="12">
                <h3>Đăng bài mới</h3>
            </v-col>
            <v-col cols="12" sm="12">
                <v-card>
                    <v-form @submit.prevent="createNews()">
                        <v-card-title primary-title>
                            Form thêm bài mới
                        </v-card-title>
                        <v-card-text>
                            <v-text-field
                                name="TITLE"
                                label="Title"
                                v-model="news.title"
                                required
                            ></v-text-field>
                            <vue-editor v-model="news.content"></vue-editor>
                            <v-select
                                :items="topics"
                                v-model="news.topic"
                                item-value="id"
                                item-text="topic"
                                label="Topic"
                                required
                            ></v-select>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn type="submit"  color="primary" >Đăng bài</v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
   </v-container>
</div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
    components: {
        VueEditor
    },
    data()
    {
        return {
            news: {},
            topics: []
        }
    },
    methods:
    {
        ApiTopic()
        {
            this.$http.get("http://softwaredevelopmentproject.azurewebsites.net/api.v2/topics/").then((response) => {
                this.topics = response.data.results
            })
        },
        createNews()
        {
            this.$http.post("http://softwaredevelopmentproject.azurewebsites.net/api.v2/news/",this.news,{
                headers: {
                    Authorization: "Bearer " + this.$session.get('token')
                }
            }).then((response) => {
                alert('Đăng bài thành công')
                this.news = {}
            }).catch(() => {
                alert("Đăng bài thất bại")
            })
        }
    },
    created()
    {
        this.ApiTopic()
    }
}
</script>