<template>
    <div class="wrap">
        <p>订单编号：{{orderNo}}</p>
        <p>服务费用：
            <span class="loanText">299.00 元</span>
        </p>
        <p style="color:#9c9898">
            提示：支付成功后，
            <strong>请务必截图</strong>,找原客服安排下款
        </p>
        <p style="padding-bottom:20px;">支付方式：</p>
        <span @click="changeActivePay('wechat')" :class="['payBtn',activePay === 'wechat' && 'active']">微信支付</span>
        <span @click="changeActivePay('alipay')" :class="['payBtn',activePay === 'alipay' && 'active']">通用支付</span>
        <p style="padding-top:20px;color:#9c9898;">提示：
            <strong>微信支付</strong>
            可直接长按二维码识别支付，如需
            <strong>支付宝支付</strong>
            请保存到相册，使用支付宝扫一扫进行支付。</p>
        <img width="100%" :src="`../../static/images/${activePay}_qrcode.jpg`">
    </div>
</template>
<script>
    export default {
        data() {
            return {
                activePay: "wechat",
                orderNo: new Date().getTime()
            };
        },
        created() {
            if (!this.$route.query.flag) {
                this.$router.replace({ path: "/home" });
            }
        },
        methods: {
            changeActivePay(activePay) {
                this.activePay = activePay;
            }
        }
    };
</script>
<style scoped>
    .wrap {
        background-color: #fff;
        height: 100%;
        width: 100%;
        padding: 10px 5px;
        font-size: 14px;
        color: #333;
    }
    .loanText {
        color: #f00;
        font-size: 18px;
        font-weight: bold;
    }
    p {
        margin: 5px 0;
    }
    .payBtn {
        padding: 10px 20px;
        margin-right: 10px;
        border: 1px solid #ddd;
    }
    .payBtn.active {
        border-color: #f00;
    }
</style>


