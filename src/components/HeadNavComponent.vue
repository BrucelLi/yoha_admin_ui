<template>
    <div style="background-color: #20c997">
        <Row type="flex">
            <Col class="hand" @click.native="jump('index')" style="width: 12.3rem;">
                <Row type="flex">
                    <Col :span="8">
                        <div :style="imgLogoBox"></div>
                    </Col>
                    <Col :span="16">
                        <div>{{title}}</div>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Row type="flex">
                </Row>
            </Col>
            <Col style="width: 15rem; padding: 0 2rem 0 0">
                <Row type="flex" style="text-align: center">
                    <Col :span="8">
                        <Dropdown>
                            <span class="hand" title="个人信息">
                                <i class="iconfont icon-gerenxinxiyebanzhurenlaoshi"></i>
                            </span>
                            <DropdownMenu style="padding: 10px;" slot="dropdown">
                                <div style="padding: 5px;">
                                    <span style="margin-right: 5px;">姓名:</span><span
                                        style="color: #00d6b2">brucelli</span>
                                </div>
                                <div style="padding: 5px;">
                                    <span style="margin-right: 5px;">手机号:</span><span
                                        style="color: #00d6b2">18608024196</span>
                                </div>
                                <div style="padding: 5px;">
                                    <span style="margin-right: 5px;">角色:</span><span style="color: #00d6b2">超管</span>
                                </div>
                                <div style="padding: 5px;">
                                    <span style="margin-right: 5px;">登录时间:</span><span style="color: #00d6b2">2018-02-20 21:03:20</span>
                                </div>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>

                    <Col :span="8">
                       <i v-on:click="jump('edit')" title="修改用户信息" class="iconfont icon-xiugaiziliao hand"></i>
                    </Col>
                    <Col :span="8">
                        <i v-on:click="loginOut" title="退出登录" class="iconfont icon-iconfontguanji hand"></i>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
</template>

<script>
    import {Row, Col, Dropdown, DropdownMenu, DropdownItem} from 'element-ui';

    export default {
        name: "HeadNavComponent",
        components: {
            Row, Col, Dropdown, DropdownMenu, DropdownItem
        },
        data() {
            return {
                title: 'yoha管理',
                imgLogoBox: {},
                imgLog: 'http://yoha-admin.test/img/yoha.png',
            }
        },
        mounted() {
            // 加载初始数据
            this.title = this.$config.webTitle;
            this.imgLogoBox = {
                width: "100%",
                height: "100%",
                backgroundImage: "url(" + this.imgLog + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            };
        },
        methods: {
            loginOut() {
                this.$http.post('logout').then(r => {
                    if (r.code === 0) {
                        this.$router.push({name:'login'})
                    }
                });
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "../assets/css/common.styl"
</style>