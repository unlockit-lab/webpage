<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <nav class="fixed w-full top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"/>
              </svg>
            </div>
            <router-link to="/" class="text-xl font-bold text-gray-900 hover:text-primary-600 transition-colors">
              UnlockIT
            </router-link>
          </div>
          <div class="hidden md:flex items-center space-x-8">
            <router-link to="/#courses" class="text-gray-600 hover:text-primary-600 font-medium transition-colors">{{ $t('nav.courses') }}</router-link>
            <router-link to="/enterit" class="text-gray-600 hover:text-primary-600 font-medium transition-colors relative">
              {{ $t('nav.enterit') }}
              <span class="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </router-link>
            <a href="#about" class="text-gray-600 hover:text-primary-600 font-medium transition-colors">{{ $t('nav.about') }}</a>
            <a href="#contact" class="text-gray-600 hover:text-primary-600 font-medium transition-colors">{{ $t('nav.contact') }}</a>
            
            <!-- Language Switcher -->
            <div class="relative" ref="languageMenu">
              <button 
                @click="languageMenuOpen = !languageMenuOpen"
                class="flex items-center space-x-1 text-gray-600 hover:text-primary-600 font-medium transition-colors"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 12.236 11.618 14z" clip-rule="evenodd"/>
                </svg>
                <span>{{ currentLocale.toUpperCase() }}</span>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
              </button>
              <div v-if="languageMenuOpen" class="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                <div class="py-1">
                  <button 
                    @click="changeLanguage('en')" 
                    class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    :class="{ 'bg-primary-50 text-primary-600': currentLocale === 'en' }"
                  >
                    🇺🇸 English
                  </button>
                  <button 
                    @click="changeLanguage('pl')" 
                    class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    :class="{ 'bg-primary-50 text-primary-600': currentLocale === 'pl' }"
                  >
                    🇵🇱 Polski
                  </button>
                </div>
              </div>
            </div>
            
            <button class="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors">
              {{ $t('nav.getStarted') }}
            </button>
          </div>
          <button class="md:hidden p-2" @click="mobileMenuOpen = !mobileMenuOpen">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t border-gray-100">
        <div class="px-4 py-2 space-y-2">
          <router-link to="/#courses" class="block px-3 py-2 text-gray-600 hover:text-primary-600 font-medium">{{ $t('nav.courses') }}</router-link>
          <router-link to="/enterit" class="block px-3 py-2 text-gray-600 hover:text-primary-600 font-medium flex items-center">
            {{ $t('nav.enterit') }}
            <span class="ml-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </router-link>
          <a href="#about" class="block px-3 py-2 text-gray-600 hover:text-primary-600 font-medium">{{ $t('nav.about') }}</a>
          <a href="#contact" class="block px-3 py-2 text-gray-600 hover:text-primary-600 font-medium">{{ $t('nav.contact') }}</a>
          <div class="border-t border-gray-200 pt-2">
            <button 
              @click="changeLanguage('en')" 
              class="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary-600 font-medium"
              :class="{ 'text-primary-600': currentLocale === 'en' }"
            >
              🇺🇸 English
            </button>
            <button 
              @click="changeLanguage('pl')" 
              class="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary-600 font-medium"
              :class="{ 'text-primary-600': currentLocale === 'pl' }"
            >
              🇵🇱 Polski
            </button>
          </div>
          <button class="w-full mt-2 bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors">
            {{ $t('nav.getStarted') }}
          </button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <router-view />

    <!-- Footer -->
    <footer id="contact" class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-8">
          <div class="col-span-2">
            <div class="flex items-center space-x-2 mb-4">
              <div class="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"/>
                </svg>
              </div>
              <span class="text-xl font-bold">UnlockIT</span>
            </div>
            <p class="text-gray-400 mb-4 max-w-md">
              {{ $t('footer.description') }}
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 class="font-semibold mb-4">{{ $t('footer.courses') }}</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">{{ $t('courses.aiFundamentals.title') }}</a></li>
              <li><a href="#" class="hover:text-white transition-colors">{{ $t('courses.webDevelopment.title') }}</a></li>
              <li><a href="#" class="hover:text-white transition-colors">{{ $t('courses.itEssentials.title') }}</a></li>
              <li><a href="#" class="hover:text-white transition-colors">{{ $t('footer.programmingBasics') }}</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-4">{{ $t('footer.company') }}</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">{{ $t('footer.aboutUs') }}</a></li>
              <li><router-link to="/enterit" class="hover:text-white transition-colors flex items-center">
                {{ $t('nav.enterit') }}
                <span class="ml-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </router-link></li>
              <li><a href="#" class="hover:text-white transition-colors">{{ $t('footer.instructors') }}</a></li>
              <li><a href="#" class="hover:text-white transition-colors">{{ $t('nav.contact') }}</a></li>
              <li><a href="#" class="hover:text-white transition-colors">{{ $t('footer.careers') }}</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {{ $t('footer.copyright') }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

const mobileMenuOpen = ref(false)
const languageMenuOpen = ref(false)
const languageMenu = ref<HTMLElement | null>(null)

const currentLocale = computed(() => locale.value)

const changeLanguage = (lang: string) => {
  locale.value = lang
  localStorage.setItem('locale', lang)
  languageMenuOpen.value = false
}

// Close language menu when clicking outside
const handleClickOutside = (event: Event) => {
  if (languageMenu.value && !languageMenu.value.contains(event.target as Node)) {
    languageMenuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
