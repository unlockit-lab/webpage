<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section
      class="pt-20 pb-16 lg:pt-28 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-primary-800"
    >
      <div class="max-w-7xl mx-auto text-center">
        <div class="mb-8">
          <span
            class="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4"
          >
            🎯 {{ $t('enterit.badge') }}
          </span>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {{ $t('enterit.title') }}
          </h1>
          <p class="text-xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            {{ $t('enterit.subtitle') }}
          </p>
        </div>

        <!-- Webinar Info Card -->
        <div class="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto mb-8">
          <!-- Countdown Timer -->
          <div class="text-center mb-8">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">
              {{ $t('enterit.countdown.title') }}
            </h3>
            <div class="grid grid-cols-4 gap-4 max-w-md mx-auto">
              <div
                class="bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg p-4 text-white"
              >
                <div class="text-2xl font-bold">{{ timeLeft.days }}</div>
                <div class="text-xs uppercase tracking-wide">
                  {{ $t('enterit.countdown.days') }}
                </div>
              </div>
              <div
                class="bg-gradient-to-br from-success-500 to-success-600 rounded-lg p-4 text-white"
              >
                <div class="text-2xl font-bold">{{ timeLeft.hours }}</div>
                <div class="text-xs uppercase tracking-wide">
                  {{ $t('enterit.countdown.hours') }}
                </div>
              </div>
              <div
                class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-4 text-white"
              >
                <div class="text-2xl font-bold">{{ timeLeft.minutes }}</div>
                <div class="text-xs uppercase tracking-wide">
                  {{ $t('enterit.countdown.minutes') }}
                </div>
              </div>
              <div
                class="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-4 text-white"
              >
                <div class="text-2xl font-bold">{{ timeLeft.seconds }}</div>
                <div class="text-xs uppercase tracking-wide">
                  {{ $t('enterit.countdown.seconds') }}
                </div>
              </div>
            </div>
            <div class="mt-6 p-4 bg-gray-50 rounded-lg border-l-4 border-primary-500">
              <h4 class="text-lg font-semibold text-gray-900 mb-1">
                {{ $t('enterit.date.title') }}
              </h4>
              <p class="text-xl font-bold text-primary-600">{{ webinarDate }}</p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <!-- Duration Card -->
            <div class="p-4 bg-gray-50 rounded-lg border-l-4 border-success-500">
              <div class="flex items-center space-x-3">
                <div
                  class="w-10 h-10 bg-success-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg class="w-5 h-5 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-gray-900 mb-1">
                    {{ $t('enterit.duration.title') }}
                  </h4>
                  <p class="text-xl font-bold text-success-600">
                    {{ $t('enterit.duration.value') }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Format Card -->
            <div class="p-4 bg-gray-50 rounded-lg border-l-4 border-purple-500">
              <div class="flex items-center space-x-3">
                <div
                  class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg class="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-gray-900 mb-1">
                    {{ $t('enterit.format.title') }}
                  </h4>
                  <p class="text-xl font-bold text-purple-600">{{ $t('enterit.format.value') }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Registration CTA -->
          <div class="text-center">
            <button
              class="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              {{ $t('enterit.registerButton') }}
            </button>
            <p class="text-sm text-gray-500 mt-3">{{ $t('enterit.freeEvent') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- What You'll Learn Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {{ $t('enterit.whatYoullLearn.title') }}
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            {{ $t('enterit.whatYoullLearn.subtitle') }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Job Search Module -->
          <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div class="flex items-start space-x-4">
              <div
                class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <svg class="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-3">
                  {{ $t('enterit.modules.jobSearch.title') }}
                </h3>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start space-x-2">
                    <svg
                      class="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>{{ $t('enterit.modules.jobSearch.point1') }}</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <svg
                      class="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>{{ $t('enterit.modules.jobSearch.point2') }}</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <svg
                      class="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>{{ $t('enterit.modules.jobSearch.point3') }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Interview Preparation Module -->
          <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div class="flex items-start space-x-4">
              <div
                class="w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <svg class="w-6 h-6 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-3">
                  {{ $t('enterit.modules.interview.title') }}
                </h3>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start space-x-2">
                    <svg
                      class="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>{{ $t('enterit.modules.interview.point1') }}</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <svg
                      class="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>{{ $t('enterit.modules.interview.point2') }}</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <svg
                      class="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>{{ $t('enterit.modules.interview.point3') }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Recruiters Module -->
          <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div class="flex items-start space-x-4">
              <div
                class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-3">
                  {{ $t('enterit.modules.recruiters.title') }}
                </h3>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start space-x-2">
                    <svg
                      class="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>{{ $t('enterit.modules.recruiters.point1') }}</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <svg
                      class="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>{{ $t('enterit.modules.recruiters.point2') }}</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <svg
                      class="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>{{ $t('enterit.modules.recruiters.point3') }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- AI Learning Module -->
          <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div class="flex items-start space-x-4">
              <div
                class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <svg class="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-3">
                  {{ $t('enterit.modules.aiLearning.title') }}
                </h3>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start space-x-2">
                    <svg
                      class="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>{{ $t('enterit.modules.aiLearning.point1') }}</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <svg
                      class="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>{{ $t('enterit.modules.aiLearning.point2') }}</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <svg
                      class="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>{{ $t('enterit.modules.aiLearning.point3') }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Speaker Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {{ $t('enterit.speaker.title') }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ $t('enterit.speaker.subtitle') }}
          </p>
        </div>

        <div class="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
          <div class="lg:w-1/3">
            <div class="relative">
              <div class="w-64 h-64 rounded-full mx-auto shadow-2xl overflow-hidden bg-gray-100">
                <!-- Profile Image -->
                <img
                  src="/images/michal-wronski.jpg"
                  alt="Michał Wroński - IT Career Coach"
                  class="w-full h-full object-cover object-center"
                  @error="handleImageError"
                />
                <!-- Fallback SVG (hidden by default, shown if image fails) -->
                <div
                  v-if="showFallback"
                  class="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center"
                >
                  <svg class="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <!-- LinkedIn Badge -->
              <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <a
                  href="https://www.linkedin.com/in/michal-wronski-b389a988/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
          <div class="lg:w-2/3 text-center lg:text-left mt-8 lg:mt-0">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ $t('enterit.speaker.name') }}</h3>
            <p class="text-lg text-primary-600 font-semibold mb-4">
              {{ $t('enterit.speaker.role') }}
            </p>
            <p class="text-gray-600 leading-relaxed mb-6">
              {{ $t('enterit.speaker.bio') }}
            </p>
            <div class="flex flex-wrap justify-center lg:justify-start gap-3 mb-4">
              <span
                class="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full"
              >
                {{ $t('enterit.speaker.experience') }}
              </span>
              <span
                class="inline-block bg-success-100 text-success-800 text-sm font-medium px-3 py-1 rounded-full"
              >
                {{ $t('enterit.speaker.expertise1') }}
              </span>
              <span
                class="inline-block bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full"
              >
                {{ $t('enterit.speaker.expertise2') }}
              </span>
            </div>
            <!-- LinkedIn Link for larger screens -->
            <div class="hidden lg:block">
              <a
                href="https://www.linkedin.com/in/michal-wronski-b389a988/"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
                <span>{{ $t('enterit.speaker.viewProfile') }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="py-16 bg-gradient-to-br from-primary-600 to-primary-800">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
          {{ $t('enterit.finalCta.title') }}
        </h2>
        <p class="text-xl text-primary-100 mb-8">
          {{ $t('enterit.finalCta.subtitle') }}
        </p>
        <!-- Email Subscription Form -->
        <div class="max-w-md mx-auto">
          <form @submit.prevent="handleSubscription" class="flex flex-col sm:flex-row gap-4">
            <div class="flex-1">
              <input
                v-model="email"
                type="email"
                :placeholder="$t('enterit.finalCta.emailPlaceholder')"
                required
                class="w-full px-4 py-4 rounded-lg border-2 border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:border-white focus:bg-white/20 transition-all text-lg"
                :disabled="isSubscribing"
              />
            </div>
            <button
              type="submit"
              :disabled="isSubscribing || !email"
              class="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px]"
            >
              <span v-if="!isSubscribing">{{ $t('enterit.finalCta.subscribeButton') }}</span>
              <div v-else class="flex items-center space-x-2">
                <svg class="animate-spin h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24">
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  />
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span>{{ $t('enterit.finalCta.subscribingButton') }}</span>
              </div>
            </button>
          </form>

          <!-- Success/Error Messages -->
          <div v-if="subscriptionStatus" class="mt-4">
            <div
              v-if="subscriptionStatus === 'success'"
              class="bg-green-500/20 border border-green-300 text-white px-4 py-3 rounded-lg"
            >
              {{ $t('enterit.finalCta.successMessage') }}
            </div>
            <div
              v-else-if="subscriptionStatus === 'error'"
              class="bg-red-500/20 border border-red-300 text-white px-4 py-3 rounded-lg"
            >
              {{ $t('enterit.finalCta.errorMessage') }}
            </div>
          </div>
        </div>

        <p class="text-sm text-primary-100 mt-6">
          {{ $t('enterit.finalCta.privacyNote') }}
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import config from '../config'

const { t, locale } = useI18n()

const getWebinarTargetDate = (): Date => {
  const configDate = new Date(config.webinar.targetDate)
  if (!isNaN(configDate.getTime())) {
    return configDate
  }
  return new Date()
}

const webinarTargetDate = getWebinarTargetDate()

const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
})

let countdownInterval: number | null = null

const updateCountdown = () => {
  const now = new Date().getTime()
  const target = webinarTargetDate.getTime()
  const difference = target - now

  if (difference > 0) {
    timeLeft.value = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    }
  } else {
    timeLeft.value = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    if (countdownInterval) {
      clearInterval(countdownInterval)
    }
  }
}

const webinarDate = computed(() => {
  const date = webinarTargetDate.toLocaleDateString(locale.value === 'pl' ? 'pl-PL' : 'en-US', {
    weekday: 'short',
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })
  return date
})

// Profile image error handling
const showFallback = ref(false)

const handleImageError = () => {
  showFallback.value = true
}

// Email subscription functionality
const email = ref('')
const isSubscribing = ref(false)
const subscriptionStatus = ref<'success' | 'error' | null>(null)

const handleSubscription = async () => {
  if (!email.value || isSubscribing.value) return

  isSubscribing.value = true
  subscriptionStatus.value = null

  try {
    // MailerLite API integration
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer YOUR_MAILERLITE_API_KEY', // Replace with your actual API key
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        groups: ['webinar_enterit'], // Replace with your MailerLite group ID
        fields: {
          name: '', // Optional: can be empty for now
          last_name: '',
          webinar: 'EnterIT',
        },
      }),
    })

    if (response.ok) {
      subscriptionStatus.value = 'success'
      email.value = '' // Clear the email field
    } else {
      subscriptionStatus.value = 'error'
    }
  } catch (error) {
    console.error('Subscription error:', error)
    subscriptionStatus.value = 'error'
  } finally {
    isSubscribing.value = false

    // Clear status message after 5 seconds
    setTimeout(() => {
      subscriptionStatus.value = null
    }, 5000)
  }
}

onMounted(() => {
  updateCountdown()
  countdownInterval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (countdownInterval) {
    clearInterval(countdownInterval)
  }
})
</script>
