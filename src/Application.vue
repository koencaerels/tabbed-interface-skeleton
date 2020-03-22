<template>
    <div id="application">
        <!-- tabs --->
        <vue-tabs-chrome ref="tab" v-model="tab" :tabs="tabs" insert-to-after/>
        <!-- content --->
        <div id="tabs_wrapper">
            <div v-for="module in tabs" v-bind:key="module.key" v-show="showModule(module.key)">
                <dashboard v-if="(module.key=='start')" v-on:open-tab="addModuleFromDashboard"></dashboard>
                <div v-else :ref="module.key"></div>
            </div>
        </div>
    </div>
</template>

<script>

    import Vue from 'vue';
    import Dashboard from "./components/modules/dashboard";
    import ModuleA from "./components/modules/module_a";
    import ModuleB from "./components/modules/module_b";
    import ModuleC from "./components/modules/module_c";

    export default {
        props: []
        , components: {Dashboard}
        , mounted() {
            this.init();
        }
        , data() {
            return {
                tab: 'start',
                tabs: [
                    {
                        label: 'Start'
                        , key: 'start'
                        , closable: false
                        , module: 'dashboard'
                        , identifier: 'dashboard'
                        , favico: (h, {tab, index}) => {
                            return h('i', {class: 'el-icon-s-home'})
                        }
                    }
                ]
            }
        }
        , watch: {
            tab: function (val) {
                this.$store.commit('setCurrentTab', val);
            }
        }
        , methods: {
            init() {
                this.$store.commit('setCurrentTab', this.tab);
            }
            , addTab(module, id) {
                let identifier = module + '_' + id;
                if (!this.isTabAlreadyPresent(identifier)) {
                    let moduleName = 'module_' + module;
                    let item = 'tab' + Date.now();
                    let favicon = 'el-icon-star-on';
                    let ComponentClass;
                    switch (moduleName) {
                        case 'module_a':
                            ComponentClass = Vue.extend(ModuleA);
                            favicon = 'el-icon-s-tools';
                            break;
                        case 'module_b':
                            ComponentClass = Vue.extend(ModuleB);
                            favicon = 'el-icon-s-custom';
                            break;
                        case 'module_c':
                            ComponentClass = Vue.extend(ModuleC);
                            favicon = 'el-icon-scissors';
                            break;
                    }
                    let newTabs = [
                        {
                            label: 'Module ' + module + '(' + id + ')'
                            , key: item
                            , module: moduleName
                            , identifier: identifier
                            , favico: (h, {tab, index}) => {
                                return h('i', {class: favicon})
                            }
                        }
                    ];
                    this.$refs.tab.addTab(...newTabs);
                    this.tab = item;
                    let instance = new ComponentClass({propsData: {id: id}});
                    setTimeout(() => this.addModule(item, instance), 100);
                }
            }
            , addModuleFromDashboard(arg) {
                this.addTab(arg.module, arg.id);
            }
            , addModule(item, instance) {
                instance.$on('open-tab', function (arg) {
                    this.addTab(arg.module, arg.id);
                }.bind(this));
                instance.$mount();
                this.$refs[item][0].appendChild(instance.$el);
            }
            , showModule(key) {
                let show = false;
                if (this.tab == key) show = true;
                return show;
            }
            , isTabAlreadyPresent(identifier) {
                for (let i = 0; i < this.tabs.length; i++) {
                    if (this.tabs[i].identifier == identifier) return true;
                }
                return false;
            }
        }
        , computed: {}
    }

</script>

<style scoped>

    #tabs_wrapper {
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 20px;
    }

</style>
