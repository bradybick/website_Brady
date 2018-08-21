<template>
  <div class="main-wrapper">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a class="navbar-brand js-scroll-trigger" href="#about">
        <span class="d-block d-lg-none">Brady's Portfolio</span>
        <span class="d-none d-lg-block">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="./assets/profile.jpg" alt="">
        </span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#experience">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#education">Education</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#interests">Interests</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#projects">Projects</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container-fluid p-0">

      <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div class="my-auto">
          <h1 class="mb-0">{{ name }}
            <span class="text-primary">{{ surname }}</span>
          </h1>
          <div class="subheading mb-5">{{ address }}
            <a href="mailto:brady.bickham+dev@gmail.com">{{ email }}</a>
          </div>
          <p class="mb-5">{{ aboutMe }}</p>
          <ul class="list-inline list-social-icons mb-0">
            <li class="list-inline-item">
              <a href="https://twitter.com/ArcLoco">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://linkedin.com/in/bradybickham">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://github.com/bradybick">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div class="my-auto">
          <h2 class="mb-5">Experience</h2>

          <div class="resume-item d-flex flex-column flex-md-row mb-5" v-for="job in experience" :key="job.description">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">{{ job.position }}</h3>
              <div class="subheading mb-3">{{ job.company }}</div>
              <p>{{ job.description }}</p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">{{ job.startDate }} - {{ job.endDate }}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div class="my-auto">
          <h2 class="mb-5">Education</h2>

          <div class="resume-item d-flex flex-column flex-md-row mb-5" v-for="a in education" :key="a.school">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">{{ a.school }} - {{ a.location }}</h3>
              <div class="subheading mb-3">{{ a.degree }}</div>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">{{ a.startDate }} - {{ a.endDate }}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <div class="my-auto">
          <h2 class="mb-5">Skills</h2>

          <div class="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul class="list-inline list-icons">
            <li class="list-inline-item">
              <i class="devicon-html5-plain-wordmark"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-css3-plain-wordmark"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-javascript-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-bootstrap-plain-wordmark"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-wordpress-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-php-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-git-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-c-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-cplusplus-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-csharp-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-mysql-plain-wordmark"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-apple-original"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-android-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-vuejs-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-photoshop-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-apache-line-wordmark"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-linux-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-visualstudio-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-webpack-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-windows8-original"></i>
            </li>
          </ul>

          <div class="subheading mb-3">General Skills</div>
          <ul class="fa-ul mb-0">
            <li>
              &mdash;Front-End Web Development
            </li>
            <li>
              &mdash;Embedded ARM Development
            </li>
            <li>
              &mdash;Game Development (Unity)
            </li>
            <li>
              &mdash;Cross-Platform &amp; Native Mobile Development
            </li>
          </ul>
        </div>
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
        <div class="my-auto">
          <h2 class="mb-5">Interests</h2>
          <p class="mb-0">If I'm not sitting and working on a programming project I'm out training for marathons or hiking with my dog, Luna, and my fiancee. We currently are on a mission to hike every mountain and trail within 100 miles.</p><br>
          <p class="mb-0">Other than that I love video games, both the playing and creating of them. I'm currently working on creating a game as something to work on in my free time. I also play Magic: The Gathering in my most of my other free time.</p><br>
          <p class="mb-0">I'm also a big comic book buff. You want to know about random facts from comic book history? I'm a good source for that as well. As I've been told one pf my goals in life is to be able to create a burial tomb of boxes and boxes of comics. I think I'm already to that point.</p>
        </div>
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="projects">
        <div class="my-auto">
          <h2 class="mb-5">Projects</h2>

          <div class="resume-item d-flex flex-column flex-md-row mb-5" v-for="p in projects" :key="p.title">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">{{ p.title }}</h3>
              <div class="subheading mb-3"><a :href="p.linkSrc">{{ p.linkName }}</a></div>
              <p><span v-html="p.description"></span></p>
            </div>
            <div class="resume-date text-md-right">
              <img :src="p.imgSrc" style='height: 250px;'>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
import eAbuseimg from './assets/eAbuse_Preview.png'
import TrumpItimg from './assets/Trump-It_Preview.png'
import LunaDogimg from './assets/LunaDog_Preview.png'

export default {
  data () {
    return {
      title: 'My portfolio',
      name: 'Brady',
      surname: 'Bickham',
      address: 'Portland, OR 97230 · (707) 315-4524 ·',
      email: 'brady.bickham@gmail.com',
      aboutMe: 'I am an enthusiastic programmer with experience in many types of programming - embedded C, desktop (OS X and Windows) and mobile (iOS and Android) applications, and server based web applications (PHP). I am currently seeking a position were my range of experience and adaptability is a plus and in which I will be challenged to take my skills to the next level.',
      education: [
        {
          school: 'University of California',
          location: 'Santa Barbara',
          degree: 'Bachelor of Arts, History',
          startDate: '2011',
          endDate: '2015'
        }
      ],
      experience: [
        {
          position: 'PROGRAMMING INTERN => PROGRAMMER/TEST ENGINEER',
          company: 'Emisense',
          description: 'Multi-summer internship turned entry level position where I got most of my programming chops. I spent most of my time doing ARM development and testing, but I also was tasked with creating a few desktop tools as well as maintaining the company\'s intranet. My biggest project was developing a monitoring setup for a 24 hour per day test including a webpage with streamed video from our facility.',
          startDate: 'June 2014',
          endDate: 'December 2017'
        }
      ],
      projects: [
        {
          title: 'eAbuse',
          linkName: 'iOS link',
          linkSrc: 'https://itunes.apple.com/us/app/eabuse/id1070012680?ls=1&mt=8',
          description: 'A comedy app where a three abuse generators speak abuse&mdash;from the <a href="http://www.festvox.org/flite/">Flite</a> TTS engine&mdash;through the mouths of famous mathematicians and scientists. Users can also share the abuse through Facebook and Twitter as well as text messages and email. It\'s a multi media update to an old, text only Palm Pilot application created by a previous supervisor and like the original the app is Careware with all the proceeds going to <a href="http://exceptionalmindsstudio.org">Exceptional Minds Studio</a>.',
          imgSrc: eAbuseimg
        },
        {
          title: 'Trump-It',
          linkName: 'iOS link',
          linkSrc: 'https://itunes.apple.com/pa/app/trump-it/id1092763989?l=en&mt=8',
          description: 'An app making fun of the leader of the "Space Force" and&mdash;unfortunately&mdash;the United States. The app is based on the same text-to-speech engine as eAbuse and exhibits a very similar pedantic speaking tone as Drumpf himself&mdash;which is good seeing as it is a bunch of quotes the tiny-handed one himself has spoken. I felt the need to make this after making eAbuse to keep myself sane in a world that is becoming more and more insane.',
          imgSrc: TrumpItimg
        },
        {
          title: 'Luna, the Moon Dog Twitter Bot',
          linkName: 'Twitter link',
          linkSrc: 'https://twitter.com/Luna_Moon_Dog',
          description: "Want to meet my dog? She's the best. Do you have someone on Twitter denying the scientific consensus on climate change? She'll sense your frustration and if you call her with #FetchAbuse she'll decide a random insult to send in response to whoever you sicced her on. Or do you feel like hearing a quote from the fabulous movie <i>The Princess Bride</i>? Call her with #PBme and she'll take care of it.",
          imgSrc: LunaDogimg
        }
      ]
    }
  },
  mounted () {
    const $ = this.jquery
    this.$nextTick(() => {
      // our custom jQuery code goes here
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          var target = $(this.hash)
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top)
            }, 1000, 'easeInOutExpo')
            return false
          }
        }
      })
      // Closes responsive menu when a scroll trigger link is clicked
      $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide')
      })
      // Activate scrollspy to add active class to navbar items on scroll
      $('body').scrollspy({
        target: '#sideNav'
      })
    })
  }
}
</script>
