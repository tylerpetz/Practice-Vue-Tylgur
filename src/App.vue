<template>
    <div>
        <AppHeader />
        <router-view></router-view>
    </div>
</template>

<script>
import AppHeader from './components/AppHeader';

export default {
    name: 'App',
    components: {
        AppHeader
    }
};
</script>

<style>
body {
    background-color: #34373c;
    color: white;
}
</style>