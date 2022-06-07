<template>
  <Popover
    class="fixed bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end"
  >
    <PopoverPanel id="widget-popover"><WidgetForm /></PopoverPanel>

    <PopoverButton
      class="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group"
      id="widget-button"
    >
      <PhChatTeardropDots class="w-6 h-6" />

      <span
        class="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear"
      >
        <span class="pl-2"></span>
        Feedback
      </span>
    </PopoverButton>
  </Popover>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import WidgetForm from "./WidgetForm/index.vue";
</script>

<style scoped></style>
