<template>
<div id="page-restaurant">
    <v-container grid-list-xs>
        <v-row>
            <v-col cols="12" sm="6" md="4" lg="3">
                <v-card>
                    <v-card-text>
                        <div class="img-restaurant">
                            <v-img width="100%" height="auto" :src="'https://softwaredevelopmentproject.azurewebsites.net' + restaurant.image"></v-img>
                        </div>
                        <div class="content-restaurant">
                            <h3>{{restaurant.name}}</h3>
                            <p><v-icon>mdi-map-marker</v-icon> {{restaurant.address}}</p>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>