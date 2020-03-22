<template>
    <div id="Component_module_a">
        <p><strong>Module A</strong></p>
        <el-divider></el-divider>
        <p>id: {{id}}</p>
        <el-row>
            <el-col :span="13">
                <el-card class="box-card">
                    <p>content module</p>
                </el-card>
            </el-col>
            <el-col :span="4" :offset="4">
                <p>Open module C</p>
                <el-form ref="form" :inline="false">
                    <el-form-item label="Id">
                        <el-input v-model="module_c_id" size="mini"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" v-on:click="openModuleC(module_c_id)" size="mini">Open</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "module_a"
        , props: ['id']
        , components: {}
        , mounted() {
            this.init();
        }
        , data() {
            return {
                module_c_id: 0
            }
        }
        , watch: {}
        , methods: {
            init() {
                console.log('module a init');
            }
            , openModuleC(id) {
                this.$emit("open-tab", {module: 'c', id: id});
            }
        }
        , computed: {}
    }
</script>

<style scoped>

</style>
