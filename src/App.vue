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
};
</script>

<template>
    <div class="row-vh d-flex flex-row" style="width: 100%; height: 100%">
        <div style="width: 15%">
            <LeftPanel style="width: 100%" />
        </div>
        <div style="width: 70%">
            <CenterPanel />
        </div>
        <div style="width: 15%">
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
    height: 80vh;
    background: rgb(244, 248, 250);
}
</style>
