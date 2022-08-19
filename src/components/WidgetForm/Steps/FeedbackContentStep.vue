<template>
  <div class="flex flex-col items-center" id="feedback-type-content">
    <header>
      <button
        type="button"
        class="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        @click="$emit('onFeedbackRestartRequested')"
      >
        <PhArrowLeft weight="bold" class="w-4 h-4" />
      </button>

      <span class="text-xl leading-6 flex items-center gap-2">
        <img
          :src="feedbackTypeInfo.image.source"
          :alt="feedbackTypeInfo.image.alt"
          class="w-6 h-6"
        />
        {{ feedbackTypeInfo.title }}
      </span>
      <CloseButton />
    </header>

    <form @submit.prevent="handleSubmitFeedback" class="my-4 w-full">
      <textarea
        id="feedback-type-text-area"
        v-model="widgetState.comment"
        class="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
        placeholder="Conte com detalhes o que está acontecendo..."
      />

      <footer class="flex gap-2 mt-2">
        <ScreenshotButton
          :screenshot="widgetState.screenshot"
          @onSreenshotTook="(value: any) => (widgetState.screenshot = value)"
        />
        <button
          id="send-feedback-button"
          type="submit"
          :disabled="widgetState.comment.length === 0 || isSendingFeedback"
          class="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:bg-brand-500"
        >
          <span v-if="!isSendingFeedback">Enviar Feedback</span>
          <span v-if="isSendingFeedback"><Loading /></span>
        </button>
      </footer>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, type PropType } from "vue";
import { feedbackTypes, type FeedbackType } from "../index.vue";
import ScreenshotButton from "../ScreenshotButton.vue";
import CloseButton from "@/components/CloseButton.vue";
import { api } from "@/services/api";
import Loading from "../../Loading.vue";
import { useWidget } from "@/stores/widget";

const widgetState = useWidget();

const props = defineProps({
  feedbackType: {
    type: [String, Object, Array] as PropType<FeedbackType | null>,
    required: true,
  },
});

// const screenshot = ref<string | null>(null);
const isSendingFeedback = ref<boolean>(false);

const feedbackTypeInfo = feedbackTypes[props.feedbackType as FeedbackType]; // 👈️ type assertion

const emits = defineEmits<{
  (e: "onFeedbackRestartRequested"): void;
  (e: "onFeedbackSent"): void;
}>();

async function handleSubmitFeedback(): Promise<void> {
  isSendingFeedback.value = true;
  await api.post("/feedbacks", {
    type: props.feedbackType,
    comment: widgetState.comment,
    screenshot: widgetState.screenshot,
  });

  emits("onFeedbackSent");
  isSendingFeedback.value = false;
}
</script>

<style scoped></style>
