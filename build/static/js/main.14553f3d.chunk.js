(this.webpackJsonpportfolio = this.webpackJsonpportfolio || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, a, t) {
      e.exports = t.p + "static/media/myimage.ea4cf69c.jpeg";
    },
    ,
    ,
    ,
    function (e, a, t) {
      e.exports = t.p + "static/media/RacIT1.b3abe2e9.png";
    },
    function (e, a, t) {
      e.exports = t.p + "static/media/RESTATE.995f9ba2.jpg";
    },
    function (e, a, t) {
      e.exports = t.p + "static/media/spaceRes.ddc08c6a.jpg";
    },
    function (e, a, t) {
      e.exports = t.p + "static/media/leaflet.4cbcf130.png";
    },
    ,
    ,
    ,
    ,
    ,
    function (e, a, t) {
      e.exports = t.p + "static/media/RacIT2.2edfa5b3.png";
    },
    function (e, a, t) {
      e.exports = t.p + "static/media/RacIT3.0f8cde2a.png";
    },
    function (e, a, t) {
      e.exports = t.p + "static/media/earth.67af05e1.jpg";
    },
    ,
    ,
    function (e, a, t) {
      e.exports = t(51);
    },
    ,
    ,
    ,
    ,
    ,
    function (e, a, t) {},
    ,
    function (e, a, t) {},
    function (e, a, t) {},
    ,
    function (e, a, t) {},
    ,
    ,
    ,
    ,
    ,
    function (e, a, t) {},
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(0),
        l = t.n(n),
        c = t(18),
        r = t.n(c),
        s =
          (t(32),
          t(33),
          t(34),
          t(35),
          t(36),
          t(37),
          t(38),
          t(39),
          t(40),
          t(41),
          t(1)),
        o = t.n(s);
      (o.a.easing.jswing = o.a.easing.swing),
        o.a.extend(o.a.easing, {
          def: "easeOutQuad",
          swing: function (e, a, t, n, l) {
            return o.a.easing[o.a.easing.def](e, a, t, n, l);
          },
          easeInQuad: function (e, a, t, n, l) {
            return n * (a /= l) * a + t;
          },
          easeOutQuad: function (e, a, t, n, l) {
            return -n * (a /= l) * (a - 2) + t;
          },
          easeInOutQuad: function (e, a, t, n, l) {
            return (a /= l / 2) < 1
              ? (n / 2) * a * a + t
              : (-n / 2) * (--a * (a - 2) - 1) + t;
          },
          easeInCubic: function (e, a, t, n, l) {
            return n * (a /= l) * a * a + t;
          },
          easeOutCubic: function (e, a, t, n, l) {
            return n * ((a = a / l - 1) * a * a + 1) + t;
          },
          easeInOutCubic: function (e, a, t, n, l) {
            return (a /= l / 2) < 1
              ? (n / 2) * a * a * a + t
              : (n / 2) * ((a -= 2) * a * a + 2) + t;
          },
          easeInQuart: function (e, a, t, n, l) {
            return n * (a /= l) * a * a * a + t;
          },
          easeOutQuart: function (e, a, t, n, l) {
            return -n * ((a = a / l - 1) * a * a * a - 1) + t;
          },
          easeInOutQuart: function (e, a, t, n, l) {
            return (a /= l / 2) < 1
              ? (n / 2) * a * a * a * a + t
              : (-n / 2) * ((a -= 2) * a * a * a - 2) + t;
          },
          easeInQuint: function (e, a, t, n, l) {
            return n * (a /= l) * a * a * a * a + t;
          },
          easeOutQuint: function (e, a, t, n, l) {
            return n * ((a = a / l - 1) * a * a * a * a + 1) + t;
          },
          easeInOutQuint: function (e, a, t, n, l) {
            return (a /= l / 2) < 1
              ? (n / 2) * a * a * a * a * a + t
              : (n / 2) * ((a -= 2) * a * a * a * a + 2) + t;
          },
          easeInSine: function (e, a, t, n, l) {
            return -n * Math.cos((a / l) * (Math.PI / 2)) + n + t;
          },
          easeOutSine: function (e, a, t, n, l) {
            return n * Math.sin((a / l) * (Math.PI / 2)) + t;
          },
          easeInOutSine: function (e, a, t, n, l) {
            return (-n / 2) * (Math.cos((Math.PI * a) / l) - 1) + t;
          },
          easeInExpo: function (e, a, t, n, l) {
            return 0 == a ? t : n * Math.pow(2, 10 * (a / l - 1)) + t;
          },
          easeOutExpo: function (e, a, t, n, l) {
            return a == l ? t + n : n * (1 - Math.pow(2, (-10 * a) / l)) + t;
          },
          easeInOutExpo: function (e, a, t, n, l) {
            return 0 == a
              ? t
              : a == l
              ? t + n
              : (a /= l / 2) < 1
              ? (n / 2) * Math.pow(2, 10 * (a - 1)) + t
              : (n / 2) * (2 - Math.pow(2, -10 * --a)) + t;
          },
          easeInCirc: function (e, a, t, n, l) {
            return -n * (Math.sqrt(1 - (a /= l) * a) - 1) + t;
          },
          easeOutCirc: function (e, a, t, n, l) {
            return n * Math.sqrt(1 - (a = a / l - 1) * a) + t;
          },
          easeInOutCirc: function (e, a, t, n, l) {
            return (a /= l / 2) < 1
              ? (-n / 2) * (Math.sqrt(1 - a * a) - 1) + t
              : (n / 2) * (Math.sqrt(1 - (a -= 2) * a) + 1) + t;
          },
          easeInElastic: function (e, a, t, n, l) {
            var c = 1.70158,
              r = 0,
              s = n;
            if (0 == a) return t;
            if (1 == (a /= l)) return t + n;
            if ((r || (r = 0.3 * l), s < Math.abs(n))) {
              s = n;
              c = r / 4;
            } else c = (r / (2 * Math.PI)) * Math.asin(n / s);
            return (
              -s *
                Math.pow(2, 10 * (a -= 1)) *
                Math.sin(((a * l - c) * (2 * Math.PI)) / r) +
              t
            );
          },
          easeOutElastic: function (e, a, t, n, l) {
            var c = 1.70158,
              r = 0,
              s = n;
            if (0 == a) return t;
            if (1 == (a /= l)) return t + n;
            if ((r || (r = 0.3 * l), s < Math.abs(n))) {
              s = n;
              c = r / 4;
            } else c = (r / (2 * Math.PI)) * Math.asin(n / s);
            return (
              s *
                Math.pow(2, -10 * a) *
                Math.sin(((a * l - c) * (2 * Math.PI)) / r) +
              n +
              t
            );
          },
          easeInOutElastic: function (e, a, t, n, l) {
            var c = 1.70158,
              r = 0,
              s = n;
            if (0 == a) return t;
            if (2 == (a /= l / 2)) return t + n;
            if ((r || (r = l * (0.3 * 1.5)), s < Math.abs(n))) {
              s = n;
              c = r / 4;
            } else c = (r / (2 * Math.PI)) * Math.asin(n / s);
            return a < 1
              ? s *
                  Math.pow(2, 10 * (a -= 1)) *
                  Math.sin(((a * l - c) * (2 * Math.PI)) / r) *
                  -0.5 +
                  t
              : s *
                  Math.pow(2, -10 * (a -= 1)) *
                  Math.sin(((a * l - c) * (2 * Math.PI)) / r) *
                  0.5 +
                  n +
                  t;
          },
          easeInBack: function (e, a, t, n, l, c) {
            return (
              void 0 == c && (c = 1.70158),
              n * (a /= l) * a * ((c + 1) * a - c) + t
            );
          },
          easeOutBack: function (e, a, t, n, l, c) {
            return (
              void 0 == c && (c = 1.70158),
              n * ((a = a / l - 1) * a * ((c + 1) * a + c) + 1) + t
            );
          },
          easeInOutBack: function (e, a, t, n, l, c) {
            return (
              void 0 == c && (c = 1.70158),
              (a /= l / 2) < 1
                ? (n / 2) * (a * a * ((1 + (c *= 1.525)) * a - c)) + t
                : (n / 2) * ((a -= 2) * a * ((1 + (c *= 1.525)) * a + c) + 2) +
                  t
            );
          },
          easeInBounce: function (e, a, t, n, l) {
            return n - o.a.easing.easeOutBounce(e, l - a, 0, n, l) + t;
          },
          easeOutBounce: function (e, a, t, n, l) {
            return (a /= l) < 1 / 2.75
              ? n * (7.5625 * a * a) + t
              : a < 2 / 2.75
              ? n * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + t
              : a < 2.5 / 2.75
              ? n * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + t
              : n * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + t;
          },
          easeInOutBounce: function (e, a, t, n, l) {
            return a < l / 2
              ? 0.5 * o.a.easing.easeInBounce(e, 2 * a, 0, n, l) + t
              : 0.5 * o.a.easing.easeOutBounce(e, 2 * a - l, 0, n, l) +
                  0.5 * n +
                  t;
          },
        });
      t(43),
        Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      var i = t(2),
        m = t(3),
        u = t(5),
        d = t(4),
        p = t(6),
        v = t(9),
        E = t.n(v),
        f = (function (e) {
          function a() {
            var e;
            return (
              Object(i.a)(this, a),
              ((e = Object(u.a)(this, Object(d.a)(a).call(this))).state = {
                logo: E.a,
              }),
              e
            );
          }
          return (
            Object(p.a)(a, e),
            Object(m.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = o()("nav").outerHeight();
                  o()(".navbar-toggler").on("click", function () {
                    o()("#mainNav").hasClass("navbar-reduce") ||
                      o()("#mainNav").addClass("navbar-reduce");
                  }),
                    o()("body").scrollspy({ target: "#mainNav", offset: e }),
                    o()(".js-scroll").on("click", function () {
                      o()(".navbar-collapse").collapse("hide");
                    }),
                    document
                      .querySelector(".navbar-expand-md")
                      .classList.add("navbar-reduce"),
                    document
                      .querySelector(".navbar-expand-md")
                      .classList.remove("navbar-trans"),
                    this.setState({ logo: E.a }),
                    o()('a.js-scroll[href*="#"]:not([href="#"])').on(
                      "click",
                      function () {
                        if (
                          window.location.pathname.replace(/^\//, "") ===
                            this.pathname.replace(/^\//, "") &&
                          window.location.hostname === this.hostname
                        ) {
                          var a = o()(this.hash);
                          if (
                            (a = a.length
                              ? a
                              : o()("[name=" + this.hash.slice(1) + "]")).length
                          )
                            return (
                              o()("html, body").animate(
                                { scrollTop: a.offset().top - e + 5 },
                                1e3,
                                "easeInExpo"
                              ),
                              !1
                            );
                        }
                      }
                    ),
                    o()(".js-scroll").on("click", function () {
                      o()(".navbar-collapse").collapse("hide");
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    "nav",
                    {
                      className:
                        "navbar navbar-b navbar-trans navbar-expand-md fixed-top",
                      id: "mainNav",
                    },
                    l.a.createElement(
                      "div",
                      { className: "container" },
                      l.a.createElement(
                        "a",
                        {
                          className: "navbar-brand js-scroll",
                          href: "#page-top",
                        },
                        l.a.createElement("img", {
                          src: this.state.logo,
                          alt: "logo",
                          style: { maxWidth: "100px" },
                        })
                      ),
                      l.a.createElement(
                        "button",
                        {
                          className: "navbar-toggler collapsed",
                          type: "button",
                          "data-toggle": "collapse",
                          "data-target": "#navbarDefault",
                          "aria-controls": "navbarDefault",
                          "aria-expanded": "false",
                          "aria-label": "Toggle navigation",
                        },
                        l.a.createElement("span", null),
                        l.a.createElement("span", null),
                        l.a.createElement("span", null)
                      ),
                      l.a.createElement(
                        "div",
                        {
                          className:
                            "navbar-collapse collapse justify-content-end",
                          id: "navbarDefault",
                        },
                        l.a.createElement(
                          "ul",
                          { className: "navbar-nav" },
                          l.a.createElement(
                            "li",
                            { className: "nav-item" },
                            l.a.createElement(
                              "a",
                              {
                                className: "nav-link js-scroll active",
                                href: "#home",
                              },
                              "Home"
                            )
                          ),
                          l.a.createElement(
                            "li",
                            { className: "nav-item" },
                            l.a.createElement(
                              "a",
                              {
                                className: "nav-link js-scroll",
                                href: "#about",
                              },
                              "About"
                            )
                          ),
                          l.a.createElement(
                            "li",
                            { className: "nav-item" },
                            l.a.createElement(
                              "a",
                              {
                                className: "nav-link js-scroll",
                                href: "#work",
                              },
                              "Work"
                            )
                          ),
                          l.a.createElement(
                            "li",
                            { className: "nav-item" },
                            l.a.createElement(
                              "a",
                              {
                                className: "nav-link js-scroll",
                                href: "#contact",
                              },
                              "Contact"
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(l.a.Component),
        h = (t(44), t(19)),
        b = t.n(h),
        N = (function (e) {
          function a() {
            return (
              Object(i.a)(this, a),
              Object(u.a)(this, Object(d.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(p.a)(a, e),
            Object(m.a)(a, [
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    "div",
                    {
                      id: "home",
                      className: "intro route bg-image background",
                    },
                    l.a.createElement("div", { id: "stars" }),
                    l.a.createElement("div", { id: "stars2" }),
                    l.a.createElement("div", { id: "stars3" }),
                    l.a.createElement(
                      "div",
                      { className: "intro-content display-table" },
                      l.a.createElement(
                        "div",
                        { className: "table-cell" },
                        l.a.createElement(
                          "div",
                          { className: "container" },
                          l.a.createElement(
                            "h1",
                            { className: "intro-title mb-4" },
                            "Hello, I am Abhijeet Gund"
                          ),
                          l.a.createElement(
                            "p",
                            { className: "intro-subtitle" },
                            l.a.createElement("span", {
                              className: "text-slider-items",
                            }),
                            l.a.createElement(
                              "strong",
                              { className: "text-slider" },
                              l.a.createElement(b.a, {
                                strings: [
                                  "Front End Developer",
                                  "Software Engineer",
                                ],
                                typeSpeed: 80,
                                backDelay: 1100,
                                backSpeed: 30,
                                loop: !0,
                              })
                            )
                          ),
                          l.a.createElement(
                            "p",
                            { className: "pt-3" },
                            l.a.createElement(
                              "a",
                              {
                                className: "btn btn-primary btn js-scroll px-4",
                                href: "#work",
                                role: "button",
                              },
                              "View My Work"
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(l.a.Component),
        g = (function (e) {
          function a() {
            var e;
            return (
              Object(i.a)(this, a),
              ((e = Object(u.a)(this, Object(d.a)(a).call(this))).state = {
                skills: [
                  {
                    id: "ReactJS/TS_skill",
                    content: "ReactJS/TS",
                    porcentage: "80%",
                    value: "80",
                  },
                  {
                    id: "ReactNative_skill",
                    content: "React Native TS/JS",
                    porcentage: "70%",
                    value: "70",
                  },
                  {
                    id: "ServiceNow_skill",
                    content: "ServiceNow",
                    porcentage: "50%",
                    value: "50",
                  },
                  {
                    id: "styledComponents_skill",
                    content: "Styled Components",
                    porcentage: "80%",
                    value: "80",
                  },
                  {
                    id: "HTML5_skill",
                    content: "HTML5",
                    porcentage: "80%",
                    value: "80",
                  },
                  {
                    id: "CSS3_skill",
                    content: "CSS3",
                    porcentage: "75%",
                    value: "75",
                  },
                  {
                    id: "JavaScript_skill",
                    content: "JavaScript",
                    porcentage: "70%",
                    value: "70",
                  },
                  {
                    id: "PHP_skill",
                    content: "PHP",
                    porcentage: "70%",
                    value: "70",
                  },
                  {
                    id: "Wordpress_skill",
                    content: "Wordpress",
                    porcentage: "80%",
                    value: "80",
                  },
                ],
                about_me: [
                  {
                    id: "first-p-about",
                    content:
                      "Hi, My name is Abhijeet Gund and I'm a Software Engineer. Welcome to my Personal Site!",
                  },
                  {
                    id: "second-p-about",
                    content:
                      "- Based in India, Specializing in frontend development for complex scalable web app. Experience of building Web and Mobile applications with React JS/TS, JavaScript, TypeScript, React Native, Wordpress and some cool libraries/ frameworks.",
                  },
                  {
                    id: "third-p-about",
                    content:
                      "- Currently working at Ampra Solutions, Pune, India. Delivering solutions to Sophisticated problems.",
                  },
                ],
              }),
              e
            );
          }
          return (
            Object(p.a)(a, e),
            Object(m.a)(a, [
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    "section",
                    { id: "about", className: "about-mf sect-pt4 route" },
                    l.a.createElement(
                      "div",
                      { className: "container" },
                      l.a.createElement(
                        "div",
                        { className: "row" },
                        l.a.createElement(
                          "div",
                          { className: "col-sm-12" },
                          l.a.createElement(
                            "div",
                            { className: "box-shadow-full" },
                            l.a.createElement(
                              "div",
                              { className: "row" },
                              l.a.createElement(
                                "div",
                                { className: "col-md-6" },
                                l.a.createElement(
                                  "div",
                                  { className: "row" },
                                  l.a.createElement(
                                    "div",
                                    {
                                      className: "col-sm-6 col-md-5",
                                      style: { margin: "0 auto" },
                                    },
                                    l.a.createElement(
                                      "div",
                                      {
                                        className: "about-img",
                                        style: { textAlign: "center" },
                                      },
                                      l.a.createElement("img", {
                                        className:
                                          "img-fluid rounded b-shadow-a",
                                        alt: "",
                                      })
                                    )
                                  )
                                ),
                                l.a.createElement(
                                  "div",
                                  { className: "skill-mf" },
                                  this.state.skills.map(function (e) {
                                    return l.a.createElement(
                                      l.a.Fragment,
                                      { key: e.id },
                                      l.a.createElement(
                                        "span",
                                        null,
                                        e.content
                                      ),
                                      " ",
                                      l.a.createElement(
                                        "span",
                                        { className: "pull-right" },
                                        e.porcentage
                                      ),
                                      l.a.createElement(
                                        "div",
                                        { className: "progress" },
                                        l.a.createElement("div", {
                                          className: "progress-bar",
                                          role: "progressbar",
                                          style: { width: e.porcentage },
                                          "aria-valuenow": e.value,
                                          "aria-valuemin": "0",
                                          "aria-valuemax": "100",
                                        })
                                      )
                                    );
                                  })
                                )
                              ),
                              l.a.createElement(
                                "div",
                                { className: "col-md-6" },
                                l.a.createElement(
                                  "div",
                                  { className: "about-me pt-4 pt-md-0" },
                                  l.a.createElement(
                                    "div",
                                    { className: "title-box-2" },
                                    l.a.createElement(
                                      "h5",
                                      { className: "title-left" },
                                      "About Me"
                                    )
                                  ),
                                  this.state.about_me.map(function (e) {
                                    return l.a.createElement(
                                      "p",
                                      { className: "lead", key: e.id },
                                      e.content
                                    );
                                  })
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(l.a.Component),
        w = t(13),
        k = t.n(w),
        y = t(22),
        O = t.n(y),
        j = t(23),
        x = t.n(j),
        S = t(14),
        M = t.n(S),
        I = t(15),
        C = t.n(I),
        P = t(16),
        T = t.n(P),
        R = (function (e) {
          function a() {
            return (
              Object(i.a)(this, a),
              Object(u.a)(this, Object(d.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(p.a)(a, e),
            Object(m.a)(a, [
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    "section",
                    { id: "work", className: "portfolio-mf sect-pt4 route" },
                    l.a.createElement(
                      "div",
                      { className: "container" },
                      l.a.createElement(
                        "div",
                        { className: "row" },
                        l.a.createElement(
                          "div",
                          { className: "col-sm-12" },
                          l.a.createElement(
                            "div",
                            { className: "title-box text-center" },
                            l.a.createElement(
                              "h3",
                              { className: "title-a" },
                              "Portfolio"
                            ),
                            l.a.createElement(
                              "p",
                              { className: "subtitle-a" },
                              "Projects that, I have participated / worked on"
                            ),
                            l.a.createElement("div", { className: "line-mf" })
                          )
                        )
                      ),
                      l.a.createElement(
                        "div",
                        { className: "row" },
                        l.a.createElement(
                          "div",
                          { className: "col-md-4" },
                          l.a.createElement(
                            "div",
                            { className: "work-box" },
                            l.a.createElement(
                              "a",
                              { href: M.a, "data-lightbox": "gallery-vmarine" },
                              l.a.createElement(
                                "div",
                                { className: "work-img" },
                                l.a.createElement("img", {
                                  src: M.a,
                                  alt: "",
                                  className: "img-fluid",
                                })
                              ),
                              l.a.createElement(
                                "div",
                                { className: "work-content" },
                                l.a.createElement(
                                  "div",
                                  { className: "row" },
                                  l.a.createElement(
                                    "div",
                                    { className: "col-sm-8" },
                                    l.a.createElement(
                                      "h2",
                                      { className: "w-title" },
                                      "Real Estate Project"
                                    ),
                                    l.a.createElement(
                                      "div",
                                      { className: "w-more" },
                                      l.a.createElement(
                                        "span",
                                        { className: "w-ctegory" },
                                        "React with Typescript, Servicenow, Styled Components, Devextreme Components"
                                      )
                                    )
                                  ),
                                  l.a.createElement(
                                    "div",
                                    { className: "col-sm-4" },
                                    l.a.createElement(
                                      "div",
                                      { className: "w-like" },
                                      l.a.createElement("span", {
                                        className: "ion-ios-plus-outline",
                                      })
                                    )
                                  )
                                )
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          "div",
                          { className: "col-md-4" },
                          l.a.createElement(
                            "div",
                            { className: "work-box" },
                            l.a.createElement(
                              "a",
                              {
                                href: C.a,
                                "data-lightbox": "gallery-aguadeluz",
                              },
                              l.a.createElement(
                                "div",
                                { className: "work-img" },
                                l.a.createElement("img", {
                                  src: C.a,
                                  alt: "",
                                  className: "img-fluid",
                                })
                              ),
                              l.a.createElement(
                                "div",
                                { className: "work-content" },
                                l.a.createElement(
                                  "div",
                                  { className: "row" },
                                  l.a.createElement(
                                    "div",
                                    { className: "col-sm-8" },
                                    l.a.createElement(
                                      "h2",
                                      { className: "w-title" },
                                      "Space Reservation"
                                    ),
                                    l.a.createElement(
                                      "div",
                                      { className: "w-more" },
                                      l.a.createElement(
                                        "span",
                                        { className: "w-ctegory" },
                                        "React with Typescript, Servicenow, Styled Components, Devextreme Components"
                                      ),
                                      " "
                                    )
                                  ),
                                  l.a.createElement(
                                    "div",
                                    { className: "col-sm-4" },
                                    l.a.createElement(
                                      "div",
                                      { className: "w-like" },
                                      l.a.createElement("span", {
                                        className: "ion-ios-plus-outline",
                                      })
                                    )
                                  )
                                )
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          "div",
                          { className: "col-md-4" },
                          l.a.createElement(
                            "div",
                            { className: "work-box" },
                            l.a.createElement(
                              "a",
                              { href: T.a, "data-lightbox": "gallery-todo" },
                              l.a.createElement(
                                "div",
                                { className: "work-img" },
                                l.a.createElement("img", {
                                  src: T.a,
                                  alt: "",
                                  className: "img-fluid",
                                })
                              ),
                              l.a.createElement(
                                "div",
                                { className: "work-content" },
                                l.a.createElement(
                                  "div",
                                  { className: "row" },
                                  l.a.createElement(
                                    "div",
                                    { className: "col-sm-8" },
                                    l.a.createElement(
                                      "h2",
                                      { className: "w-title" },
                                      "Space Stacking and Blocking"
                                    ),
                                    l.a.createElement(
                                      "div",
                                      { className: "w-more" },
                                      l.a.createElement(
                                        "span",
                                        { className: "w-ctegory" },
                                        "React with Typescript, Servicenow, Styled Components, Devextreme Components"
                                      )
                                    )
                                  ),
                                  l.a.createElement(
                                    "div",
                                    { className: "col-sm-4" },
                                    l.a.createElement(
                                      "div",
                                      { className: "w-like" },
                                      l.a.createElement("span", {
                                        className: "ion-ios-plus-outline",
                                      })
                                    )
                                  )
                                )
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          "div",
                          { className: "col-md-4" },
                          l.a.createElement(
                            "div",
                            { className: "work-box" },
                            l.a.createElement(
                              "a",
                              { href: k.a, "data-lightbox": "gallery-todo" },
                              l.a.createElement(
                                "div",
                                { className: "work-img" },
                                l.a.createElement("img", {
                                  src: k.a,
                                  alt: "",
                                  className: "img-fluid",
                                })
                              ),
                              l.a.createElement(
                                "div",
                                { className: "work-content" },
                                l.a.createElement(
                                  "div",
                                  { className: "row" },
                                  l.a.createElement(
                                    "div",
                                    { className: "col-sm-8" },
                                    l.a.createElement(
                                      "h2",
                                      { className: "w-title" },
                                      "Racit Web-desk Admin Panel"
                                    ),
                                    l.a.createElement(
                                      "div",
                                      { className: "w-more" },
                                      l.a.createElement(
                                        "span",
                                        { className: "w-ctegory" },
                                        "React with JS, Styled Components, Bootstrap, Mongodb"
                                      )
                                    )
                                  ),
                                  l.a.createElement(
                                    "div",
                                    { className: "col-sm-4" },
                                    l.a.createElement(
                                      "div",
                                      { className: "w-like" },
                                      l.a.createElement("span", {
                                        className: "ion-ios-plus-outline",
                                      })
                                    )
                                  )
                                )
                              )
                            ),
                            l.a.createElement(
                              "a",
                              {
                                href: O.a,
                                "data-lightbox": "gallery-todo",
                                style: { display: "none" },
                              },
                              "jsx-a11y/anchor-has-content warning"
                            ),
                            l.a.createElement(
                              "a",
                              {
                                href: x.a,
                                "data-lightbox": "gallery-todo",
                                style: { display: "none" },
                              },
                              "jsx-a11y/anchor-has-content warning"
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(l.a.Component),
        B = t(24),
        _ = t.n(B),
        q = (function (e) {
          function a() {
            return (
              Object(i.a)(this, a),
              Object(u.a)(this, Object(d.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(p.a)(a, e),
            Object(m.a)(a, [
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    "section",
                    {
                      className:
                        "paralax-mf footer-paralax bg-image sect-mt4 route",
                      style: { backgroundImage: "url(" + _.a + ")" },
                    },
                    l.a.createElement("div", { className: "overlay-mf" }),
                    l.a.createElement(
                      "div",
                      { className: "container" },
                      l.a.createElement(
                        "div",
                        { className: "row" },
                        l.a.createElement(
                          "div",
                          { className: "col-sm-12" },
                          l.a.createElement(
                            "div",
                            { className: "contact-mf" },
                            l.a.createElement(
                              "div",
                              { id: "contact", className: "box-shadow-full" },
                              l.a.createElement(
                                "div",
                                { className: "row" },
                                l.a.createElement(
                                  "div",
                                  { className: "col-md-6" },
                                  l.a.createElement(
                                    "div",
                                    { className: "title-box-2" },
                                    l.a.createElement(
                                      "h5",
                                      { className: "title-left" },
                                      "Send A Message"
                                    )
                                  ),
                                  l.a.createElement(
                                    "div",
                                    null,
                                    l.a.createElement(
                                      "form",
                                      {
                                        action:
                                          "https://formspree.io/f/xleazglv",
                                        method: "POST",
                                        className: "contactForm",
                                      },
                                      l.a.createElement(
                                        "div",
                                        { id: "sendmessage" },
                                        "Your message has been sent. Thank you!"
                                      ),
                                      l.a.createElement("div", {
                                        id: "errormessage",
                                      }),
                                      l.a.createElement(
                                        "div",
                                        { className: "row" },
                                        l.a.createElement(
                                          "div",
                                          { className: "col-md-12 mb-3" },
                                          l.a.createElement(
                                            "div",
                                            { className: "form-group" },
                                            l.a.createElement("input", {
                                              type: "text",
                                              name: "name",
                                              className: "form-control",
                                              id: "name",
                                              placeholder: "Your Name",
                                              "data-rule": "minlen:4",
                                              "data-msg":
                                                "Please enter at least 4 chars",
                                            }),
                                            l.a.createElement("div", {
                                              className: "validation",
                                            })
                                          )
                                        ),
                                        l.a.createElement(
                                          "div",
                                          { className: "col-md-12 mb-3" },
                                          l.a.createElement(
                                            "div",
                                            { className: "form-group" },
                                            l.a.createElement("input", {
                                              type: "email",
                                              className: "form-control",
                                              name: "email",
                                              id: "email",
                                              placeholder: "Your Email",
                                              "data-rule": "email",
                                              "data-msg":
                                                "Please enter a valid email",
                                            }),
                                            l.a.createElement("div", {
                                              className: "validation",
                                            })
                                          )
                                        ),
                                        l.a.createElement(
                                          "div",
                                          { className: "col-md-12 mb-3" },
                                          l.a.createElement(
                                            "div",
                                            { className: "form-group" },
                                            l.a.createElement("input", {
                                              type: "text",
                                              className: "form-control",
                                              name: "subject",
                                              id: "subject",
                                              placeholder: "Subject",
                                              "data-rule": "minlen:4",
                                              "data-msg":
                                                "Please enter at least 8 chars of subject",
                                            }),
                                            l.a.createElement("div", {
                                              className: "validation",
                                            })
                                          )
                                        ),
                                        l.a.createElement(
                                          "div",
                                          { className: "col-md-12 mb-3" },
                                          l.a.createElement(
                                            "div",
                                            { className: "form-group" },
                                            l.a.createElement("textarea", {
                                              className: "form-control",
                                              name: "message",
                                              rows: "5",
                                              "data-rule": "required",
                                              "data-msg":
                                                "Please write something for us",
                                              placeholder: "Message",
                                            }),
                                            l.a.createElement("div", {
                                              className: "validation",
                                            })
                                          )
                                        ),
                                        l.a.createElement(
                                          "div",
                                          { className: "col-md-12" },
                                          l.a.createElement(
                                            "button",
                                            {
                                              type: "submit",
                                              className:
                                                "button button-a button-big button-rouded",
                                            },
                                            "Send Message"
                                          )
                                        )
                                      )
                                    )
                                  )
                                ),
                                l.a.createElement(
                                  "div",
                                  { className: "col-md-6" },
                                  l.a.createElement(
                                    "div",
                                    { className: "title-box-2 pt-4 pt-md-0" },
                                    l.a.createElement(
                                      "h5",
                                      { className: "title-left" },
                                      "Get in Touch"
                                    )
                                  ),
                                  l.a.createElement(
                                    "div",
                                    { className: "more-info" },
                                    l.a.createElement(
                                      "p",
                                      { className: "lead" },
                                      "Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.",
                                      l.a.createElement("br", null),
                                      "Simply fill the form and send me an email."
                                    )
                                  ),
                                  l.a.createElement(
                                    "div",
                                    { className: "socials" },
                                    l.a.createElement(
                                      "ul",
                                      null,
                                      l.a.createElement(
                                        "li",
                                        null,
                                        l.a.createElement(
                                          "a",
                                          {
                                            href:
                                              "https://www.linkedin.com/in/rohit-madas-41328b178/",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                          },
                                          l.a.createElement(
                                            "span",
                                            { className: "ico-circle" },
                                            l.a.createElement("i", {
                                              className: "ion-social-linkedin",
                                            })
                                          )
                                        )
                                      ),
                                      l.a.createElement(
                                        "li",
                                        null,
                                        l.a.createElement(
                                          "a",
                                          {
                                            href:
                                              "https://github.com/Fewknowme",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                          },
                                          l.a.createElement(
                                            "span",
                                            { className: "ico-circle" },
                                            l.a.createElement("i", {
                                              className: "ion-social-github",
                                            })
                                          )
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    ),
                    l.a.createElement(
                      "footer",
                      null,
                      l.a.createElement(
                        "div",
                        { className: "container" },
                        l.a.createElement(
                          "div",
                          { className: "row" },
                          l.a.createElement(
                            "div",
                            { className: "col-sm-12" },
                            l.a.createElement("div", {
                              className: "copyright-box",
                            })
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(l.a.Component),
        D = (function (e) {
          function a() {
            return (
              Object(i.a)(this, a),
              Object(u.a)(this, Object(d.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(p.a)(a, e),
            Object(m.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  o()(".back-to-top").click(function () {
                    return (
                      o()("html, body").animate(
                        { scrollTop: 0 },
                        1500,
                        "easeInOutExpo"
                      ),
                      !1
                    );
                  }),
                    window.addEventListener("scroll", function () {
                      window.pageYOffset > 100
                        ? (document
                            .querySelector(".back-to-top")
                            .classList.remove("fadeOut"),
                          (document.querySelector(
                            ".back-to-top"
                          ).style.display = "block"),
                          document
                            .querySelector(".back-to-top")
                            .classList.add("fadeIn"))
                        : (document
                            .querySelector(".back-to-top")
                            .classList.remove("fadeIn"),
                          document
                            .querySelector(".back-to-top")
                            .classList.add("fadeOut"));
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    "a",
                    { href: "#", className: "back-to-top animated" },
                    l.a.createElement("i", { className: "fa fa-chevron-up" })
                  );
                },
              },
            ]),
            a
          );
        })(l.a.Component),
        W = (function (e) {
          function a() {
            return (
              Object(i.a)(this, a),
              Object(u.a)(this, Object(d.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(p.a)(a, e),
            Object(m.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  o()(window).on("load", function () {
                    o()("#preloader").length &&
                      o()("#preloader")
                        .delay(100)
                        .fadeOut("slow", function () {
                          o()(this).remove();
                        });
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  return l.a.createElement("div", { id: "preloader" });
                },
              },
            ]),
            a
          );
        })(l.a.Component);
      r.a.render(
        l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(f, null),
          l.a.createElement(N, null),
          l.a.createElement(g, null),
          l.a.createElement(R, null),
          l.a.createElement(q, null),
          l.a.createElement(D, null),
          l.a.createElement(W, null)
        ),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    },
  ],
  [[27, 1, 2]],
]);
//# sourceMappingURL=main.14553f3d.chunk.js.map
