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
        return { value: date };
    },

    beforeUpdate() {
        // TODO: props업데이트 때 호출되므로 value값 업데이트 필요
        console.log(this.before);
    },

    methods: {
        // 활용 필요
        // TODO:  vm model업데이트 될때 시간값 유지해야하는데..
        setInitDate(date) {
            if (date) {
                const newDate = new Date();
                newDate.setDate(date.getDate() - this.before);
                return newDate;
            }
            return new Date();
        },

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
                <va-date-input v-model="value" :format="dateFormatFn" :parse="parseDateFn" manual-input />
                <va-time-input v-model="value" clearable />
            </va-card-content>
        </va-card>
    </div>
</template>

<style></style>
