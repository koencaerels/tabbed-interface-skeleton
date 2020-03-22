<template>
    <div id="Component_module_b">
        <p><strong>Module B</strong></p>
        <el-divider></el-divider>
        <p>id: {{id}}</p>
    </div>
</template>

<script>
    export default {
        name: "module_b"
        , props: ['id']
        , components: {}
        , mounted() {
            this.init();
        }
        , data() {
            return {
                dataHolder: ''
            }
        }
        , watch: {}
        , methods: {
            init() {
                console.log('module b init');
            }
        }
        , computed: {}
    }
</script>

<style scoped>

</style>
