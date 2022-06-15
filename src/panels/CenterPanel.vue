<script>
export default {
    name: 'CenterPanel',
    components: {},
    data() {
        return {
            items: [],
            left_minimized: false,
            right_minimized: false,
        };
    },
};
</script>

<template>
    <div style="width: 100%; height: 100%">
        <div class="d-flex flex-row" style="display: flex; justify-content: space-between">
            <div>
                <va-button v-show="!left_minimized" flat icon="arrow_circle_left" class="mr-4" />
                <va-button v-show="left_minimized" flat icon="arrow_circle_right" class="mr-4" />
            </div>
            <div>
                <va-button v-show="!right_minimized" flat icon="arrow_circle_right" class="mr-4" />
                <va-button v-show="right_minimized" flat icon="arrow_circle_left" class="mr-4" />
            </div>
        </div>
        <div class="tree-content" style="width: 100%; height: 100%" :title="From"></div>
    </div>
</template>

<style></style>
