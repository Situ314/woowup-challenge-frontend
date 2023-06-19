<template>
    <router-link 
        class="
            float-right
            font-semibold
            py-2
            px-4
            border
            rounded
            bg-teal-600
            text-white
        "
        :class="[color ? 'hover:bg-teal-500 border-' + color + '-500' : '']"
        :to="url"
    >
        {{ btnText}}
    </router-link>              
</template>

<script setup>
    import { defineProps, toRefs } from 'vue'

    const props = defineProps({
        btnText: String, 
        url: { type: String, default: '' }, 
        color: String,
        icon: String
    })
    const { btnText, url, color } = toRefs(props)

</script>