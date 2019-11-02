<template>
<div id="page-login">
    <v-card>
        <v-card-title primary-title>
            <span>Đăng nhập</span>
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field
                    name="USERNAME"
                    label="Username"
                    placeholder="Nhập username"
                    v-model="user.username"
                    required
                ></v-text-field>
                <v-text-field
                    name="PASSWORD"
                    label="Password"
                    required
                    v-model="user.password"
                ></v-text-field>
            </v-form>
        </v-card-text>
    </v-card>
</div>
</template>