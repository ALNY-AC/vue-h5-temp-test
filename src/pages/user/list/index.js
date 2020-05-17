export default {
    name: 'list',
    data() {
        return {
            list: [],
            total: 0,
            query: {
                page_size: 10,
                page: 1,
                orderBy: 'add_time',
            },
            loading: false,
            finished: false,
        };
    },
    methods: {
        // 用于初始化一些数据
        init() {
        },
        // 用于更新一些数据
        async update() {
            if (this.finished) {
                return;
            }
            const res = await this.$http.post('/user/list', this.query);
            await this.$nextTick();
            if (res.code > 0) {
                this.total = res.total;
                this.list = [...this.list, ...res.data];
            }
            if (this.list.length >= res.total) {
                this.finished = true;
            }
            this.loading = false;
            this.query.page++;
        },

        // async del(id) {
        //     try {
        //         await this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', { type: 'warning' });
        //     } catch (error) {
        //         return false;
        //     }


        //     const res = await this.$http.post('/user/del', {
        //         ids: [id]
        //     });
        //     if (res.code >= 0) {
        //         this.$message.success('操作成功！');
        //     } else {
        //         this.$message.error('操作失败！');
        //     }
        //     this.update();
        // },
        // async dels() {
        //     if (this.selectList.length <= 0) {
        //         this.$message.info('请先选择账户');
        //         return false;
        //     }
        //     try {
        //         await this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', { type: 'warning' });
        //     } catch (error) {
        //         return false;
        //     }

        //     const res = await this.$http.post('/user/del', {
        //         ids: this.selectList.map(el => el.id)
        //     });
        //     if (res.code >= 0) {
        //         this.$toast('操作成功！');
        //     } else {
        //         this.$toast('操作失败！');
        //     }
        //     this.update();
        // },
        // async save(row) {
        //     const res = await this.$http.post('/user/save', row);
        //     if (res.code >= 0) {
        //         this.$toast('操作成功！');
        //     } else {
        //         this.$toast('操作失败！');
        //     }
        //     this.update();
        // },
    },
    // 计算属性
    computed: {},
    // 包含 Vue 实例可用过滤器的哈希表。
    filters: {},
    // 在实例创建完成后被立即调用
    created() { },
    // 在挂载开始之前被调用：相关的 render 函数首次被调用。
    beforeMount() { },
    // el 被新创建的 vm.el 替换，并挂载到实例上去之后调用该钩子。
    mounted() {
        this.init();
        this.$nextTick(() => { });
    },
    // 数据更新时调用，发生在虚拟 DOM 打补丁之前。
    beforeUpdate() { },
    // keep-alive 组件激活时调用。
    activated() { },
    // keep-alive 组件停用时调用。
    deactivated() { },
    // 实例销毁之前调用。在这一步，实例仍然完全可用。
    beforeDestroy() { },
    //Vue 实例销毁后调用。
    destroyed() { },
    // 当捕获一个来自子孙组件的错误时被调用。
    errorCaptured() { },
    // 包含 Vue 实例可用指令的哈希表。
    directives: {},
    // 一个对象，键是需要观察的表达式，值是对应回调函数。
    watch: {

    },
    // 组件列表
    components: {},
};