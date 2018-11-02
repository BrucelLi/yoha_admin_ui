<template>
    <div>
        <Row type="flex">
            <Col style="width: 12.3rem;">
                <Row type="flex">
                    <Col :span="8">
                        <div>图片</div>
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
                                    <span style="margin-right: 5px;">姓名:</span><span style="color: #00d6b2">brucelli</span>
                                </div>
                                <div style="padding: 5px;">
                                    <span style="margin-right: 5px;">手机号:</span><span style="color: #00d6b2">18608024196</span>
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

                    <Col :span="8"><router-link title="修改用户信息" :to="{name:'', params:{}}"><i class="iconfont icon-xiugaiziliao"></i></router-link></Col>
                    <Col :span="8"><i v-on:click="jump('reg')" title="退出登录" class="iconfont icon-iconfontguanji hand"></i></Col>
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
                title: 'yoha管理'
            }
        },
        mounted() {
            // 加载初始数据
            this.title = this.$config.webTitle
        },
        methods: {
            loginOut() {
                console.info('loginOut');
                //this.$http.post().then(r => this.info = r.data.name);
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "../assets/css/common.styl"

</style>