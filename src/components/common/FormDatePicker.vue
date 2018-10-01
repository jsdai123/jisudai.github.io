<template>
    <div class="van-hairline--bottom">
        <van-cell @click="showDatePicker=true" :title="title" is-link :value="value || '请选择'">
        </van-cell>
        <van-popup v-model="showDatePicker" position="bottom">
            <van-datetime-picker @confirm="confirm" @cancel="showDatePicker=false" :min-date="new Date(1970, 0, 1)" type="date" :max-date="new Date()" />
        </van-popup>
    </div>

</template>
<script>
    import moment from "moment";
    export default {
        name: "FormDatePicker",
        model: {
            prop: "value",
            event: "change"
        },
        props: {
            value: {
                required: true
            },
            title: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                showDatePicker: false
            };
        },
        methods: {
            confirm(value) {
                this.$emit("change", moment(value).format("YYYY-MM-DD"));
                this.showDatePicker = false;
            }
        }
    };
</script>

