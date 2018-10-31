<template>
    <div>
        <container>
            <head-nav></head-nav>
            <container>
                <aside width="200px"> Aside</aside>
                <container>
                    <main>
                        Main
                        <router-link :to="{ name: 'home', params: { userId: 123 }}">Home</router-link>
                        <router-link :to="{ name: 'test', params: { userId: 123 }}">test</router-link>
                        <router-link :to="{ name: 'login', params: { userId: 123 }}">login</router-link>
                    </main>
                    <foot-nav></foot-nav>
                </container>
            </container>
        </container>
    </div>
</template>

<script>
    import {Container, Aside, Main} from 'element-ui';
    import HeadNav from '../../components/HeadNavComponent';
    import FootNav from '../../components/FootNavComponent';

    export default {
        name: "Home",
        components: {
            HeadNav,
            FootNav,
            Container,
            Aside,
            Main
        },
    }
</script>

<style scoped>

</style>