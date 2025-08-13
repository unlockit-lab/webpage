<template>
  <div class="flex items-center space-x-3">
    <!-- Custom UnlockIT Logo with Open Padlock -->
    <div class="relative">
      <svg :width="size" :height="size" viewBox="0 0 100 100" class="drop-shadow-sm">
        <!-- Gradient Definitions -->
        <defs>
          <linearGradient id="padlockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#0c8aff;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#0056d6;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="keyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#22c55e;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#16a34a;stop-opacity:1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <!-- Background Circle -->
        <circle cx="50" cy="50" r="45" fill="url(#padlockGradient)" opacity="0.1"/>
        
        <!-- Open Padlock Body -->
        <rect x="35" y="45" width="30" height="25" rx="4" ry="4" 
              fill="url(#padlockGradient)" stroke="#ffffff" stroke-width="1"/>
        
        <!-- Padlock Shackle (Open) -->
        <path d="M 42 45 L 42 35 Q 42 25 50 25 Q 58 25 58 35 L 58 40" 
              stroke="url(#padlockGradient)" stroke-width="3" 
              fill="none" stroke-linecap="round"/>
        
        <!-- Lock Keyhole -->
        <circle cx="50" cy="55" r="3" fill="#ffffff"/>
        <rect x="49" y="55" width="2" height="6" fill="#ffffff"/>
        
        <!-- Key (positioned as if unlocking) -->
        <g transform="translate(65, 35) rotate(15)">
          <!-- Key shaft -->
          <rect x="0" y="2" width="12" height="2" fill="url(#keyGradient)" rx="1"/>
          <!-- Key head -->
          <circle cx="0" cy="3" r="3" fill="url(#keyGradient)"/>
          <!-- Key teeth -->
          <rect x="10" y="0" width="2" height="2" fill="url(#keyGradient)"/>
          <rect x="8" y="0" width="2" height="1.5" fill="url(#keyGradient)"/>
        </g>
        
        <!-- Unlock sparkles/effect -->
        <g opacity="0.8">
          <!-- Sparkle 1 -->
          <g transform="translate(30, 30)">
            <path d="M 0 -3 L 1 -1 L 3 0 L 1 1 L 0 3 L -1 1 L -3 0 L -1 -1 Z" 
                  fill="#22c55e" opacity="0.7">
              <animateTransform attributeName="transform" type="rotate" 
                                values="0;360" dur="3s" repeatCount="indefinite"/>
            </path>
          </g>
          
          <!-- Sparkle 2 -->
          <g transform="translate(70, 25)">
            <path d="M 0 -2 L 0.5 -0.5 L 2 0 L 0.5 0.5 L 0 2 L -0.5 0.5 L -2 0 L -0.5 -0.5 Z" 
                  fill="#0c8aff" opacity="0.6">
              <animateTransform attributeName="transform" type="rotate" 
                                values="360;0" dur="4s" repeatCount="indefinite"/>
            </path>
          </g>
          
          <!-- Sparkle 3 -->
          <g transform="translate(25, 65)">
            <path d="M 0 -1.5 L 0.5 -0.5 L 1.5 0 L 0.5 0.5 L 0 1.5 L -0.5 0.5 L -1.5 0 L -0.5 -0.5 Z" 
                  fill="#22c55e" opacity="0.5">
              <animateTransform attributeName="transform" type="rotate" 
                                values="0;360" dur="5s" repeatCount="indefinite"/>
            </path>
          </g>
        </g>
      </svg>
    </div>
    
    <!-- Brand Text -->
    <div v-if="showText" class="flex flex-col">
      <span :class="textClasses" class="font-bold tracking-tight">UnlockIT</span>
      <span v-if="showTagline" :class="taglineClasses" class="text-xs opacity-80 tracking-wide">
        AI & IT Training
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: number
  showText?: boolean
  showTagline?: boolean
  textColor?: string
  variant?: 'light' | 'dark'
}

const props = withDefaults(defineProps<Props>(), {
  size: 40,
  showText: true,
  showTagline: false,
  textColor: '',
  variant: 'light'
})

const textClasses = computed(() => {
  const baseClasses = 'font-bold tracking-tight'
  if (props.textColor) return `${baseClasses} ${props.textColor}`
  return props.variant === 'dark' ? `${baseClasses} text-white` : `${baseClasses} text-gray-900`
})

const taglineClasses = computed(() => {
  const baseClasses = 'text-xs opacity-80 tracking-wide'
  if (props.textColor) return `${baseClasses} ${props.textColor}`
  return props.variant === 'dark' ? `${baseClasses} text-gray-200` : `${baseClasses} text-gray-600`
})
</script>
