<template>
<div id="page-news">
    <v-container grid-list-xs>
        <v-row>
            <v-card>
                <v-card-title primary-title>
                    {{news.title}}
                </v-card-title>
                <v-card-text v-html="news.content">
                    
                </v-card-text>
            </v-card>
        </v-row>
    </v-container>
</div>
</template>