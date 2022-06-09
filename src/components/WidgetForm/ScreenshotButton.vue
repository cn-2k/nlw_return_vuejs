<template>
  <button
    id="screenshot-button"
    v-if="!screenshot"
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
    class="bg-cover p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
    @click="$emit('onSreenshotTook', null)"
    :style="{
      backgroundImage: `url(${screenshot})`,
    }"
  >
    <PhTrash weigth="fill" />
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Loading from "../Loading.vue";
import html2canvas from "html2canvas";

defineProps<{
  screenshot: string | null;
}>();

const emits = defineEmits<{
  (e: "onSreenshotTook", value: string | null): void;
}>();

const isTakingScreenshot = ref<boolean>(false);

const handleTakeScreenshot = async (): Promise<void> => {
  isTakingScreenshot.value = true;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const canvas = await html2canvas(document.querySelector("html")!);
  const base64image = canvas.toDataURL("image/png");
  emits("onSreenshotTook", base64image);
  isTakingScreenshot.value = false;
};
</script>

<style lang="scss" scoped></style>
