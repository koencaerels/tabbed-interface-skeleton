<template>
    <div id="Component_module_c">
        <p><strong>Module C</strong></p>
        <el-divider></el-divider>
        <p>id: {{id}}</p>
    </div>
</template>

<script>
    export default {
        name: "module_c"
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
                console.log('module c init');
            }
        }
        , computed: {}
    }
</script>

<style scoped>

</style>
