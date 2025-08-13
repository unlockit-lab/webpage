<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <nav class="fixed w-full top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <UnlockITLogo :size="32" :show-text="true" :show-tagline="false" />
          <div class="hidden md:flex items-center space-x-8">
            <a href="#courses" class="text-gray-600 hover:text-primary-600 font-medium transition-colors">{{ $t('nav.courses') }}</a>
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
          <a href="#courses" class="block px-3 py-2 text-gray-600 hover:text-primary-600 font-medium">{{ $t('nav.courses') }}</a>
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

    <!-- Hero Section -->
    <section class="pt-20 pb-16 lg:pt-28 lg:pb-24 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div class="mb-12 lg:mb-0">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-slide-up">
              {{ $t('hero.title') }}
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
                {{ $t('hero.titleHighlight') }}
              </span>
            </h1>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed animate-slide-up">
              {{ $t('hero.subtitle') }}
            </p>
            <div class="flex flex-col sm:flex-row gap-4 animate-slide-up">
              <button class="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                {{ $t('hero.startLearning') }}
              </button>
              <button class="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-primary-600 hover:text-primary-600 transition-colors">
                {{ $t('hero.viewCourses') }}
              </button>
            </div>
            <div class="mt-8 flex items-center space-x-6 text-sm text-gray-500">
              <div class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-success-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>{{ $t('hero.students') }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-success-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>{{ $t('hero.instructors') }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-success-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>{{ $t('hero.jobReady') }}</span>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="relative z-10 animate-float">
              <div class="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-2xl">
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-white rounded-lg p-4 shadow-md">
                    <div class="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mb-3">
                      <svg class="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <h3 class="font-semibold text-gray-900 mb-1">{{ $t('courseCards.aiBasics') }}</h3>
                    <p class="text-sm text-gray-600">{{ $t('courseCards.aiDescription') }}</p>
                  </div>
                  <div class="bg-white rounded-lg p-4 shadow-md">
                    <div class="w-8 h-8 bg-success-100 rounded-lg flex items-center justify-center mb-3">
                      <svg class="w-5 h-5 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                      </svg>
                    </div>
                    <h3 class="font-semibold text-gray-900 mb-1">{{ $t('courseCards.programming') }}</h3>
                    <p class="text-sm text-gray-600">{{ $t('courseCards.programmingDescription') }}</p>
                  </div>
                  <div class="bg-white rounded-lg p-4 shadow-md">
                    <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                      <svg class="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <h3 class="font-semibold text-gray-900 mb-1">{{ $t('courseCards.webDev') }}</h3>
                    <p class="text-sm text-gray-600">{{ $t('courseCards.webDevDescription') }}</p>
                  </div>
                  <div class="bg-white rounded-lg p-4 shadow-md">
                    <div class="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                      <svg class="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <h3 class="font-semibold text-gray-900 mb-1">{{ $t('courseCards.itSkills') }}</h3>
                    <p class="text-sm text-gray-600">{{ $t('courseCards.itDescription') }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full opacity-20 animate-pulse"></div>
            <div class="absolute -top-4 -left-4 w-48 h-48 bg-gradient-to-br from-success-200 to-success-300 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="courses" class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {{ $t('features.title') }}
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            {{ $t('features.subtitle') }}
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ $t('features.beginnerFriendly.title') }}</h3>
            <p class="text-gray-600 leading-relaxed">
              {{ $t('features.beginnerFriendly.description') }}
            </p>
          </div>
          
          <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ $t('features.handsOn.title') }}</h3>
            <p class="text-gray-600 leading-relaxed">
              {{ $t('features.handsOn.description') }}
            </p>
          </div>
          
          <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ $t('features.expertSupport.title') }}</h3>
            <p class="text-gray-600 leading-relaxed">
              {{ $t('features.expertSupport.description') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Courses Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {{ $t('courses.title') }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ $t('courses.subtitle') }}
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
            <div class="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
              <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ $t('courses.aiFundamentals.title') }}</h3>
              <p class="text-gray-600 mb-4">{{ $t('courses.aiFundamentals.description') }}</p>
              <div class="flex items-center justify-between">
                <span class="text-2xl font-bold text-primary-600">$199</span>
                <span class="text-sm text-gray-500">{{ $t('courses.aiFundamentals.duration') }}</span>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
            <div class="h-48 bg-gradient-to-br from-success-400 to-success-600 flex items-center justify-center">
              <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ $t('courses.webDevelopment.title') }}</h3>
              <p class="text-gray-600 mb-4">{{ $t('courses.webDevelopment.description') }}</p>
              <div class="flex items-center justify-between">
                <span class="text-2xl font-bold text-primary-600">$299</span>
                <span class="text-sm text-gray-500">{{ $t('courses.webDevelopment.duration') }}</span>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
            <div class="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
              <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ $t('courses.itEssentials.title') }}</h3>
              <p class="text-gray-600 mb-4">{{ $t('courses.itEssentials.description') }}</p>
              <div class="flex items-center justify-between">
                <span class="text-2xl font-bold text-primary-600">$249</span>
                <span class="text-sm text-gray-500">{{ $t('courses.itEssentials.duration') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-br from-primary-600 to-primary-800">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
          {{ $t('cta.title') }}
        </h2>
        <p class="text-xl text-primary-100 mb-8">
          {{ $t('cta.subtitle') }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            {{ $t('cta.browseAll') }}
          </button>
          <button class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
            {{ $t('cta.talkAdvisor') }}
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer id="contact" class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-8">
          <div class="col-span-2">
            <UnlockITLogo :size="32" :show-text="true" :show-tagline="true" variant="dark" class="mb-4" />
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
