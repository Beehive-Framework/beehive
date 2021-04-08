<template>
    <div>
        <a-modal v-model="visible"
                 @ok="handleOk"
                 @cancel="handleCancel"
                 v-bind="view? view.modal: {}">
            <component v-if="comVisible"
                       ref="comRef"
                       :is="view.component"
                       v-bind="view.props"/>
        </a-modal>
    </div>
</template>

<script>
    import _assign from 'lodash/merge'
    export default {
        name: "SModal",
        data() {
            return {
                visible: false,
                view: null,
                comVisible: false,
                timeoutIns: null
            }
        },
        created() {
        },
        mounted() {
            this.$bus.on('bus_openModal', this.openModal)
            this.$bus.on('bus_closeModal', this.closeModal)
            this.$bus.on('bus_okLoadingModal', this.okLoadingModal)
        },
        watch: {
            visible(value) {
                if (value) {
                    this.comVisible = true
                } else {
                    if (this.timeoutIns) {
                        window.clearTimeout(this.timeoutIns)
                    }
                    this.timeoutIns = setTimeout(() => {
                        this.comVisible = false
                    }, 300);
                }
            }
        },
        methods: {
            init() {
                this.view = {
                    modal: {
                        okText: '确定',
                        cancelText: '取消'
                    },
                    component: null,
                    props: null,
                    ok: () => {
                    },
                    cancel: () => {
                    }
                }
                console.log('init modal', this.view)
            },
            okLoadingModal(loading) {
                if (this.view)
                    this.$set(this.view.modal, 'confirmLoading', loading)
            },
            openModal(view) {
                this.init()
                console.log('openModal', view)
                this.view = _assign({}, this.view, view)
                this.visible = true
            },
            closeModal() {
                this.visible = false
            },
            handleOk() {
                if (this.view.ok) {
                    this.view.ok(this.$refs['comRef'])
                }
            },
            handleCancel() {
                if (this.view.cancel) {
                    this.view.cancel()
                }
            }
        }
    }
</script>

<style scoped>
</style>