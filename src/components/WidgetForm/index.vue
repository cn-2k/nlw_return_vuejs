<template>
  <div
    class="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto"
  >
    <FeedbackSucessStep
      @onFeedbackRestartRequested="() => handleRestartFeedback()"
      v-if="feedbackSent"
    />
    <FeedbackTypeStep
      @onFeedbackTypeChanged="(key) => (feedbackType = key)"
      v-else-if="!feedbackType"
    />
    <FeedbackContentStep
      :feedbackType="feedbackType"
      @onFeedbackRestartRequested="() => handleRestartFeedback()"
      @onFeedbackSent="() => (feedbackSent = true)"
      v-else
    />
    <footer class="text-xs text-neutral-400">
      Feito com ♥ por
      <a
        class="underline underline-offset-2"
        href="https://github.com/caio-2k/"
        target="_blank"
      >
        Caio Vinicius
      </a>
    </footer>
  </div>
</template>

<script lang="ts">
export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: otherImageUrl,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;
</script>

<script setup lang="ts">
import { ref } from "vue";

import bugImageUrl from "@/assets/bug.svg";
import ideaImageUrl from "@/assets/idea.svg";
import otherImageUrl from "@/assets/other.svg";
import FeedbackSucessStep from "./Steps/FeedbackSuccessStep.vue";
import FeedbackTypeStep from "./Steps/FeedbackTypeStep.vue";
import FeedbackContentStep from "./Steps/FeedbackContentStep.vue";

const feedbackType = ref<FeedbackType | null>(null);
const feedbackSent = ref<boolean>(false);

const handleRestartFeedback = (): void => {
  feedbackSent.value = false;
  feedbackType.value = null;
};
</script>

<style scoped></style>
