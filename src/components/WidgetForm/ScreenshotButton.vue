<template>
  <button
    type="button"
    @click="handleTakeScreenshot"
    class="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
  >
    <Loading v-if="isTakingScreenshot" />
    <PhCamera class="w-6 h-6" v-else />
  </button>
  <button
    v-if="screenshot"
    type="button"
    class="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
    @click="onSreenshotTook(null)"
    :style="{
      backgroundImage: `url(${screenshot})`,
      backgroundPosition: 'right bottom',
      backgroundSize: 180,
    }"
  >
    <PhTrash weigth="fill" />
  </button>
</template>

<!-- <script lang="ts">
// check: https://github.com/johnsoncodehk/volar/issues/1232
interface ScreenshotButtonProps {
  screenshot: string | null;
  onSreenshotTook: (screenshot: string | null) => void;
}
</script> -->

<script setup lang="ts">
import { ref } from "vue";
import Loading from "../Loading.vue";
import html2canvas from "html2canvas";

/******* A WAY TS */
// const props = defineProps({
//   screenshot: {
//     type: String || null,
//   },
//   onSreenshotTook: { type: Function, default: () => [] },
// });

/******* ANOTHER WAY TS */
defineProps<{
  screenshot: string | null;
  // onSreenshotTook: (screenshot: string | null) => void;
}>();

// const props = defineProps<ScreenshotButtonProps>();

const emits = defineEmits<{
  (e: "onSreenshotTook", screeshot: string | null): void;
}>();

const onSreenshotTook = (screenshot: string | null): void => {
  emits("onSreenshotTook", screenshot);
};

const isTakingScreenshot = ref(false);

const handleTakeScreenshot = async () => {
  isTakingScreenshot.value = true;
  // check: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const canvas = await html2canvas(document.querySelector("html")!);
  const base64image = canvas.toDataURL("image/png");
  emits("onSreenshotTook", base64image);
  isTakingScreenshot.value = false;
};
</script>

<style lang="scss" scoped></style>
