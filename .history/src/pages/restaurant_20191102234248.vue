<template>
<div id="page-restaurant">
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
            <v-col cols="12" sm="12">
                <v-select
                    :items="categorys"
                    v-model="categoryselected"
                    item-value="id"
                    item-text="name"
                    label="Danh mục"
                ></v-select>
            </v-col>
            <v-col cols="12" sm="6" md="4" lg="3" v-for="(product,index) in products" :key="index">
                <v-card>
                    <v-card-text>
                        <div class="img-restaurant">
                            <v-img width="100%" height="220px" :src="'https://softwaredevelopmentproject.azurewebsites.net' + product.image"></v-img>
                        </div>
                        <div class="content-restaurant">
                            <h3>{{product.name}}</h3>
                            <p  style="margin:0"><strong>Danh mục: </strong> <span v-for="(category,index) in product.category" :key="index">{{category.name}}, </span></p>
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
            products: [],
            categorys: [] 
        }
    },
    created()
    {
        this.$http.get("https://softwaredevelopmentproject.azurewebsites.net/api/product/?restaurant="+this.$route.params.id).then((response) => {
            this.products = response.data.results
        })
        this.$http.get("https://softwaredevelopmentproject.azurewebsites.net/api/category/").then((response) => {
            this.categorys = response.data.results
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