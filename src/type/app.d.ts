declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module '*.md'

interface routerType {
  path: string,
  name: string,
  component: Function,
  text?: string,
  
}

interface tableDateType {
  selectTableLists: Array<any>,
  dblClick: Boolean
}

type eventType = 'dblClick' | 'select'
type keyType = 'selectTableLists' | 'selectLists'