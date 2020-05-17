export default {
  name: 'OlUpload',
  props: {
    value: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      model: '',
    };
  },
  methods: {
    // 用于初始化一些数据
    init() {},
    // 用于更新一些数据
    update() {},
    async onRead(file) {
      let params = new FormData(); //创建form对象
      params.append("file", file.file); //通过append向form对象添加数据//第一个参数字符串可以填任意命名，第二个根据对象属性来找到file
      
      let url = this.$Url.uploadUrl + `/file/upload`;
      const res = await this.$http.post(url, params, {
        headers: { //添加请求头
          Authorization: localStorage.jwt
        }
      })
      this.model = res.data.url;
 
      this.updateInput();
    },
    updateInput() {
      this.$emit('success', this.model);
      this.$emit('input', this.model);
    }

  },
  // 计算属性
  computed: {},
  // 包含 Vue 实例可用过滤器的哈希表。
  filters: {},
  // 在实例创建完成后被立即调用
  created() {},
  // 在挂载开始之前被调用：相关的 render 函数首次被调用。
  beforeMount() {},
  // el 被新创建的 vm.el 替换，并挂载到实例上去之后调用该钩子。
  mounted() {
    this.$nextTick(() => {});
  },
  // 数据更新时调用，发生在虚拟 DOM 打补丁之前。
  beforeUpdate() {},
  // keep-alive 组件激活时调用。
  activated() {},
  // keep-alive 组件停用时调用。
  deactivated() {},
  // 实例销毁之前调用。在这一步，实例仍然完全可用。
  beforeDestroy() {},
  //Vue 实例销毁后调用。
  destroyed() {},
  // 当捕获一个来自子孙组件的错误时被调用。
  errorCaptured() {},
  // 包含 Vue 实例可用指令的哈希表。
  directives: {},
  // 一个对象，键是需要观察的表达式，值是对应回调函数。
  watch: {},
  // 组件列表
  components: {},
};
