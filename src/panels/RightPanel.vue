<script>
export default {
    name: 'RightPanel',
    components: {},
    data() {
        return {
            items: [
                { title: 'Dashboard', icon: 'dashboard' },
                { title: 'Sidebar demo', icon: 'room', active: true },
                { title: 'Loop', icon: 'loop' },
            ],
            // minimized: this.rMinimized,
        };
    },

    mounted() {
        /* this.emitter.on('toggleRight', (rightMinimized) => {
            this.minimized = rightMinimized;
        }); */
    },
};
</script>

<template>
    <div style="height: 100%">
        <!--title
        <va-card square outlined :bordered="false" style="height: 90%; background: rgb(244, 248, 250)">
            <va-card-title>{{ text }}</va-card-title>
            <va-card-content> aaaaaaaaaaaaaaaaaaaaa</va-card-content>
        </va-card>-->
        <va-sidebar :minimized="minimized" textColor="dark" minimizedWidth="0" position="right">
            <va-sidebar-item v-for="item in items" :key="item.to" :active="item.active">
                <va-sidebar-item-content>
                    <va-icon :name="item.icon" />
                    <va-sidebar-item-title style="height: 24px">
                        {{ item.title }}
                    </va-sidebar-item-title>
                </va-sidebar-item-content>
            </va-sidebar-item>
        </va-sidebar>
    </div>
</template>

<style></style>
