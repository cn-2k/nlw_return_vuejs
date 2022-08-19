<template>
  <section>
    <header class="text-center mt-10 lg:mt-0">
      <span class="text-xl leading-6">Deixe seu feedback</span>
      <CloseButton />
    </header>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 my-4">
      <button
        id="feedback-type-button"
        v-for="(value, key) in feedbackTypes"
        :key="key"
        type="button"
        class="bg-zinc-800 rounded-lg py-5 w-36 lg:w-24 flex-1 flex flex-col items-center mx-auto gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none transition-colors"
        @click="$emit('onFeedbackTypeChanged', key as FeedbackType); widgetState.currentType = value.title"
      >
        <img :src="value.image.source" :alt="value.image.alt" />
        <span>{{ value.title }}</span>
      </button>
    </div>
  </section>
</template>

<script lang="ts"></script>

<script setup lang="ts">
import CloseButton from "@/components/CloseButton.vue";
import { feedbackTypes, type FeedbackType } from "../index.vue";
import { useWidget } from "@/stores/widget";
import { watch } from "vue";

const widgetState = useWidget();

watch(
  () => widgetState.currentType,
  () => {
    widgetState.comment = "";
    widgetState.screenshot = "";
  }
);

defineEmits<{
  (e: "onFeedbackTypeChanged", value: FeedbackType): void;
}>();
</script>

<style scoped></style>
