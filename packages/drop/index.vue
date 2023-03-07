<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import Sortable from 'sortablejs'

export default {
  name: 'WDrop',
  props: {
    // 行拖拽排序，一般用于子表,注意el-table可能需要增加 row-key="id"属性,否则可能排序错乱
    mRowDropable: {
      type: Boolean,
      default: false
    },
    ENTITY_CODE: '',
    mList: {
      type: Array,
      default: []
    },
    mTableColumns: {
      type: Array,
      default: []
    },
    fixedBool: false
  },
  data () {
    return {
      // 行拖拽插件,用于动态设置属性，如 this.mRowDropHandler.option("disabled", !this.canEdit)
      // mRowDropHandler:null,
      // 行拖拽排序保存，拖拽后提交到服务器
      mRowDropStore:false,
      // 列拖拽插件
      // mColumnDropHandler:null,
      // 列拖拽更改显示顺序,已封装至列配置，因显示列中部分列未在mTableColumns中，可能导至错误，一般不启用
      mColumnDropable:false,
      mDropObj: {},
    }
  },
  mounted() {
    this.createDropRow()
    this.createDropColumn()
  },
  methods: {
    // 返回行，列，定位行，定位列
    returnDropHandler (k, obj) {
      this.mDropObj = {
        ...this.mDropObj,
        [k]: obj
      }
      this.$emit('createDrop', this.mDropObj)
    },
    // 行拖拽
    createDropRow() {
      if(!this.mRowDropable){
        return
      }

      //因页面中存在多个table，如果列配置，主从页等，默认取最后一个
      const bodies = this.$el.querySelectorAll('.el-table__body-wrapper tbody')
      const tablebody = bodies[bodies.length - 1]
      const _this = this
      const mRowDropHandler = Sortable.create(tablebody, {
        onEnd({ newIndex, oldIndex }) {
          const dragRow = _this.mList.splice(oldIndex, 1)[0]
          _this.mList.splice(newIndex, 0, dragRow)
          _this.storeDropRows(_this.mList)

        }
      })
      this.returnDropHandler('mRowDropHandler', mRowDropHandler)

      // table的fixed固定行需要独立处理
      if (this.fixedBool) {
        this.$nextTick(() => {
          const fixBodies = this.$el.querySelectorAll('.el-table__fixed-body-wrapper tbody')
          const fixTablebody = fixBodies[fixBodies.length - 1]
          if (fixTablebody) {
            const mFixedRowDropHandler = Sortable.create(fixTablebody, {
              onEnd({ newIndex, oldIndex }) {
                const dragRow = _this.mList.splice(oldIndex, 1)[0]
                _this.mList.splice(newIndex, 0, dragRow)
                _this.storeDropRows(_this.mList)

              }
            })
            this.returnDropHandler('mFixedRowDropHandler', mFixedRowDropHandler)
          }
        })
      }
    },
    storeDropRows(list){
      if(!this.mRowDropStore){
        return
      }
      list = list || this.mList
      if(!list || !list.length){
        return
      }
      setTimeout(()=>{
        let inc = 0
        let sorts = []
        list.forEach(x=>{
          sorts.push({ id: x.id, sn: ++inc })
        })
        this.$emit('saveDrop', {
          type: 'rows',
          list: list
        })
        // this.$POST(`/${this.ENTITY_CODE}/sort`, sorts).then(res => {
        //   if (res.code != 200) {
        //     this.$message.warning(res.msg)
        //   }
        //   this.fetchData()
        // })
      },50)
    },
    // 列拖拽
    createDropColumn() {
      if(!this.mColumnDropable){
        return
      }
      //因页面中存在多个table，如果列配置，主从页等，默认取最后一个
      const bodies = this.$el.querySelectorAll('.el-table__header-wrapper tr')
      const tablebody = bodies[bodies.length - 1]
      const _this = this
      const mColumnDropHandler = Sortable.create(tablebody, {
        animation: 180,
        delay: 0,
        onEnd: evt => {
          const oldItem = _this.mTableColumns[evt.oldIndex]
          _this.mTableColumns.splice(evt.oldIndex, 1)
          _this.mTableColumns.splice(evt.newIndex, 0, oldItem)
          this.$emit('saveDrop', {
            type: 'columns',
            list: _this.mTableColumns
          })
        }
      })
      this.returnDropHandler('mColumnDropHandler', mColumnDropHandler)
    },
  },
}
</script>
