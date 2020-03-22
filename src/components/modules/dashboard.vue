<template>
    <div id="Component_dashboard">
        <p><strong>Dashboard</strong></p>
        <el-divider></el-divider>
        <el-row>
            <el-col :span="8">
                <p>Open module A</p>
                <el-form ref="form" :inline="true">
                    <el-form-item label="Id">
                        <el-input v-model="module_a_id"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" v-on:click="openTab('a',module_a_id)">Open</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="8">
                <p>Open module B</p>
                <el-form ref="form" :inline="true">
                    <el-form-item label="Id">
                        <el-input v-model="module_b_id"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" v-on:click="openTab('b',module_b_id)">Open</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="8">
                <p>Open module C</p>
                <el-form ref="form" :inline="true">
                    <el-form-item label="Id">
                        <el-input v-model="module_c_id"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" v-on:click="openTab('c',module_c_id)">Open</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "dashboard"
        , props: []
        , components: {}
        , mounted() {
            this.init();
        }
        , data() {
            return {
                module_a_id: 0
                , module_b_id: 0
                , module_c_id: 0
            }
        }
        , watch: {}
        , methods: {
            init() {
                console.log('dashboard init');
            }
            , openTab(module, id) {
                this.$emit("open-tab", {module: module, id: id});
            }
        }
        , computed: {}
    }
</script>

<style scoped>

</style>
