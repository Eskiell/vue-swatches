<template>
  <div id="app">
    <div>
      <h2>Inline Swatches</h2>

      <div style="background-color:tomato">
        <v-swatches
          v-model="colorInline"
          inline
          :swatches="swatchesArray"
          :spacing-size="10"
          background-color="transparent"
          show-border
        />
      </div>

      <h2>Popover</h2>
      <v-swatches>
        <button slot="trigger">Open</button>
      </v-swatches>
    </div>
    <h2>Popover to Top and Left</h2>
    <div class="flexbox">
      <v-swatches
        v-model="color1"
        popover-y="top"
        popover-x="left"
        show-labels
        show-fallback
        fallback-input-type="color"
        :spacing-size="20"
      />
      <v-swatches :value="color1" popover-y="top" popover-x="left" />
    </div>
    <h2>Popover to Top and Right</h2>
    <div class="flexbox">
      <v-swatches
        popover-y="top"
        popover-x="right"
        :swatches="[
          { color: '#ffffff', showBorder: true },
          { color: '#ffffff' },
          { color: '#ffffff', showBorder: true }
        ]"
      />
      <v-swatches popover-y="top" popover-x="right" />
    </div>
    <h2>Popover to Bottom and Left</h2>
    <div class="flexbox">
      <v-swatches
        popover-y="bottom"
        popover-x="left"
        :swatches="swatchesArray"
        showLabels
      />
      <v-swatches popover-y="bottom" popover-x="left" />
    </div>

    <h2>Popover to Bottom and Right</h2>
    <div class="flexbox">
      <v-swatches popover-y="bottom" popover-x="right" />
      <v-swatches popover-y="bottom" popover-x="right" />
    </div>
  </div>
</template>

<script>
export default {
  name: "app-demo",
  data: () => ({
    colorInline: null,
    color1: "#1FBC9C",
    swatchesArray: [
      { color: "#1FBC9C", label: "" },
      { color: "#1CA085", label: "Green 2" },
      { color: "#2ECC70", label: "Green 3" },
      { color: "#27AF60", label: "Green 4" },
      { showBorder: false, color: "#3398DB", label: "Blue 1" },
      { showBorder: false, color: "#2980B9", label: "Blue 2" },
      { showBorder: false, color: "#A463BF", label: "Purple1" },
      { showBorder: false, color: "#8E43AD", label: "Purple2" },
      { showBorder: false, color: "#3D556E", label: "Gray" },
      { showBorder: false, color: "#222F3D", label: "Black" },
      { showBorder: false, color: "#F2C511", label: "Yellow" },
      { showBorder: false, color: "#F39C19", label: "Orange" },
      { showBorder: false, color: "#E84B3C", label: "Red 1" },
      { showBorder: false, color: "#C0382B", label: "Red 2" },
      { disabled: true, color: "#DDE6E8", label: "Sliver 1" },
      { disabled: true, color: "#BDC3C8", label: "Silver 2" }
    ]
  })
};
</script>

<style>
*,
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  box-sizing: border-box;
}

.flexbox {
  display: flex;
  justify-content: space-between;
}
</style>
