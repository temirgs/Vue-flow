<template>
  <div class="flowchart-node" :style="nodeStyle" 
    @mousedown="handleMousedown"
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
    v-bind:class="{selected: options.selected === id}">
    <div class="node-port node-input"
       @mousedown="inputMouseDown"
       @mouseup="inputMouseUp">
    </div>
    <div class="node-main">
      <div v-text="label" class="node-type"></div>
      <!-- <div v-text="label" class="node-label"></div> -->
      <div ><img style="height:53px; width:70px" src="data:image/jpeg;base64,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"/></div>
    </div>
    <div class="node-port node-output" 
      @mousedown="outputMouseDown">
    </div>
    <div v-show="show.delete" class="node-delete">&times;</div>
  </div>
</template>

<script>
export default {
  name: 'FlowchartNode',
  props: {
    id: {
      type: Number,
      default: 1000,
      validator(val) {
        return typeof val === 'number'
      }
    },
    x: {
      type: Number,
      default: 0,
      validator(val) {
        return typeof val === 'number'
      }
    },    
    y: {
      type: Number,
      default: 0,
      validator(val) {
        return typeof val === 'number'
      }
    },
    type: {
      type: String,
      default: 'Default'
    },
    label: {
      type: String,
      default: 'input name'
    },
    options: {
      type: Object,
      default() {
        return {
          centerX: 1024,
          scale: 1,
          centerY: 140,
        }
      }
    }
  },
  data() {
    return {
      show: {
        delete: false,
      }
    }
  },
  mounted() {
  },
  computed: {
    nodeStyle() {
      return {
        top: this.options.centerY + this.y * this.options.scale + 'px', // remove: this.options.offsetTop + 
        left: this.options.centerX + this.x * this.options.scale + 'px', // remove: this.options.offsetLeft + 
        transform: `scale(${this.options.scale})`,
      }
    }
  },
  methods: {
    handleMousedown(e) {
      const target = e.target || e.srcElement;
      // console.log(target);
      if (target.className.indexOf('node-input') < 0 && target.className.indexOf('node-output') < 0) {
        this.$emit('nodeSelected', e);
      }
      e.preventDefault();
    },
    handleMouseOver() {
      this.show.delete = true;
    },
    handleMouseLeave() {
      this.show.delete = false;
    },
    outputMouseDown(e) {
      this.$emit('linkingStart')
      e.preventDefault();
    },
    inputMouseDown(e) {
      e.preventDefault();
    },
    inputMouseUp(e) {
      this.$emit('linkingStop')
      e.preventDefault();
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$themeColor: rgb(255, 136, 85);
$portSize: 12;

.flowchart-node {
  margin: 0;
  width: 80px;
  height: 80px;
  position: absolute;
  box-sizing: border-box;
  border: none;
  background: white;
  z-index: 1;
  opacity: .9;
  cursor: move;
  transform-origin: top left;
  .node-main {
    text-align: center;
    .node-type {
      background: $themeColor;
      color: white;
      font-size: 13px;
      padding: 6px;
    }
    .node-label {
      font-size: 13px;
    }
  }
  .node-port {
    position: absolute;
    width: #{$portSize}px;
    height: #{$portSize}px;
    left: 50%;
    transform: translate(-50%);
    border: 1px solid #ccc;
    border-radius: 100px;
    background: white;
    &:hover {
      background: $themeColor;
      border: 1px solid $themeColor;
    }
  }
  .node-input {
    top: #{-2+$portSize/-2}px;
  }
  .node-output {
    bottom: #{-2+$portSize/-2}px;
  }
  .node-delete {
    position: absolute;
    right: -6px;
    top: -6px;
    font-size: 12px;
    width: 12px;
    height: 12px;
    color: $themeColor;
    cursor: pointer;
    background: white;
    border: 1px solid $themeColor;
    border-radius: 100px;
    text-align: center;
    &:hover{
      background: $themeColor;
      color: white;
    }
  }
}
.selected {
  box-shadow: 0 0 0 2px $themeColor;
}
</style>
