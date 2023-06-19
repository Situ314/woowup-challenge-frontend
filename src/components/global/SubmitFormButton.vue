<template>
    <button
        class="
        float-right
            font-semibold
            py-2
            px-4
            border
            rounded
            text-white
            bg-teal-600
            no-underline
        "
        :class="[color ? 'hover:bg-teal-500 hover:border-teal-500' : '']"
        @click="$emit('submit', true)"
    >
        <i class=""></i>{{ btnText }}
    </button>              
</template>

<script setup>
    import { defineProps, toRefs } from 'vue'

    const props = defineProps({
        btnText: String,
        color: String
    })
    const { btnText, color } = toRefs(props)

</script>