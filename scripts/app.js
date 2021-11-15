'use strict';

/**
 * @ngdoc overview
 * @name jsydGuruApp
 * @description
 * # jsydGuruApp
 *
 * Main module of the application.
 */
var app = angular.module('jsydGuruApp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch']).config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/work-request', {
      templateUrl: 'views/work-request.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/style', {
      templateUrl: 'views/style-guide.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.service('ModuleService', function () {
  return {
    activeModule: ''
  };
});

/**
 * @ngdoc function
 * @name jsydGuruApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jsydGuruApp
 */
app.controller('MainCtrl', function ($scope, ModuleService) {

  $scope.email = 'jsydguru@outlook.com';
  $scope.mobile = '601.274.4410';
  $scope.seeMyWorkURL = '';

  $scope.services = [
    {
      imgUrl: 'images/icons/marketing_white.svg',
      title: 'Marketing',
      description: `<p>Stay connected with your audience:</p>
<ul class="list-styled">
  <li>Email Marketing</li>
  <li>Marketing Automation</li>
  <li>Content development</li>
  <li>Copywriting</li>
  <li>Website Maximization</li>
  <li>Social Media Marketing</li>
  <li>Curriculum Development</li>
  <li>Implementing new platforms</li>
</ul>
<p>Custom services are offered to meet your unique needs.</p>`,
      link: ''
    },
    {
      imgUrl: 'images/icons/consulting_white.svg',
      title: 'Consulting',
      description: `<p>Navigate technology and the online world:</p>
<ul class="list-styled">
  <li>Microsoft Office</li>
  <li>Social Media</li>
  <li>Wordpress</li>
  <li>eLearning Platforms</li>
  <li>Email Marketing Platforms</li>
  <li>File Maintenance & Organization</li>
  <li>Google Drive, Docs, etc.</li>
  <li>iWork (Pages, Numbers, Keynote)</li>
</ul>
<p>Custom services are offered to meet your unique needs.</p>`,
      link: ''
    },
    {
      imgUrl: 'images/icons/branding2_white.svg',
      title: 'Branding',
      description: `<p>Create a unique brand that fits you or your business:</p>
<ul class="list-styled">
  <li>Brand Positioning & Strategy</li>
  <li>Creating a Unique Voice</li>
  <li>Logo & Custom Graphic Design</li>
  <li>Website Customization</li>
  <li>Template Documents</li>
  <li>Stock Photography</li>
  <li>Brand Implementation</li>
</ul>
<p>Custom services are offered to meet your unique needs.</p>`,
      link: ''
    }
  ];

  $scope.social = [
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/jsydguru/',
      icon: 'fab fa-facebook-f'
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/jsydguru/',
      icon: 'fab fa-instagram'
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/company/jsydguru/',
      icon: 'fab fa-linkedin-in'
    }
  ];

  $scope.reviews = [
    {
      review: '"My company was needing a better email marketing system and an online course program. Jennie quickly learned new platforms and helped me launch several marketing campaigns and eLearning courses. She is a technology guru and self-learner that thrives on cutting edge marketing and business solutions."',
      author: 'Brent O\'Bannon, Gallup Certified Strengths Coach and Entrepreneur ',
      imgUrl: 'images/clients/brent_obannon.jpg'
    },
    {
      review: '"Jennie is a fantastic consultant and brilliant with all facets of technology. She has helped me tremendously in my web design strategy and even become a sub-contractor when my own clients require her services. She is truly a pleasure to work with and very dependable." ',
      author: 'Nadeem Ansari, President & CEO at Forcewave, LLC',
      imgUrl: 'images/clients/nadeem_ansari.jpg'
    },
    {
      review: '"It was a pleasure having Jennie as my web consultant for several months. Jennie is hard-working, persistent and capable in digital technologies. She meticulously researches, formats, edits, and proofs her work. She is very careful to understand and meet customer needs and is very good at making suggestions to that end."',
      author: 'Sensei Shawn Steiner, Owner, Steiner Academy of Martial Arts',
      imgUrl: 'images/clients/shawn_steiner.jpg'
    }
  ];

  $scope.getCurrentYear = function () {
    try {
      return new Date().getFullYear();
    } catch (err) {
      console.error(err);
      return '2020';
    }
  };

  $scope.contact = function () {
    var win = window.open("mailto:" + $scope.email, '_blank');
    win.focus();
  };

  angular.element(document).ready(function () {
    console.log("Page is finished loading. Try to scroll to element if necessary.");
    if (ModuleService.activeModule !== '' && ModuleService.activeModule !== undefined) {
      $scope.scrollTo(ModuleService.activeModule);
    }
  });

  $scope.clearActiveModule = function () {
    ModuleService.activeModule = '';
  };

  $scope.scrollTo = function (id, offset) {
    console.log('attempting to scroll to element: ' + id);
    ModuleService.activeModule = id;
    var target = document.getElementById(id);
    $('html, body').animate({
      scrollTop: (target.offsetTop + target.offsetHeight),
      easing: 'slow'
    }, 1000, function () {
      // Callback after animation
    });
  };

  function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;

    while (element) {
      xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
      yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
      element = element.offsetParent;
    }

    return {
      x: xPosition,
      y: yPosition
    };
  }

  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'top',
      hoverEnabled: false
    });
  });

  $(document).ready(function () {
    $('.parallax').parallax();

    $('.fixed-action-btn').floatingActionButton();

    $('.carousel').carousel();

    $('.carousel-slider').carousel({
      padding: 0,
      fullWidth: true,
      indicators: true
    });
  });

  $scope.carouselNext = function () {
    $scope.instance = M.Carousel.getInstance($('.carousel'));
    $scope.instance.next();
  };

  $scope.carouselPrev = function () {
    $scope.instance = M.Carousel.getInstance($('.carousel'));
    $scope.instance.prev();
  };

});
