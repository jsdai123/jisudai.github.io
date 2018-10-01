<template>
    <div class="wrap">
        <div class="formWrap">
            <van-cell-group>
                <van-field v-model="city" clearable label="所在城市" placeholder="请输入所在城市" />
                <form-radio title="居住时间" v-model="livingTime" :options="livingTimeDic"></form-radio>
                <van-field v-model="idCard" type="tel" clearable label="身份证号" placeholder="请输入身份证号" />
                <form-select-picker title="借款金额" :options="loanRangeDic" v-model="loanRange"></form-select-picker>
                <form-select-picker title="工作职业" :options="occupationDic" v-model="occupation"></form-select-picker>
                <form-radio title="名下有车" v-model="hasCar" :options="[{label:'是',value:1},{label:'否',value:0}]"></form-radio>
                <form-radio title="名下有房" v-model="hasHouse" :options="[{label:'是',value:1},{label:'否',value:0}]"></form-radio>
                <form-radio title="有社保" v-model="socialSecurity" :options="[{label:'是',value:1},{label:'否',value:0}]"></form-radio>
                <form-radio title="有信用卡" v-model="hasCreditCard" :options="[{label:'是',value:1},{label:'否',value:0}]"></form-radio>
                <form-radio title="有寿单保险" v-model="hasInsurance" :options="[{label:'是',value:1},{label:'否',value:0}]"></form-radio>
                <form-radio title="有微粒贷" v-model="littleLoan" :options="[{label:'是',value:1},{label:'否',value:0}]"></form-radio>
                <form-radio title="有公积金" v-model="accumulationFund" :options="[{label:'是',value:1},{label:'否',value:0}]"></form-radio>
            </van-cell-group>
        </div>
        <div class="submitWrap">
            <van-button type="primary" size="large" @click="submit">立即申请</van-button>
        </div>
    </div>
</template>
<script>
    import idCard from "../util/idCard.js";
    import FormRadio from "./common/FormRadio.vue";
    import FormSelectPicker from "./common/FormSelectPicker.vue";
    import _ from "lodash";
    export default {
        data() {
            return {
                city: "",
                livingTime: "01",
                idCard: "",
                livingTimeDic: [
                    { label: "半年以上", value: "01" },
                    { label: "半年以下", value: "02" }
                ],
                hasHouse: 0,
                hasCar: 0,
                hasInsurance: 0,
                hasCreditCard: 0,
                socialSecurity: 0,
                loanRange: "",
                occupation: "",
                accumulationFund: 0,
                littleLoan: 0,
                loanRangeDic: [
                    { name: "5000元以下", value: "01", start: 20, end: 50 },
                    { name: "5000元-2万元", value: "02", start: 60, end: 200 },
                    { name: "2-5万元", value: "03", start: 210, end: 500 },
                    { name: "5-10万元", value: "04", start: 510, end: 1000 },
                    { name: "20万元以上", value: "05", start: 2000, end: 3000 }
                ],
                occupationDic: [
                    { name: "私企员工", value: "01" },
                    { name: "公务员", value: "02" },
                    { name: "事业单位员工", value: "03" },
                    { name: "企业主", value: "04" },
                    { name: "个体户", value: "05" },
                    { name: "自有职业", value: "05" },
                    { name: "学生", value: "06" },
                    { name: "退休职工", value: "07" }
                ]
            };
        },
        created() {
            if (!this.$route.query.tel) {
                this.$router.replace({ path: "/home" });
            }
        },
        methods: {
            submit() {
                if (!/^[\u4e00-\u9fa5]{3,15}$/.test(this.city)) {
                    this.$toast({
                        message: "请填写您的所在城市（3-15个中文汉字）",
                        duration: 1000
                    });
                    return;
                }
                if (!idCard.isLegal(this.idCard)) {
                    this.$toast({
                        message: "请填写您真实的身份证号码",
                        duration: 1000
                    });
                    return;
                }
                if (!this.loanRange) {
                    this.$toast({ message: "请填写您的借款金额", duration: 1000 });
                    return;
                }
                this.$toast({
                    message: "处理中",
                    duration: 0,
                    type: "loading"
                });
                setTimeout(() => {
                    this.$toast.clear();
                    let loanRange = _.find(this.loanRangeDic, {
                        value: this.loanRange
                    });
                    let loanMoney = (
                        _.random(loanRange.start, loanRange.end) * 100
                    ).toFixed(2);
                    this.$router.replace({
                        path: "/result",
                        query: {
                            loanMoney,
                            tel:
                                this.$route.query.tel.substr(0, 3) +
                                "*****" +
                                this.$route.query.tel.substring(7),
                            username: this.$route.query.username[0] + "**",
                            idCard:
                                this.idCard.substr(0, 4) +
                                "**********" +
                                this.idCard.substring(14)
                        }
                    });
                }, 2000);
            }
        },
        components: {
            FormRadio,
            FormSelectPicker
        }
    };
</script>
<style scoped>
    .wrap {
        display: flex;
        flex-direction: column;
        background-color: #ededed;
        height: 100%;
    }
    .title {
        color: #999;
        font-size: 12px;
        text-align: center;
        display: block;
        padding: 10px 0;
    }
    .formWrap {
        flex: 1;
        overflow: auto;
        padding: 2px 0;
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



