<template>
  <div id="app">
    <h1> simple flowchart</h1>
    <div class="tool-wrapper">
      <select v-model="newNodeType">
        <option v-for="(item, index) in nodeCategory" :key="index" :value="index">{{item}}</option>
      </select>
      <input type="text" v-model="newNodeLabel" placeholder="Input node label">
      <button @click="addNode">ADD</button>
      <button @click="showdata">Show Data</button>
    </div>
    
    <simple-flowchart :scene.sync="scene" 
      @nodeClick="nodeClick"
      @nodeDelete="nodeDelete"
      @linkBreak="linkBreak"
      @linkAdded="linkAdded"
      @canvasClick="canvasClick"
      :height="800"></simple-flowchart>
  </div>
</template>
<script>
import SimpleFlowchart from './components/SimpleFlowchart.vue'
export default {
  name: 'app',
  components: {
    SimpleFlowchart
  },
  data() {
    return {
      scene: {
        centerX: 1024,
        centerY: 140,
        scale: 1,
        nodes: [
          {
            id: 1,
            x: -700,
            y: -69,
            type: 'Action',
            label: 'Mamed',
          },
          {
            id: 2,
            x: -357,
            y: 80,
            type: 'Script',
            label: 'Siroglan',
          },
          {
            id: 3,
            x: -557,
            y: 80,
            type: 'Rule',
            label: 'Cesaret',
          },
           {
            id: 4,
            x: -213,
            y: 80,
            type: 'Rule',
            label: 'Vaqif',
          }
        ],
        links: [
          {
            id: 1,
            from: 1, // node id the link start
            to: 2,  // node id the link end
          },
          {
            id: 2,
            from: 1, // node id the link start
            to: 3,  // node id the link end
          },
          {
            id: 3,
            from: 1, // node id the link start
            to: 4,  // node id the link end
          },
          {
            id: 4,
            from: 2, // node id the link start
            to: 3,  // node id the link end
          },
         
        ]
      },
      newNodeType: 0,
      newNodeLabel: '',
      nodeCategory:[
        'rule',
        'action',
        'script',
        'decision',
        'fork',
        'join',
      ],
    }
  },
  methods: {
    canvasClick(e) {
      window.console.log('canvas Click, event:', e)
    },
    addNode() {
      let maxID = Math.max(0, ...this.scene.nodes.map((link) => {
        return link.id;
      }))
      this.scene.nodes.push({
        id: maxID + 1,
        x: -400,
        y: 50,
        type: this.nodeCategory[this.newNodeType],
        label: this.newNodeLabel ? this.newNodeLabel: `test${maxID + 1}`,
      })
    },
    nodeClick(id) {
     window.console.log('node click', id);
    },
    nodeDelete(id) {
      window.console.log('node delete', id);
    },
    linkBreak(id) {
      window.console.log('link break', id);
    },
    linkAdded(link) {
      window.console.log('new link added:', link);
    },
    showdata(){
      window.console.log(this.scene.nodes)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  overflow: hidden;
  height: 800px;
  .tool-wrapper {
    position: relative;
  }
}
</style>
