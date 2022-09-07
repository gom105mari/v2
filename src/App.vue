<script>
// import TopAppBar from './components/TopAppBar.vue'
import LeftPanel from './panels/LeftPanel.vue';
import CenterPanel from './panels/CenterPanel.vue';
import RightPanel from './panels/RightPanel.vue';

export default {
    name: 'App',
    components: {
        LeftPanel,
        CenterPanel,
        RightPanel,
    },
    data() {
        return {};
    },
};
</script>

<template>
    <div class="row-vh d-flex flex-row" style="width: 100%; height: 100%">
        <div>
            <LeftPanel style="width: 100%" />
        </div>
        <va-divider vertical />
        <div style="width: 65%">
            <CenterPanel />
        </div>
        <va-divider vertical />
        <div>
            <RightPanel />
        </div>
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    height: 90vh;
    background: rgb(244, 248, 250);
}
</style>
