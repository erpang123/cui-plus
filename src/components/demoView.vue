<template>
  <div class="example-view">
    <div class="example-box">
      <slot></slot>
    </div>

    <div class="pre-code-box">
      <transition name="slide-fade">
        <pre
          ref="codeRef"
          class="language-html"
        >
          <div v-html="hljs.highlightAuto(sourceCode).value"></div>
        </pre>
      </transition>
      <div class="show-code-cls" @click="showOrhideCode">
        <transition name="arrow-slide">
          <el-icon class="icon-color" :size="14">
            <CaretTop v-if="data.isExpanded" />
            <CaretBottom v-else/>
          </el-icon>
        </transition>
        <transition name="text-slide">
          <span class="icon-text">{{ controlText }}</span>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import hljs from 'highlight.js';
import { CaretTop, CaretBottom } from '@element-plus/icons-vue'

import { computed, onMounted, ref, reactive } from "vue";

const props = defineProps({
  compName: {
    type: String,
    default: "",
    require: true,
  },
  demoName: {
    type: String,
    default: "index",
    require: true,
  }
})

const data = reactive({
  isExpanded: false,
  langConfig: {
    "hide-text": "隐藏代码",
    "show-text": "显示代码"
  }
})

const codeRef = ref(null)

const sourceCode = ref("");

const controlText = computed(() => data.isExpanded ? data.langConfig['hide-text'] : data.langConfig['show-text'])
 
const showOrhideCode = () => {
  const domRef: any = codeRef.value
  // dom节点的展开动画
  if (!data.isExpanded) {
    domRef.style.height = `${domRef.scrollHeight}px`
  } else {
    domRef.style.height = 0
  }

  data.isExpanded = !data.isExpanded
}
// 开发环境获取文件源码
const getSourceCode = async () => {
   let msg = await import(/* @vite-ignore */ `/src/views/${props.compName}/${props.demoName}.vue?raw`)
   sourceCode.value = msg.default
}
// 生产环境获取文件源码
const getProSourceCode = async () => {
  sourceCode.value = await fetch(`/src/views/${props.compName}/${props.demoName}.vue`).then((res) => res.text())
}

onMounted(() => {
  const isDev = import.meta.env.MODE === 'development'
  if (isDev) {
    getSourceCode()
  } else {
    getProSourceCode()
  }
})
</script>

<style lang="scss" scoped>
.example-view{
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 15px;
  .example-box{
    padding: 24px;
  }
}
.pre-code-box{
  position: relative;
}
.show-code-cls{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  cursor: pointer;
  border-top: 1px solid #dcdfe6;
  position: sticky;
  bottom: 0;
  background: #fff;
  .el-icon-cls{
    display: block;
    width: 24px;
    height: 24px;
  }
  .icon-color, .icon-text{
    color: #d3dce6;
  }
  &:hover{
    .icon-color, .icon-text{
      color: #409eff;
    }
  }
}
.language-html{
  font-size: 12px;
  line-height: 1.8;
  background-color: #f6f8fa;
  margin-bottom: 0;
  padding: 0 16px;
  height: 0;
  overflow-y: hidden;
  overflow-x: auto;
  transition: height 0.2s;
}
.up-down-icon{
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url(../assets/caret-up.svg) no-repeat;
  background-size: contain;
  margin-right: 8px;
  transform: rotateZ(180deg);
  &.rotate-cls{
    transform: rotateZ(0deg)
  }
}
</style>