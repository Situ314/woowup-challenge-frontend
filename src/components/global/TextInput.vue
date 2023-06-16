<template>
    <div>
        <label 
            class="
                block 
                uppercase 
                tracking-wide 
                text-xs 
                font-bold 
                mb-2 
            "
            :class="[labelColor ? 'text-gray-900' : 'text-gray-100']"
        >
            {{ label }}
        </label>
        <input 
            v-if="readOnly"
            :placeholder="placeholder"
            class="
                appearance-none
                block
                w-full
                bg-slate-400
                text-gray-700
                border
                border-gray-400
                rounded
                py-3
                px-4
                leading-tight
                focus:outline-none
                focus:border-gray-500
                "
            :class="[readOnly ? 'read-only:bg-zinc-300' : '']"
            :readOnly="readOnly"
            :type="inputType"
            v-model="inputComputed"
        >
        <input 
            v-else
            :placeholder="placeholder"
            class="
                appearance-none
                block
                w-full
                bg-zinc-50
                text-gray-700
                border
                border-gray-400
                rounded
                py-3
                px-4
                leading-tight
                focus:outline-none
                focus:bg-sky-50
                focus:border-gray-500
                "
            :class="[readOnly ? 'read-only:bg-gray-100' : '']"
            :type="inputType"
            v-model="inputComputed"
        >
        <span v-if="error" class="text-red-500">
            {{ error }}
        </span>
    </div>
                    
</template>

<script setup>
    import { defineProps, defineEmits, toRefs, computed } from 'vue'

    const emit = defineEmits(['update:input'])

    const props = defineProps({
        label: String,
        labelColor: { type: Boolean, default: true },
        readOnly: { type: Boolean, default: false },
        input: String,
        placeholder: { type: String, default: '' },
        inputType: String,
        error: String
    })

    const { label, labelColor, readOnly, input, placeholder, error } = toRefs(props)

    const inputComputed = computed({
        get: () => input.value,
        set: (val) => emit('update:input', val)
    })
</script>