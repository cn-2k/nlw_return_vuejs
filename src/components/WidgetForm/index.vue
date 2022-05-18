<template>
  <div></div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

import bugImageUrl from "@/assets/bug.svg";
import ideaImageUrl from "@/assets/idea.svg";
import otherImageUrl from "@/assets/other.svg";

type FeedbackType = keyof typeof feedbackTypes;

const feedbackTypes = {
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

const feedbackType = ref<null | FeedbackType>();
const feedbackSent = ref(false);

const handleRestartFeedback = () => {
  feedbackSent.value = false;
  feedbackType.value = null;
};
</script>

<style scoped></style>
