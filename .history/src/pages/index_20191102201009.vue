<template>
<div id="page-main">
    <v-container grid-list-xs>
        <v-row>
            <v-col cols="12" sm="6" md="4" lg="3">
                <v-card>
                    <v-card-title primary-title>
                        title
                    </v-card-title>
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