<script>
import PeriodPicker from '../components/PeriodPicker.vue';
import KeywordBox from '../components/KeywordBox.vue';

const PERIOD_BUTTIONS = [
    { label: '1 day', value: '1' },
    { label: '3 days', value: '3' },
    { label: '1 week', value: '7' },
];

const MAX_KEYWORD_CNT = 5;

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
            keywordList: [], // value, index
            disablePlus: false,
            keywordIndex: 0,

            // minimized: false,
        };
    },

    methods: {
        setDisabledPlus() {
            if (this.keywordList.length === MAX_KEYWORD_CNT) {
                this.disablePlus = true;
            } else {
                this.disablePlus = false;
            }
        },

        addKeywordBox() {
            if (this.keywordList.length < MAX_KEYWORD_CNT) {
                this.keywordList.push({
                    value: '',
                    index: this.keywordIndex,
                });
                this.keywordIndex += 1;
            }

            this.setDisabledPlus();
        },

        setKeyword(index, value) {
            const i = this.keywordList.findIndex((item) => item.index === index);
            if (i > -1) {
                this.keywordList.at(i).value = value;
            }
        },

        removeKeywordBox(index) {
            const i = this.keywordList.findIndex((item) => item.index === index);
            if (i > -1) {
                this.keywordList.splice(i, 1);
                this.setDisabledPlus();
            }
        },

        search() {},
    },

    mounted() {
        /* this.emitter.on('toggleLeft', (leftMinimized) => {
            this.minimized = leftMinimized;
        }); */
    },
};
</script>

<template>
    <div style="height: 100%">
        <va-sidebar :minimized="minimized" class="px-2 py-2" minimizedWidth="0px">
            <va-button-toggle class="d-flex flex-row" flat :rounded="false" v-model="sPeriodDay" :options="periodButtons" />
            <PeriodPicker id="sDate" :before="sPeriodDay" text="From" />
            <PeriodPicker id="eDate" text="To" />
            <va-divider />
            <KeywordBox v-for="keyword in keywordList" :key="keyword.index" :index="keyword.index" @set-keyword="setKeyword" @remove-box="removeKeywordBox" />
            <va-button :disabled="disablePlus" :rounded="false" @click="addKeywordBox" class="mr-4" style="width: 100%">+</va-button>
            <va-divider />
            <va-button icon="search" :rounded="false" @click="search" class="mr-4" style="width: 100%">Search</va-button>
        </va-sidebar>
    </div>
</template>

<style></style>
