<template>
    <div id="dashboard">
       <el-row>
           <el-col :span="24">
               <el-col :span="16">
                    <div class="welcome">
                        <div class="wel">Welcome</div>
                        <div class="username">{{username}}</div>
                        <div class="location">{{location}}</div>
                    </div>
               </el-col>
               <el-col :span="8">
                    <div class="inbox">
                        <div class="inbox-txt">Inbox</div>
                        <div class="inbox-num">23</div>
                    </div>
               </el-col>
           </el-col>
           <el-col :span="24">
               <el-col :span="8" style="padding-right:12.5px;">
                   <div class="chart-box" id="variations">

                   </div>
               </el-col>
               <el-col :span="8" style="padding-left:12.5px;">
                   <div class="chart-box">

                   </div>
                </el-col>
               <el-col :span="8" style="padding-left:25px;">
                   <div class="chart-box half-box" style="margin-bottom:25px;">

                   </div>
                   <div class="chart-box half-box">

                   </div>
               </el-col>
           </el-col>
       </el-row>
    </div>
</template>
<script>
import echarts from 'echarts'
export default {
    data(){
        return {
            username : "",
            location : "",
            variationsChart : "",
            netIncomeChart : "",
            salesChart : "",
            mothlySalesChart : ""
        }
    },
    methods : {
        drawVariationsChart : function(){
            this.chartColumn = echarts.init(document.getElementById('variations'));
            this.chartColumn.setOption({
                title: {
                    text: 'Income Variations',
                    textStyle : {
                        color : "#003466"
                    },
                    left : "center"
                },
                tooltip: {},
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
        },
        drawCharts() {
            this.drawVariationsChart()
        }
    },
    mounted(){
        var user = sessionStorage.getItem('user');
        if (user) {
            user = JSON.parse(user);
            this.username = user.name || '';
            this.location = user.location || '';
        }
        this.drawCharts();
    },
    updated: function () {
        this.drawCharts()
    }
}
</script>
<style>
.welcome{
    padding: 25px;
    border: 1px solid #E0998A;
    border-radius: 10px;
    background: #F3C6BD url("../assets/images/dashboard_title.png") no-repeat;
    background-position: 100% 100%;
}
.welcome .wel,
.inbox .inbox-txt{
    color: #003466;
    font-size : 30px;
    margin-bottom: 15px;
}
.welcome .username,
.inbox .inbox-num{
    color: #003466;
    font-weight: bold;
    font-size : 45px;
    margin-bottom: 67px;
}
.welcome .location{
    padding:10px;
    border-radius: 15px;
    background: #E4A598;
    color: #fff;
    display: inline-block;
}
.inbox{
    padding:25px;
    margin-left: 25px;
    border: 1px solid #EBBF8E;
    border-radius: 10px;
    height: 205px;
    background: #FCF0E3 url("../assets/images/inbox_img.png") no-repeat;
    background-position: 100% 100%;
}
.chart-box{
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 8px 8px rgba(0,0,0,0.1);
    padding: 25px;
    margin-top: 25px;
    height: 350px;
}
.chart-box.half-box{
    height:138px
}
</style>