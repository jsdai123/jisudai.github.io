<template>
    <div class="wrap" ref="wrap">
        <p style="padding-bottom:5px;">
            我的下款金额：
            <span class="loanResult">{{$route.query.loanMoney}} 元</span>
        </p>
        <img width="100%" src="../../static/images/advertise.jpg">
        <div style="margin-top:5px;text-align:center;">
            <van-checkbox label-disabled v-model="agree">
                同意
                <a @click="viewDetail">《极速贷服务合同》</a>&nbsp;
            </van-checkbox>
        </div>
        <div class="submitWrap">
            <van-button type="danger" @click="next" size="large">去拿钱</van-button>
        </div>
        <van-dialog style="width:95%;" closeOnClickOverlay :showConfirmButton="false" v-model="showContract">
            <iframe :style="{width:'100%',height:height + 'px'}" src="./hetong.html"></iframe>
        </van-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                agree: true,
                showContract: false,
                height: 0
            };
        },
        created() {
            if (!this.$route.query.loanMoney) {
                this.$router.replace({ path: "/home" });
            }
        },
        mounted() {
            this.height = this.$refs.wrap.clientHeight * 0.8;
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
                        path: "pay",
                        query: {
                            flag: true
                        }
                    });
                }, 1500);
            },
            viewDetail() {
                this.showContract = true;
            }
        }
    };
</script>
<style scoped>
    .wrap {
        background-color: #fff;
        height: 100%;
        width: 100%;
        padding-top: 10px;
    }
    .loanResult {
        margin-top: 10px;
        color: red;
        font-size: 16px;
        text-align: center;
    }
    a {
        text-decoration: underline;
        font-size: 14px;
    }
    .submitWrap {
        margin: 10px 0;
        padding: 0 15px;
    }
</style>


