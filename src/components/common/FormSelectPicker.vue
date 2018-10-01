
<template>
    <div class="van-hairline--bottom">
        <van-cell @click="showPicker=true" :title="title" is-link :value="selectedLabel || '请选择' ">
        </van-cell>
        <van-actionsheet :actions="options" @select="onSelect" v-model="showPicker">
        </van-actionsheet>
    </div>
</template>
<script>
    export default {
        name: "FormSelectPicker",
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
            },
            options: {
                type: Array,
                required: true,
                default: []
            }
        },
        data() {
            return {
                showPicker: false,
                selectedLabel: ""
            };
        },
        computed: {
            // showLabel() {
            //     return this.options[0].values[this.value];
            // }
        },
        methods: {
            onSelect(item) {
                this.selectedLabel = item.name;
                this.$emit("change", item.value);
                this.showPicker = false;
            }
        }
    };
</script>

