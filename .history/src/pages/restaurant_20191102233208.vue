<template>
<div id="page-restaurant">
    <v-container grid-list-xs>
        <v-row>
            <v-col cols="12" sm="6" md="4" lg="3" v-for="(product,index) in products" :key="index">
                <v-card>
                    <v-card-text>
                        <div class="img-restaurant">
                            <v-img width="100%" height="auto" :src="'https://softwaredevelopmentproject.azurewebsites.net' + product.image"></v-img>
                        </div>
                        <div class="content-restaurant">
                            <h3>{{product.name}}</h3>
                            <p>{{product.detail}}</p>
                            <p><strong>Giá: </strong>{{product.price}}</p>
                        </div>
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
            products: []
        }
    },
    created()
    {
        this.$http.get("https://softwaredevelopmentproject.azurewebsites.net/api/product/?restaurant="+this.$route.params.id).then((response) => {
            this.products = response.data.results
        })
    }
}
</script>

<style scoped>
a {color: #333;text-decoration: none}
#content {overflow: hidden;}
#content p img {width: 100%;height: auto;}
.content-restaurant {padding:  10px 5px;}
</style>