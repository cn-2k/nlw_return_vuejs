<template>
  <section>
    <header class="text-center">
      <span class="text-xl leading-6">Deixe seu feedback</span>
      <CloseButton />
    </header>
    <div class="flex py-8 gap-2 w-full">
      <button
        v-for="(value, key) in feedbackTypes"
        :key="key"
        type="button"
        class="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none transition-colors"
        @click="$emit('onFeedbackTypeChanged', key as FeedbackType)"
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

defineEmits<{
  (e: "onFeedbackTypeChanged", value: FeedbackType): void;
}>();
</script>

<style scoped></style>
