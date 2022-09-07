<script>
export default {
    name: 'KeywordBox',
    props: ['index'],
    data() {
        return {
            keywordValue: '',
            id: this.index,
        };
    },
};
</script>

<template>
    <div class="d-flex flex-row">
        <va-input class="mb-4" style="border: 1px solid var(--va-primary)" v-model="keywordValue" @change="$emit('setKeyword', id, keywordValue)" />
        <va-button flat icon="cancel" @click="$emit('removeBox', id)" />
    </div>
</template>

<style></style>
