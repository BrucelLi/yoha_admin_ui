<template>
    <div>
        <container direction="vertical" style="width: 100%; height: 100%;">
            <header class="home_head_box">
                <head-nav></head-nav>
            </header>
            <container class="home_content_box">
                <aside class="home_content_aside_box no_scroll">
                    <aside-nav style="height: 1000rem"></aside-nav>
                </aside>
                <main class="home_content_main_box">
                    <router-view></router-view>
                </main>
            </container>
            <footer class="home_foot_box">
                <foot-nav></foot-nav>
            </footer>
        </container>
    </div>
</template>

<script>
    import {Container, Aside, Main, Header, Footer} from 'element-ui';
    import HeadNav from '../../components/HeadNavComponent';
    import FootNav from '../../components/FootNavComponent';
    import AsideNav from '../../components/AsideNavComponent';

    export default {
        name: "Home",
        components: {
            HeadNav,
            FootNav,
            AsideNav,
            Container,
            Aside,
            Main,
            Header,
            Footer
        },
    }
</script>

<style scoped lang="stylus">
    .home_head_box
        height 3rem
        width 100%
        line-height 3rem
        position absolute
        top 0

    .home_content_box
        width 100%
        position absolute
        top 3rem
        bottom 3rem

    .home_content_aside_box
        width 10rem
        height 100%

    .home_content_main_box
        padding 20px

    .home_foot_box
        height 3rem
        width 100%
        line-height 3rem
        position absolute
        bottom 0

</style>