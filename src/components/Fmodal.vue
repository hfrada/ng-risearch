<template>
  <div class="modal" :style="{ display: modal }" @click.stop.self="modal = 'none'">
    <div class="modal-content" :style="{ display: modal }">
      <div class="modal-header">
        <span class="close" @click.stop="modal = 'none'">&times;</span>
        <slot name="header">
          <h3>{{ title }}</h3>
        </slot>
      </div>
      <div class="modal-body">
        <slot>
          <h3>Example modal content</h3>
        </slot>
      </div>
      <div class="modal-footer">
        <slot name="footer">
          <h3 v-if="footext.length > 0">{{ footext }}</h3>
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    title: {
      type: String,
      default: () => {
        return 'Modal Title'
      }
    },
    footext: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  data () {
    return {
      modal: 'none'
    }
  },
  watch: {
    open (val) {
      this.modal = val ? 'block' : 'none'
    },
    modal (val) {
      val === 'block' || this.$emit('onclose')
    }
  }
}
</script>
<style lang="css" scoped>
.modal {
  display: none;
  position: fixed;
  z-index: 9999;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  margin-right: 20px;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal-body {
  padding: 6px 16px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
</style>
