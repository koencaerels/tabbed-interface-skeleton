<template>
    <div id="app_footer">
        <p>
            <small> Current tab: <strong>{{currentTab}}</strong></small>
        </p>
    </div>
</template>

<script>

    export default {
        props: []
        , components: {}
        , mounted() {
            this.init();
        }
        , data() {
            return {}
        }
        , watch: {}
        , methods: {
            init() {

            }
        }
        , computed: {
            currentTab() {
                return this.$store.state.currentTab;
            }
        }
    }

</script>

<style scoped>

    #app_footer {

    }

</style>
