<template>
  <div class="frada-input-group">
    <label :class="`frada-input-underlined ${ !danger || 'frada-input-danger' }`">
      <input required :type="type" :disabled="disabled">
      <span class="frada-input-label">{{ placeholder }}</span>
      <span v-if="helperText.length > 0" class="frada-input-helper">{{ helperText }}</span>
    </label>
  </div>
</template>
<script>
export default {
  props: {
    helperText: {
      type: String,
      default: () => {
        return ''
      }
    },
    placeholder: {
      type: String,
      default: () => {
        return 'Placeholder'
      }
    },
    danger: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    disabled: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    type: {
      type: String,
      default: () => {
        return 'text'
      }
    }
  }
}
</script>
<style lang="css">
:root {
  --frada-color-ink-lowest-contrast: rgba(47, 60, 85, 0.18);
  --frada-color-ink-low-contrast: rgba(60, 60, 67, 0.3);
  --frada-color-ink-medium-contrast: rgba(19, 19, 21, 0.6);
  --frada-color-interaction: #1e4bd1;
  --frada-color-interaction-minus-two: rgba(73, 133, 224, 0.12);
  --frada-color-danger: #b50706;
  --frada-color-bg-low-contrast: #eff1f2;
  --frada-color-ink-high-contrast: #121212;
  --frada-color-bg-high-contrast: #ffffff;
}
/** END: Non Openmrs CSS **/
div.frada-input-group {
  margin-bottom: 1.5rem;
  position: relative;
  width: 20.4375rem;
}

/* Input*/
.frada-input-underlined > input,
.frada-input-filled > input {
  border: none;
  border-bottom: 0.125rem solid var(--frada-color-ink-medium-contrast);
  width: 100%;
  height: 2rem;
  font-size: 1.0625rem;
  padding-left: 0.875rem;
  line-height: 147.6%;
  padding-top: 0.825rem;
  padding-bottom: 0.5rem;
}

.frada-input-underlined > input:focus,
.frada-input-filled > input:focus {
  outline: none;
}

.frada-input-underlined > .frada-input-label,
.frada-input-filled > .frada-input-label {
  position: absolute;
  top: 0.9375rem;
  left: 0.875rem;
  line-height: 147.6%;
  color: var(--frada-color-ink-medium-contrast);
  transition: top .2s;
}

.frada-input-underlined > svg,
.frada-input-filled > svg {
  position: absolute;
  top: 0.9375rem;
  right: 0.875rem;
  fill: var(--frada-color-ink-medium-contrast);
}

.frada-input-underlined > .frada-input-helper,
.frada-input-filled > .frada-input-helper {
  font-size: 0.9375rem;
  color: var(--frada-color-ink-medium-contrast);
  letter-spacing: 0.0275rem;
  margin: 0.125rem 0.875rem;
}

.frada-input-underlined > input:hover,
.frada-input-filled > input:hover {
  background: var(--frada-color-interaction-minus-two);
  border-color: var(--frada-color-ink-high-contrast);
}

.frada-input-underlined > input:focus + .frada-input-label,
.frada-input-underlined > input:valid + .frada-input-label,
.frada-input-filled > input:focus + .frada-input-label,
.frada-input-filled > input:valid + .frada-input-label {
  top: 0;
  font-size: 0.9375rem;
  margin-bottom: 32px;;
}

.frada-input-underlined:not(.frada-input-danger) > input:focus + .frada-input-label,
.frada-input-filled:not(.frada-input-danger) > input:focus + .frada-input-label {
  color: var(--frada-color-interaction);
}

.frada-input-underlined:not(.frada-input-danger) > input:focus,
.frada-input-filled:not(.frada-input-danger) > input:focus {
  border-color: var(--frada-color-interaction);
}

.frada-input-underlined:not(.frada-input-danger) > input:focus ~ svg,
.frada-input-filled:not(.frada-input-danger) > input:focus ~ svg {
  fill: var(--frada-color-ink-high-contrast);
}

/** DISABLED **/

.frada-input-underlined > input:disabled {
  background: var(--frada-color-bg-low-contrast);
  cursor: not-allowed;
}

.frada-input-underlined > input:disabled + .frada-input-label,
.frada-input-underlined > input:disabled ~ .frada-input-helper{
  color: var(--frada-color-ink-low-contrast);
}

.frada-input-underlined > input:disabled ~ svg {
  fill: var(--frada-color-ink-low-contrast);
}

/** DANGER **/

.frada-input-underlined.frada-input-danger > .frada-input-label, .frada-input-underlined.frada-input-danger > .frada-input-helper,
.frada-input-filled.frada-input-danger > .frada-input-label, .frada-input-filled.frada-input-danger > .frada-input-helper{
  color: var(--frada-color-danger);
}

.frada-input-danger > svg {
  fill: var(--frada-color-danger);
}

.frada-input-danger > input {
  border-color: var(--frada-color-danger);
}

.frada-input-underlined > input {
  background: var(--frada-color-bg-high-contrast);
}
.frada-input-filled > input {
  background: var(--frada-color-bg-low-contrast);
}
</style>
