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
            <p class="text-sm text-gray-500 mt-4">{{ webinarDate }}</p>
          </div>

          <div class="grid md:grid-cols-3 gap-6 mb-8">
            <div class="text-center">
              <div
                class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3"
              >
                <svg class="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-1">{{ $t('enterit.date.title') }}</h3>
              <p class="text-gray-600">{{ webinarDate }}</p>
            </div>
            <div class="text-center">
              <div
                class="w-12 h-12 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-3"
              >
                <svg class="w-6 h-6 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-1">{{ $t('enterit.duration.title') }}</h3>
              <p class="text-gray-600">{{ $t('enterit.duration.value') }}</p>
            </div>
            <div class="text-center">
              <div
                class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3"
              >
                <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                  />
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-1">{{ $t('enterit.format.title') }}</h3>
              <p class="text-gray-600">{{ $t('enterit.format.value') }}</p>
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
            <div
              class="w-64 h-64 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto shadow-2xl"
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
          <div class="lg:w-2/3 text-center lg:text-left">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ $t('enterit.speaker.name') }}</h3>
            <p class="text-lg text-primary-600 font-semibold mb-4">
              {{ $t('enterit.speaker.role') }}
            </p>
            <p class="text-gray-600 leading-relaxed mb-6">
              {{ $t('enterit.speaker.bio') }}
            </p>
            <div class="flex flex-wrap justify-center lg:justify-start gap-3">
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
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            class="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-lg"
          >
            {{ $t('enterit.finalCta.primaryButton') }}
          </button>
          <button
            class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
          >
            {{ $t('enterit.finalCta.secondaryButton') }}
          </button>
        </div>
        <p class="text-sm text-primary-100 mt-6">
          {{ $t('enterit.finalCta.note') }}
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// Set webinar date - 15 days from now at 7:00 PM
const webinarTargetDate = new Date()
webinarTargetDate.setDate(webinarTargetDate.getDate() + 15)
webinarTargetDate.setHours(19, 0, 0, 0) // 7:00 PM

const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
})

let countdownInterval: NodeJS.Timeout | null = null

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
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
  return date
})

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
