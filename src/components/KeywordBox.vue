<script>
export default {
    name: 'KeywordBox',
    props: [],

    data() {
        return { keywordValue: '' };
    },

    methods: {},
};
</script>

<template>
    <div class="d-flex flex-row">
        <va-input class="mb-4" style="border: 1px solid var(--va-primary)" v-model="keywordValue" />
        <va-button flat icon="cancel" />
    </div>
</template>

<style></style>
