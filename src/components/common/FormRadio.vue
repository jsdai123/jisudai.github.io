<template>
    <van-radio-group @change="$emit('change',$event)" v-model="currentValue" class="van-cell van-hairline">
        <div class="van-cell__title" style="max-width:90px;">
            <span>{{title}}</span>
        </div>
        <div class="van-cell__value">
            <div class="van-field__body">
                <van-radio v-for="option in options" :key="option.value" :name="option.value">{{option.label}}</van-radio>
            </div>
        </div>
    </van-radio-group>
</template>
<script>
    export default {
        model: {
            prop: "value",
            event: "change"
        },
        props: {
            value: {},
            options: {
                type: Array,
                required: true,
                default: []
            },
            title: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                currentValue: this.value
            };
        },
        methods: {
            onChange(value) {
                this.$emit("update:value", value);
            }
        }
    };
</script>

