<template>
  <div>
    <mt-popup class="pop" v-model="sexpopup" position="bottom">
      <mt-picker :slots="slots" valueKey="name" @change="onValuesChange"></mt-picker>
    </mt-popup>
  </div>
</template>

<script>
import { zmGetProvinces, zmGetcities, zmGetareas } from "@/utils/zmRegion.js";
export default {
  props: ["result"],
  data() {
    return {
      slots: [
        {
          flex: 1,
          values: zmGetProvinces(),
          className: "slot1",
          textAlign: "right"
        },
        {
          divider: true,
          content: "",
          className: "slot2"
        },
        {
          flex: 1,
          values: zmGetcities("11"),
          className: "slot1",
          textAlign: "conter"
        },
        {
          divider: true,
          content: "",
          className: "slot2"
        },
        {
          flex: 1,
          values: zmGetareas("1101"),
          className: "slot3",
          textAlign: "center"
        }
      ],
      region: "",
      regionInit: false,
      sexpopup: this.result
    };
  },
  watch: {
    result(val) {
      this.sexpopup = val;
    },
    sexpopup(val) {
      this.$emit("changepop", val);
    }
  },
  methods: {
    onValuesChange(picker, values) {
      if (this.regionInit) {
        if (values[0] && values[1] && values[2]) {
          this.region =
            values[0]["name"] + values[1]["name"] + values[2]["name"];
          console.log(this.region);

          //给市、县赋值
          let area = "";
          if (values[0].name == "北京市") {
            area = "1101";
          } else if (values[0].name == "天津市") {
            area = "1201";
          } else {
            area = values[1]["code"];
          }
          picker.setSlotValues(1, zmGetcities(values[0]["code"]));
          picker.setSlotValues(2, zmGetareas(area));

          //   this.$emit("getRegion", this.region);
        } else {
          console.log("数据不全");
        }
      } else {
        this.regionInit = true;
      }
      console.log(this.regionInit);
    }
  },

  created() {}
};
</script>

<style scoped>
.pop {
  width: 100%;
}
</style>