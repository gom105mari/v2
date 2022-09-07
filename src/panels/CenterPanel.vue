<script>
export default {
    name: 'CenterPanel',
    components: {},

    data() {
        return {
            /* leftMini: false,
            rightMini: false, */
        };
    },
    methods: {
        /*    toggleLeft() {
            this.leftMini = !this.leftMini;
            this.emitter.emit('toggleLeft', this.leftMini);
        },
        toggleRight() {
            this.rightMini = !this.rightMini;
            this.emitter.emit('toggleRight', this.rightMini);
        }, */
    },
};
</script>

<template>
    <div style="width: 100%; height: 100%">
        <!--<div class="d-flex flex-row" style="display: flex; justify-content: space-between">
            <div>
                <va-button v-show="!leftMini" @click="toggleLeft" flat icon="arrow_circle_left" class="mr-4" />
                <va-button v-show="leftMini" @click="toggleLeft" flat icon="arrow_circle_right" class="mr-4" />
            </div>
            <div>
                <va-button v-show="!rightMini" @click="toggleRight" flat icon="arrow_circle_right" class="mr-4" />
                <va-button v-show="rightMini" @click="toggleRight" flat icon="arrow_circle_left" class="mr-4" />
            </div>
        </div>-->
        <div class="tree-content" style="width: 100%; height: 100%" :title="From"></div>
    </div>
</template>

<style></style>
