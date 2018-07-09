<template>
    <div class="ui secondary inverted pointing menu">
        <a href="/" class="active item">
            <h1>tylgur</h1>
        </a>
        <div class="right menu">
            <div v-if="isLoggedIn" class="horizontal">
                <a class="item">Galleries</a>
                <a class="item">Upload</a>
                <a class="item" @click="logout">Logout</a>
            </div>
            <a v-else href="#" class="ui item" @click="login">
                Login
            </a>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'AppHeader',
    computed: mapGetters(['isLoggedIn']),
    methods: mapActions(['login', 'logout'])
};
</script>

<style scoped>
h1 {
    color: #f2f2f2;
}

h1::first-letter {
    color: #1bb76e;
}

.horizontal {
    display: flex;
    flex-direction: row;
}

.ui.secondary.pointing.menu .item {
    color: #f2f2f2;
}

.ui.secondary.pointing.menu .active.item {
    border-color: #f2f2f2;
}

.ui.secondary.pointing.menu .active.item:hover {
    border-color: #1bb76e;
}
</style>