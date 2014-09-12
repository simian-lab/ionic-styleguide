angular.module('ionic-styleguide', [])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('styleguide', {
    url: "/styleguide",
    template: "\
    <ion-view title='Style Guide'>\
      <ion-content>\
        <ion-guide></ion-guide>\
      </ion-content>\
    </ion-view>\
    "
  })
})
.directive('ionGuide', function() {
  return {
    restrict: 'E',
    replace: true,
    /**
     * Hi There.
     * We're super sorry that we're adding this bunch of HTML
     * on a JavaScript file.
     *
     * We hate that as much as you do. However, this was
     * the best compromise we could make to be sure you
     * had an easy time adding this to your existing projects.
     * Since we're doing this, you just have to:
     * 1. bower install this,
     * 2. add this file to your HTML,
     * 3. include ionic-styleguide as a dependency,
     * 4. ... aaand that's it, you're all set.
     *
     * If you have a better idea, please let us know in
     * a github issue –or better yet, send a PR. Just keep in
     * mind that it needs to be at least this easy to add the styleguide.
     *
     * And again, sorry about this.
     */
    template:
    '\
    <div class="content padding">\
      <!-- This applies only to the styleguide. Nevermind these styles -->\
      <style>\
        h1.styletitle {\
          font-family: monospace;\
          color:dimgrey;\
          border-bottom: 1px solid lightgray;\
        }\
      </style>\
      \
      <h1 class="styletitle">Headings</h1>\
      <h1>Heading 1</h1>\
      <h2>Heading 2</h2>\
      <h3>Heading 3</h3>\
      <h4>Heading 4</h4>\
      <h5>Heading 5</h5>\
      <h6>Heading 6</h6>\
      \
      <h1 class="styletitle">Paragraph</h1>\
      <p>\
        Yes! In your face, Gandhi! Goodbye, friends.\
        I never thought I\'d die like this.  But I always really hoped.\
        Switzerland is small and neutral! We are more like Germany,\
        ambitious and misunderstood!\
      </p>\
      <p>\
        The previous paragraph was brought to you by\
        <a href="http://chrisvalleskey.com/fillerama/">Fillerama</a>. Oh, by\
        the way, that was a link. <em>Here\'s some emphasis</em>, and also\
        something <strong>a bit stronger</strong> to match.\
      </p>\
      \
      <h1 class="styletitle">&lt;ul&gt;s and &lt;ol&gt;s</h1>\
      <h2>Unordered</h2>\
      <ul>\
        <li>Everyone loves lists</li>\
        <li>This is a default list</li>\
        <li>With some items!</li>\
        <li>\
          <ul>\
            <li>This is a list inside a list.</li>\
            <li>Some people do that.</li>\
          </ul>\
        </li>\
      </ul>\
      <h2>Ordered</h2>\
      <ol>\
        <li>This is a default ordered list</li>\
        <li>With some items!</li>\
        <li>Can I haz number?</li>\
      </ol>\
      \
      <h1 class="styletitle">Colors</h1>\
      <p>\
        Here\'s all of ionic\'s colors. They\'re shown on a button grid.\
        The button labels are the classnames.\
      </p>\
      <div class="row">\
        <div class="col">\
          <button class="button button-block button-light">\
            light\
          </button>\
        </div>\
        <div class="col">\
          <button class="button button-block button-stable">\
            stable\
          </button>\
        </div>\
        <div class="col">\
          <button class="button button-block button-positive">\
            positive\
          </button>\
        </div>\
      </div>\
      <div class="row">\
        <div class="col">\
          <button class="button button-block button-calm">\
            calm\
          </button>\
        </div>\
        <div class="col">\
          <button class="button button-block button-balanced">\
            balanced\
          </button>\
        </div>\
        <div class="col">\
          <button class="button button-block button-energized">\
            energized\
          </button>\
        </div>\
      </div>\
      <div class="row">\
        <div class="col">\
          <button class="button button-block button-assertive">\
            assertive\
          </button>\
        </div>\
        <div class="col">\
          <button class="button button-block button-royal">\
            royal\
          </button>\
        </div>\
        <div class="col">\
          <button class="button button-block button-dark">\
            dark\
          </button>\
        </div>\
      </div>\
      \
      <h1 class="styletitle">Buttons</h1>\
      <h2>Sizes</h2>\
      <div class="row">\
        <div class="col col-33">\
          <button class="button">\
            Normal\
          </button>\
        </div>\
      </div>\
      <div class="row">\
        <div class="col col-50 col-offset-25">\
          <button class="button button-block">\
            Block\
          </button>\
        </div>\
      </div>\
      <button class="button button-full">\
        Full Width\
      </button>\
      \
      <h2>Border styles</h2>\
      \
      <div class="row">\
        <div class="col col-50 col-offset-25">\
          <button class="button button-block button-outline">\
            Outlined\
          </button>\
        </div>\
      </div>\
      <div class="row">\
        <div class="col col-50 col-offset-25">\
          <button class="button button-block button-clear">\
            Clear\
          </button>\
        </div>\
      </div>\
      \
      <h2>Icons</h2>\
      \
      <div class="row">\
        <div class="col">\
          <button class="button button-block icon-left ion-home">\
            left icon\
          </button>\
        </div>\
        <div class="col">\
          <button class="button button-block icon-right ion-settings">\
            right icon\
          </button>\
        </div>\
      </div>\
      \
      <h2>Button bar</h2>\
      \
      <div class="button-bar">\
        <a class="button">This is</a>\
        <a class="button">a button</a>\
        <a class="button">bar element</a>\
      </div>\
    </div>\
    ',

    controller: function($scope) {
      // TODO: Something here?
    },
    link: function($scope, $element, $attrs) {
      // TODO: Something here?
    }
  };
});
