<template>
    <div style="position: relative">
        <va-app-bar>
            <va-button color="#fff" flat :rounded="false">News Searcher</va-button>
        </va-app-bar>
    </div>
</template>

<script>
    export default {
        name: 'TopAppBar',
        props: {
            msg: String,
        },
    };
</script>
