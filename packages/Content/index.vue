<template>
  <div :class="['app-container', 'dashboard-container', { inside: inside }]">
    <slot name="headTitle"></slot>
    <div v-if="$slots.header" class="app-header">
      <div class="app-filter">
        <slot name="header" />
      </div>
    </div>
    <div class="divider" v-if="showDivider" :style="dividerStyle"></div>
    <div v-if="$slots.content || $slots.paginate" :class="['app-content', { inside: inside }]">
      <div class="app-content-header">
        <div v-if="$slots.headerOption || $slots.headerSort || title || $slots.title" class="app-option">
          <div class="app-option-content">
            <div style="display: flex">
              <div v-if="title || $slots.title" class="app-title">
                <span v-if="title">{{ title }}</span>
                <span v-if="$slots.title"> <slot name="title" /></span>
              </div>
              <slot name="headerSort" />
            </div>
            <div>
              <slot name="headerOption" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <slot name="unTotal"></slot>
      </div>

      <div v-if="$slots.content" class="app-content-main">
        <slot name="content" />
      </div>

      <div v-if="$slots.paginate" class="app-content-paginate">
        <slot name="paginate" />
      </div>
    </div>

    <slot />
  </div>
</template>

<script>
export default {
  name: 'WContent',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    title: String,
    inside: Boolean,
    showDivider: Boolean,
    dividerStyle: String
  },
  created () {
    console.log(this.$slots)
  }
}
</script>

<style scoped lang="scss">
.app-container.inside {
  .app-header {
    padding: 0;
  }

  .app-content{
    padding: 0;
  }
}

.app-container {
  .app-header {
    background-color: #fff;
    padding: 16px;
    border-radius: 6px;
  }

  .divider {
    height: 1px;
    background: #e7e7e7;
  }

  .app-title {
    margin-right: 10px;
    font-size: 16px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.9);
    line-height: 24px;
  }

  .app-option {
    padding: 0 0 10px;

    .app-option-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .app-content {
    background-color: #fff;
    margin-top: 16px;
    padding: 20px 24px;
    border-radius: 6px;

    .app-content-paginate {
      text-align: right;
      margin-top: 20px;

      :deep .el-pagination__total {
        float: left;
      }
    }
  }
}
</style>
