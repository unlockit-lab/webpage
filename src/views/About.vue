<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section
      class="pt-20 pb-16 lg:pt-28 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          {{ $t('about.hero.title') }}
        </h1>
        <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          {{ $t('about.hero.subtitle') }}
        </p>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div class="mb-12 lg:mb-0">
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {{ $t('about.mission.title') }}
            </h2>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              {{ $t('about.mission.description1') }}
            </p>
            <p class="text-lg text-gray-600 leading-relaxed">
              {{ $t('about.mission.description2') }}
            </p>
          </div>
          <div class="relative">
            <div class="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-xl">
              <div class="grid grid-cols-2 gap-6">
                <div class="text-center">
                  <div class="text-3xl font-bold text-primary-600 mb-2">100+</div>
                  <div class="text-sm text-gray-600">{{ $t('about.stats.students') }}</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-success-600 mb-2">95%</div>
                  <div class="text-sm text-gray-600">{{ $t('about.stats.satisfaction') }}</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-purple-600 mb-2">10+</div>
                  <div class="text-sm text-gray-600">{{ $t('about.stats.companies') }}</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-orange-600 mb-2">15+</div>
                  <div class="text-sm text-gray-600">{{ $t('about.stats.years') }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {{ $t('about.values.title') }}
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            {{ $t('about.values.subtitle') }}
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
          >
            <div
              class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <svg class="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              {{ $t('about.values.quality.title') }}
            </h3>
            <p class="text-gray-600 leading-relaxed">
              {{ $t('about.values.quality.description') }}
            </p>
          </div>

          <div
            class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
          >
            <div
              class="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <svg class="w-8 h-8 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              {{ $t('about.values.community.title') }}
            </h3>
            <p class="text-gray-600 leading-relaxed">
              {{ $t('about.values.community.description') }}
            </p>
          </div>

          <div
            class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
          >
            <div
              class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <svg class="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              {{ $t('about.values.innovation.title') }}
            </h3>
            <p class="text-gray-600 leading-relaxed">
              {{ $t('about.values.innovation.description') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Team Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {{ $t('about.team.title') }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ $t('about.team.subtitle') }}
          </p>
        </div>

        <div class="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
          <!-- Profile Image -->
          <div class="lg:w-1/3 flex-shrink-0">
            <div class="relative">
              <div class="w-64 h-64 rounded-full mx-auto shadow-2xl overflow-hidden bg-gray-100">
                <img
                  src="/images/michal-wronski.jpg"
                  alt="Michał Wroński"
                  class="w-full h-full object-cover object-center"
                />
              </div>
              <!-- Social Badges -->
              <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
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
                <a
                  href="https://bigmikesolutions.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                  </svg>
                  <span>BMS</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Profile Information -->
          <div class="lg:w-2/3 text-center lg:text-left">
            <h3 class="text-3xl font-bold text-gray-900 mb-2">
              {{ $t('about.team.expert.name') }}
            </h3>
            <p class="text-lg text-primary-600 font-semibold mb-4">
              {{ $t('about.team.expert.role') }}
            </p>
            <p class="text-gray-600 leading-relaxed mb-6 text-lg">
              {{ $t('about.team.expert.bio') }}
            </p>

            <!-- Expertise Tags -->
            <div class="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
              <span
                class="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full"
              >
                {{ $t('about.team.expert.experience') }}
              </span>
              <span
                class="inline-block bg-success-100 text-success-800 text-sm font-medium px-3 py-1 rounded-full"
              >
                {{ $t('about.team.expert.expertise1') }}
              </span>
              <span
                class="inline-block bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full"
              >
                {{ $t('about.team.expert.expertise2') }}
              </span>
            </div>

            <!-- Social Links for larger screens -->
            <div class="hidden lg:flex gap-6">
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
                <span>{{ $t('about.team.expert.viewProfile') }}</span>
              </a>
              <a
                href="https://bigmikesolutions.pl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                </svg>
                <span>Big Mike Solutions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Story Timeline Section -->
    <section class="py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {{ $t('about.story.title') }}
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            {{ $t('about.story.subtitle') }}
          </p>
        </div>

        <!-- Timeline -->
        <div class="relative">
          <!-- Timeline line -->
          <div
            class="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-primary-200 via-primary-400 to-primary-600"
          ></div>

          <!-- Timeline Events -->
          <div class="space-y-12">
            <!-- Event 1: Foundation -->
            <div class="relative flex items-center">
              <div class="flex-1 pr-8 text-right">
                <div
                  class="bg-white rounded-lg shadow-lg p-6 border-l-4 border-primary-500 hover:shadow-xl transition-shadow"
                >
                  <div class="text-sm font-semibold text-primary-600 mb-2">
                    {{ $t('about.timeline.event1.year') }}
                  </div>
                  <h3 class="text-lg font-bold text-gray-900 mb-2">
                    {{ $t('about.timeline.event1.title') }}
                  </h3>
                  <p class="text-gray-600">{{ $t('about.timeline.event1.description') }}</p>
                </div>
              </div>
              <div
                class="relative z-10 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg"
              ></div>
              <div class="flex-1 pl-8"></div>
            </div>

            <!-- Event 2: First Students -->
            <a href="https://www.youtube.com/watch?v=-ffKVQzri-s" target="_blank">
              <div class="relative flex items-center">
                <div class="flex-1 pr-8"></div>
                <div
                  class="relative z-10 w-4 h-4 bg-success-500 rounded-full border-4 border-white shadow-lg"
                ></div>
                <div class="flex-1 pl-8">
                  <div
                    class="bg-white rounded-lg shadow-lg p-6 border-l-4 border-success-500 hover:shadow-xl transition-shadow"
                  >
                    <div class="text-sm font-semibold text-success-600 mb-2">
                      {{ $t('about.timeline.event2.year') }}
                    </div>
                    <h3 class="text-lg font-bold text-gray-900 mb-2">
                      {{ $t('about.timeline.event2.title') }}
                    </h3>
                    <p class="text-gray-600">{{ $t('about.timeline.event2.description') }}</p>
                  </div>
                </div>
              </div>
            </a>

            <!-- Event 3: AI Focus -->
            <div class="relative flex items-center">
              <div class="flex-1 pr-8 text-right">
                <div
                  class="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500 hover:shadow-xl transition-shadow"
                >
                  <div class="text-sm font-semibold text-purple-600 mb-2">
                    {{ $t('about.timeline.event3.year') }}
                  </div>
                  <h3 class="text-lg font-bold text-gray-900 mb-2">
                    {{ $t('about.timeline.event3.title') }}
                  </h3>
                  <p class="text-gray-600">{{ $t('about.timeline.event3.description') }}</p>
                </div>
              </div>
              <div
                class="relative z-10 w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg"
              ></div>
              <div class="flex-1 pl-8"></div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-br from-primary-600 to-primary-800">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
          {{ $t('about.cta.title') }}
        </h2>
        <p class="text-xl text-primary-100 mb-8">
          {{ $t('about.cta.subtitle') }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/#courses"
            class="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            {{ $t('about.cta.viewCourses') }}
          </router-link>
          <router-link
            to="/instructors"
            class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
          >
            {{ $t('about.cta.meetInstructors') }}
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// About Us page component
</script>
