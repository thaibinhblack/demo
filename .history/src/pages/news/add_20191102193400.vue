<template>
<div id="page-add-news">
   <v-container grid-list-xs>
        <v-row>
            <v-col cols="12" sm="12">
                <h3>Đăng bài mới</h3>
            </v-col>
            <v-col cols="12" sm="12">
                <v-card>
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
                    </v-card-text>
                    <v-select
                        :items="topics"
                        v-model="news.topic"
                        label="Topic"
                    ></v-select>
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
            news: {}
        }
    }
}
</script>