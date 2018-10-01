<template>
    <div style="background-color: #fff;height:100%;">
        <div class="wrap">
            <div class="resultWrap">
                <van-icon name="success" class="resultIcon" />
                <span style="font-size:25px;margin-bottom:10px;">恭喜，申请成功！</span>
                <!-- <span>您申请的额度：
                    <span style="color:red;font-size:20px;">{{$route.query.loanRange}}</span>
                </span>
                <span>客服将在1个工作日内联系您</span> -->
            </div>
        </div>
        <ul class="infoWrap">
            <li class="hasStatus">
                <span>您的信用等级报告</span>
                <span style="color:#638C36;">优秀</span>
            </li>
            <li>姓名：{{$route.query.username}}</li>
            <li class="hasStatus">
                <span>手机：{{$route.query.tel}} </span>
                <span style="color:#fff;background-color:#638C36;padding:5px;border-radius:3px;">正常</span>
            </li>
            <li class="hasStatus">
                <span>身份证号码：{{$route.query.idCard}}</span>
                <span style="color:#fff;background-color:#638C36;padding:5px;border-radius:3px;">正常</span>
            </li>
            <li>身份证命中法院被执行人名单：否</li>
            <li>身份证命中网上在逃人员黑名单：否</li>
            <li>手机号命中运营商黑名单：否</li>
        </ul>
        <div class="infoWrap" style="margin-top:10px;">
            <div class="hasStatus">
                <span>匹配结果</span>
                <span style="color:#638C36;">通过</span>
            </div>
            <p style="margin-top:10px;">根据您提交的资料，大数据综合评测结果，您的个人下款额度为：</p>
            <p class="loanResult">{{$route.query.loanMoney}} 元</p>
        </div>
        <!-- <div class="submitWrap">
            <van-button type="danger" @click="next" size="large">去拿钱</van-button>
        </div> -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loanMoney: 0
            };
        },
        created() {
            if (!this.$route.query.loanMoney) {
                this.$router.replace({ path: "/home" });
            }
        },
        methods: {
            next() {
                this.$toast({
                    message: "处理中",
                    duration: 0,
                    type: "loading"
                });
                setTimeout(() => {
                    this.$toast.clear();
                    this.$router.push({
                        path: "take_money",
                        query: {
                            loanMoney: this.$route.query.loanMoney
                        }
                    });
                }, 1500);
            }
        }
    };
</script>

<style scoped>
    .wrap {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
    }
    .resultWrap {
        flex-direction: column;
        align-items: center;
        display: flex;
        padding: 30px 0;
        width: 100%;
    }
    .resultIcon {
        color: #fff;
        background-color: #38f;
        font-size: 3rem;
        padding: 1rem;
        border-radius: 50%;
        margin-bottom: 20px;
    }
    .infoWrap {
        padding: 10px;
        background-color: #ddd;
        margin: 0 3px;
        font-size: 12px;
        color: #333;
    }
    .infoWrap li {
        margin: 4px 0;
    }
    .hasStatus {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .loanResult {
        margin-top: 10px;
        color: red;
        font-size: 20px;
        text-align: center;
    }
    .submitWrap {
        margin-top: 15px;
        padding: 0 15px;
    }
</style>
