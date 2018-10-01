<template>
    <div class="wrap">
        <img src="../../static/images/portal.jpg" style="width:100%;">
        <van-cell-group>
            <van-field v-model="username" clearable label="您的姓名" placeholder="请输入中文姓名" />
            <van-field v-model="tel" type="tel" label="您的手机" placeholder="请输入手机号" />
            <form-date-picker title="出生日期" v-model="birthday"></form-date-picker>
            <form-radio title="您的性别" v-model="sex" :options="sexDic"></form-radio>
        </van-cell-group>
        <div class="submitWrap">
            <van-button type="primary" size="large" @click="next">下一步</van-button>
            <p style="margin-top:10px;">平台郑重承诺：</p>
            <p>所有贷款申请在未成功放款前绝不收取任何费用，为保障您的资金安全，请不要相信任何要求您支付的信息。</p>
        </div>
    </div>
</template>
<script>
    import FormDatePicker from "./common/FormDatePicker.vue";
    import FormRadio from "./common/FormRadio.vue";
    import { isTelephone } from "../util/validate.js";
    export default {
        data() {
            return {
                username: "",
                birthday: "",
                tel: "",
                value: "",
                sex: "",
                sexDic: [
                    { label: "男", value: "01" },
                    { label: "女", value: "02" }
                ],
                showDatePicker: false
            };
        },
        methods: {
            next() {
                if (!/^[\u4e00-\u9fa5]{2,4}$/.test(this.username)) {
                    this.$toast({
                        message: "请填写您的真实姓名，汉字且2到4个字",
                        duration: 1000
                    });
                    return;
                }
                if (!isTelephone(this.tel)) {
                    this.$toast({
                        message: "请填写正确的手机号码",
                        duration: 1000
                    });
                    return;
                }
                if (!this.birthday) {
                    this.$toast({ message: "请填写您的生日", duration: 1000 });
                    return;
                }
                this.$toast({
                    message: "处理中",
                    duration: 0,
                    type: "loading"
                });
                setTimeout(() => {
                    this.$toast.clear();
                    this.$router.replace({
                        path: "/complete",
                        query: {
                            username: this.username,
                            tel: this.tel
                        }
                    });
                }, 1000);
            }
        },
        components: {
            FormDatePicker,
            FormRadio
        }
    };
</script>
<style scoped>
    .wrap {
        height: 100%;
        background-color: #ededed;
    }
    .submitWrap {
        margin-top: 10px;
        background-color: #fff;
        padding: 10px;
        font-size: 12px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        color: #999;
    }
</style>


