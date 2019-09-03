<template>
    <div>
        <el-row class="container">
            <el-col :span="24" class="header">
                <el-col :span="10" class="10">
                    <img src="/static/logo.png" alt="logo">
                </el-col>
                <el-col :span="14" class="user-icon">
                    <img :src="this.sysUserAvatar"/>
                    <i class="el-icon-bell"></i>
                    <i class="el-icon-search"></i>
                </el-col>
            </el-col>
                
            <el-col :span="24" class="content-wrapper">
                <el-col :span="4">
                    <div class="menu-title":style="{backgroundImage: 'url(' + bg + ')' }">
                        Create New
                    </div>
                    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleSelect" router>
                        <template v-for="(item,index) in $router.options.routes" v-if="index < 3">
                           <el-menu-item  :index="item.children[0].path"><i :class="item.icon"></i>{{item.children[0].name}}</el-menu-item>
                        </template>
                    </el-menu>
                    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleSelect" router>
                        <template v-for="(item,index) in $router.options.routes" v-if="index >= 3">
                            <el-menu-item :index="item.children[0].path"><i :class="item.icon"></i>{{item.children[0].name}}</el-menu-item>
                        </template>
                    </el-menu>
                </el-col>
                <el-col :span="20" class="content-container">
                    <transition name="fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </el-col>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { requestLogin } from "../api/api"
import Bg from '../assets/images/menu_title.png'
export default {
    data(){
        return{
            sysUserAvatar : "",
            bg : Bg
        }
    },
    methods : {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
    },
    mounted(){
        var user = {
            username: 'admin',
            password: '123456'
        }
        var loginParams = { username: user.username, password: user.password };
        requestLogin(loginParams).then(data => {
            let { msg, code, user } = data;
            if (code !== 200) {
                this.$message({
                message: msg,
                type: 'error'
                });
            } else {
                sessionStorage.setItem('user', JSON.stringify(user));
                this.sysUserAvatar = user.avatar;
                this.$router.push('/dashboard');
            }
        });

    }
}
</script>
<style scoped>
    .header{
        height: 80px;
        background: #fff;
        padding: 25px;
    }
    .header .user-icon{
        font-size: 25px;
    }
    .header .user-icon i,
    .header .user-icon img{
        float: right;
        margin-left: 25px;
    }
    .header .user-icon i{
        position: relative;
        top: 8px;
        color: #8A8D9A;
    }
    .header .user-icon img{
        width: 40px;
        height: 40px;
        border-radius: 40px;
    }
    .content-wrapper{
       padding: 25px;
    }
    .content-container{
       padding: 0 25px;
    }
    .content-wrapper .menu-title{
        padding: 25px;
        margin-bottom: 20px;
        border-radius: 10px;
        text-align: center;
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        background-size: 100%
    }
    .content-wrapper .el-menu-vertical-demo{
        border-radius: 10px;
        text-align: left;
        box-shadow: 0 8px 8px rgba(0,0,0,0.1);
        margin-bottom: 20px;
    }
    .el-menu-item{
        color: #ADAFB8;
    }
    .el-menu-item.is-active{
        color:#4F5467;
        font-weight: bold;
    }
</style>