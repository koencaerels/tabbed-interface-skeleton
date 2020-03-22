<template>
    <div id="app_left_navigation">
        <div class="spacer"></div>
        <el-menu class="el-menu-vertical-demo"
                 @open="handleOpen" @close="handleClose"
                 :collapse="isCollapse">
            <el-menu-item index="1" @click="openTab('a',1)">
                <i class="el-icon-s-tools"></i>
                <span slot="title">Module A (1)</span>
            </el-menu-item>
            <el-menu-item index="2" @click="openTab('b',1)">
                <i class="el-icon-s-custom"></i>
                <span slot="title">Module B (1)</span>
            </el-menu-item>
            <el-menu-item index="3" @click="openTab('c',1)">
                <i class="el-icon-scissors"></i>
                <span slot="title">Module C (1)</span>
            </el-menu-item>
        </el-menu>
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
            return {
                isCollapse: false
            }
        }
        , watch: {}
        , methods: {
            openTab(module, id) {
                this.$emit("open-tab", {module: module, id: id});
            }
            , handleOpen(key, keyPath) {
                console.log(key, keyPath);
            }
            , handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
            , init() {
            }
        }
        , computed: {}
    }

</script>

<style scoped>

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        margin-top: 5px;
    }

    .spacer {
        background-color: #E2E2E2;
        height: 44px;
    }

</style>
