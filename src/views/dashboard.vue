<template>
    <div id="dashboard">
       <el-row>
           <el-col :span="24">
               <el-col :span="16">
                    <div class="welcome">
                        <div>Welcome</div>
                        <div>{{username}}</div>
                        <div class="location">{{location}}</div>
                    </div>
               </el-col>
               <el-col :span="8">

               </el-col>
           </el-col>
       </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return {
            username : "",
            location : ""
        }
    },
    mounted(){
        var user = sessionStorage.getItem('user');
        if (user) {
            user = JSON.parse(user);
            this.username = user.name || '';
            this.location = user.location || '';
        }
    }
}
</script>
<style>
.welcome{
    padding: 25px;
    background: #F3C6BD;
    border: 1px solid #E0998A;
    border-radius: 10px;
}
</style>