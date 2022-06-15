<script>
const MONTH_NAMES = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

export default {
    name: 'PeriodPicker',
    props: ['text', 'before'],

    data() {
        let date;
        if (this.before) {
            date = new Date();
            date.setDate(date.getDate() - this.before);
        } else {
            date = new Date();
        }
        return { dValue: date, tValue: date };
    },

    methods: {
        dateFormatFn(date) {
            return `${date.getFullYear()} / ${MONTH_NAMES[date.getMonth()]} / ${date.getDate()}`;
        },

        parseDateFn(text) {
            const [year, month, day] = text.split(' / ');

            return new Date(year, month, day);
        },
    },
};
</script>

<template>
    <div>
        <va-card square outlined :bordered="false" style="background: rgb(244, 248, 250)">
            <va-card-title>{{ text }}</va-card-title>
            <va-card-content>
                <va-date-input v-model="dValue" :format="dateFormatFn" :parse="parseDateFn" manual-input />
                <va-time-input v-model="tValue" clearable />
            </va-card-content>
        </va-card>
    </div>
</template>

<style></style>
