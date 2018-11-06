<template>
    <button class="navbar-toggler" type="button"
            data-toggle="collapse"
            :data-target="target"
            :aria-controls="target"
            :aria-expanded="toggled"
            aria-label="Toggle navigation">
        <span>
          <i class="xi-2x xi-bars"
             :style="{'color': navColor}"
          ></i>
        </span>
    </button>
</template>
<script>
export default {
  props: {
    target: {
      type: [String, Number],
      description: "Button target element"
    },
    toggled: {
      type: String,
      default: "false",
      description: "Whether button is toggled"
    },
    navColor: {
      type: String,
      default: "white",
      description: "Color of Nav Button"
    }
  }
};
</script>
<style scoped lang="scss">
@media (max-device-width: 768px) {
  button {
    padding-right: 0;
    border-right-style: none;
  }
}
</style>
