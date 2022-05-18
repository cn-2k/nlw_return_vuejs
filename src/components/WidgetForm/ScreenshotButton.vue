<template>
  <button
    type="button"
    @click="handleTakeScreenshot"
    class="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
  >
    <!-- {isTakingScreenshot ? <Loading /> : <PhCamera className="w-6 h-6" />} -->
    <span v-if="isTakingScreenshot"><Loading /></span>
    <span v-else><PhCamera class="w-6 h-6" /></span>
  </button>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import Loading from "../Loading.vue";
import html2canvas from "html2canvas";

// interface ScreenshotButtonProps {
//   screenshot: string | null;
//   onSreenshotTook: (screenshot: string | null) => void;
// }

const props = defineProps({
  screenshot: {
    type: String || null,
  },
  onScreenshotTook: { type: Function, default: () => [] },
});

const isTakingScreenshot = ref(false);

const handleTakeScreenshot = async () => {
  isTakingScreenshot.value = true;
  const canvas = await html2canvas(document.querySelector("html")!);
  const base64image = canvas.toDataURL("image/png");
  props.onScreenshotTook(base64image);
  isTakingScreenshot.value = false;
};
</script>

<style lang="scss" scoped></style>
