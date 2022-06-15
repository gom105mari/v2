<script>
import PeriodPicker from '../components/PeriodPicker.vue';
import KeywordBox from '../components/KeywordBox.vue';

const PERIOD_BUTTIONS = [
    { label: '1 day', value: '1' },
    { label: '3 days', value: '3' },
    { label: '1 week', value: '7' },
];

export default {
    name: 'LeftPanel',
    components: {
        PeriodPicker,
        KeywordBox,
    },
    data() {
        return {
            periodButtons: PERIOD_BUTTIONS,
            sPeriodDay: '3',
        };
    },
};
</script>

<template>
    <va-sidebar class="px-2 py-2" minimizedWidth="64px">
        <va-button-toggle class="d-flex flex-row" flat :rounded="false" v-model="sPeriodDay" :options="periodButtons" />
        <PeriodPicker id="sDate" v-bind:before="sPeriodDay" text="From" />
        <PeriodPicker id="eDate" text="To" />
        <va-divider />
        <KeywordBox />
        <va-button outline :rounded="false" class="mr-4" style="width: 100%">+</va-button>
    </va-sidebar>
</template>

<style></style>
