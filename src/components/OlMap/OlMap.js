export default {
  name: 'OlMap',
  props: {
    value: {
      type: Object,
      default() {
        return {
          x: 0.00,
          y: 0.00,
        }
      },
    }
  },
  data() {
    return {
      marker: null,
      map: null,
      model: {
        x: 0.00,
        y: 0.00,
      },
    };
  },
  methods: {
    init() {
      this.initMap();
      this.initInput();
      this.initEvent();
      this.initLocation();
    },
    // 初始化地图
    initMap() {
      this.map = new AMap.Map('container', {
        resizeEnable: true,
        zoom: 18
      });
    },
    initLocation() {
      AMap.plugin('AMap.Geolocation', () => {
        let geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          showMarker: false, //显示当前定位点
          showButton: true, //显示右下角小圆点
          timeout: 5000, //超过10秒后停止定位，默认：5s
          buttonPosition: 'RB', //定位按钮的停靠位置
          buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          zoomToAccuracy: true, //定位成功后是否自动调整地图视野到定位点
        });
        this.map.addControl(geolocation);
        // 监听右下角小圆点
        AMap.event.addListener(geolocation, 'complete', (e) => {
          // this.setPosition();
          console.log(11)
          this.setPosition(e.position.lat, e.position.lng);
        });

        // geolocation.getCurrentPosition((status, e) => {
        // if (status == 'complete') {
        //   if (e.position) {
        //     if (this.value.x == 0.00 || this.value.y == 0.00) {
        //       this.setPosition(e.position.lat, e.position.lng);
        //     }
        //   }
        // }
        // });

      });
    },
    initInput() {
      let tipinput = new AMap.Autocomplete({
        input: "tipinput"
      });
      AMap.event.addListener(tipinput, "select", (e) => {
        this.setPosition(e.poi.location.lat, e.poi.location.lng);
      });

    },
    // 初始化事件
    initEvent() {
      this.map.on('click', (e) => {
        this.setPosition(e.lnglat.getLat(), e.lnglat.getLng());
      });
    },
    // 设置坐标
    setPosition(x, y) {

      this.model = {
        x: x,
        y: y,
      }
      this.map.setCenter([y, x]);
      this.addMarker(x, y);
      this.updateInput();
    },

    addMarker(x, y) {
      this.clearMarker();
      this.marker = new AMap.Marker({
        icon: new AMap.Icon({}),
        offset: new AMap.Pixel(-13, -30)
      });
      this.marker.setMap(this.map);
      //经度 y，纬度 x
      this.marker.setPosition([y, x]); //更新点标记位置
    },

    // 清除 marker
    clearMarker() {
      if (this.marker) {
        this.marker.setMap(null);
      }
      this.marker = null;
    },

    updateInput() {
      this.$emit('input', this.model);
    }
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
    this.$nextTick(() => {
      this.init();
    });
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

    value: {
      handler(v) {
        if (parseFloat(this.value.x) != parseFloat(this.model.x) || parseFloat(this.value.y) != parseFloat(this.model.y)) {
          this.setPosition(this.value.x, this.value.y);
        }
      },
      deep: true,
      immediate: true
    }
  },
  // 组件列表
  components: {},
};
