<template>
    <div id="app">
        <el-container>
            <el-header id="header-wrapper">
                <application-header></application-header>
            </el-header>
            <el-container id="content-wrapper">
                <el-aside width="250px" id="navigation-wrapper">
                    <left-navigation v-on:open-tab="addModuleFromNavigation"></left-navigation>
                </el-aside>
                <!-- ----------------------------------------------------------------------------------------------- -->
                <el-main id="module-wrapper">
                    <application ref="application"></application>
                </el-main>
                <!-- ----------------------------------------------------------------------------------------------- -->
            </el-container>
            <el-footer id="footer-wrapper">
                <application-footer></application-footer>
            </el-footer>
        </el-container>
    </div>
</template>

<script>

    import ApplicationHeader from "./components/layout/ApplicationHeader";
    import LeftNavigation from "./components/layout/LeftNavigation";
    import ApplicationFooter from "./components/layout/ApplicationFooter";
    import Application from "./Application";

    export default {
        props: []
        , components: {Application, ApplicationFooter, ApplicationHeader, LeftNavigation}
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
            , addModuleFromNavigation(arg) {
                this.addTab(arg.module, arg.id);
            }
            , addTab(module, id) {
                this.$refs.application.addTab(module, id);
            }
        }
        , computed: {}
    }

</script>

<style>

    #app {
        font-family: Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    #header-wrapper {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        height: 50px;
        border-bottom: 1px solid darkgray;
        background-color: silver;
    }

    #navigation-wrapper {
        background-color: white;
    }

    #content-wrapper {
        position: absolute;
        left: 0;
        right: 0;
        top: 60px;
        bottom: 50px;
        background-color: white;
    }

    #module-wrapper {
        padding: 0px;
        margin: 0px;
        background-color: white;
    }

    #footer-wrapper {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 50px;
        border-top: 1px solid darkgrey;
        background-color: silver;
    }

</style>
