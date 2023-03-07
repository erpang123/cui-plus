<template>
  <w-content title="prop方式显示标题 /">
    <div slot="title">使用slot方式显示标题</div>
    <div slot="header" style="background-color: #909399">
      头部区域
    </div>
    <div slot="headerOption" style="background-color: #3a8ee6">
      操作按钮区域
    </div>
    <div slot="content" style="min-height: 200px; background-color: #5daf34">
      内容区域
    </div>
    <div slot="paginate" style="background-color: #dd6161">
      分页区域
    </div>
  </w-content>
</template>
