<html lang="en"><head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="google" content="notranslate">

      <script type="text/javascript" async="" src="https://trinketsofcody.com/cody-widget.js"></script><script type="text/javascript" async="" src="//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js"></script><script type="text/javascript" async="" src="https://cdn.mxpnl.com/libs/mixpanel-js-wrapper.js"></script><script type="text/javascript" async="" src="https://static.hotjar.com/c/hotjar-3897705.js?sv=7"></script><script type="text/javascript" async="" src="https://www.googletagmanager.com/gtag/js?id=G-BLGQHYCV6F&amp;l=dataLayer&amp;cx=c"></script><script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-N4C8MF2"></script><script>
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({"userId":246179,"visitorType":"student","batch":{"id":115,"fullNameWithC":"AFR-0723 (C#18)","schoolLocation":{"id":1,"name":"ALX Africa"}},"curriculum":{"id":17,"name":"Short Specializations"}});

    window.gtm_user_custom_event = function (name, options) {
      if (typeof name === 'undefined') {
        return;
      }

      window.dataLayer.push({
        customEventOptions: typeof options !== 'undefined' ? options : {},
        event: name,
      });
    }
  </script>

  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-N4C8MF2');</script>
  <!-- End Google Tag Manager -->


    <title>Project: 0x05. NodeJS Basics | ALX Africa Intranet</title>

      <link rel="stylesheet" href="https://use.typekit.net/xgz4ilr.css">
      <link rel="stylesheet" media="all" href="/assets/application_alx-1f6cfefd6ab6e8e6ee892ddd3e5427e239e097c86a629c5dacaade7c4c492931.css">
      <script src="https://www.gstatic.com/charts/loader.js"></script>
      <script src="/assets/application-06e9a3ffafcb03d34c31475ffbd87ceb2261f0ec62464b93f7a96394b398ffa9.js"></script>
      <link rel="shortcut icon" type="image/x-icon" href="/favicon_alx.ico">
      <meta name="csrf-param" content="authenticity_token">
<meta name="csrf-token" content="HgAThv211hjNoeTainxR3zLgImk3fKRhXHQc9doDLgChQxsVtlPgMA3utMcw6O7ugkPB4U92SHuN8qcurtofgA">

      <link rel="apple-touch-icon" href="/apple-touch-icon_alx.png">

      <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
      <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->

      <!-- Store user timezone -->
      <script>
        Cookies.set('timezone', (new Date()).getTimezoneOffset() / -60.0);
      </script>

      <!-- intro.js for interactive onboarding -->

      <!-- React -->
      <script src="/packs/js/application-c0e26d60a9eed470b3af.js"></script>
      <link rel="stylesheet" media="screen" href="/packs/css/application-87456da7.css">
  <script async="" src="https://script.hotjar.com/modules.e4b2dc39f985f11fb1e4.js" charset="utf-8"></script><script src="https://js.userpilot.io/sdk/version/1.520/app.js" async=""></script><style nonce="undefined">
iframe#userpilot-nps {
  width: 900px;
  right: 0px;
  margin: 0px auto;
  opacity: 1 !important;
}

/* NPS Mobile */
@media (max-width: 900px) {
  iframe#userpilot-nps {
      width: 100%;
  }
}

iframe#userpilot-resource-centre-frame {
  width: 0px;
  height: 0px;
}

div#userpilotContent[key="1377467235"]:not(.preview) {
  position: absolute;
  line-height: 18px;
  -webkit-transition: none;
  transition: none;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 2147483638;
  pointer-events: none;
  outline: none !important;
  background: none !important;
  --sidebar-width: 0px;
  direction: ltr;
  display: block;
}

div#userpilotContent[key="1377467235"] * {
  -webkit-transition: none;
  transition: none;
  direction: ltr;
}

#userpilotContent[key="1377467235"] .conv-cont, #userpilotContent[key="1377467235"] .conv-backdrop-cont {
  z-index: 999999999;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  transition: opacity 0.1s, z-index 0s, visibility 0s;
}

#userpilotContent[key="1377467235"] .conv-cont, #userpilotContent[key="1377467235"] .conv-backdrop-cont {
  z-index: 999999999;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  transition: opacity 0.1s, z-index 0s, visibility 0s;
}

#userpilotContent[key="1377467235"] .userpilot .conv-cont {
  z-index: 2147483000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  pointer-events: none;
}

#userpilotContent[key="1377467235"] .conv-cont {
  background: none;
}

#userpilotContent[key="1377467235"] .canv {
  position: absolute;
  top: 0;
  box-shadow: inset 0 0 0 0px #ffffff, inset 0 0 15px rgb(208, 208, 208);
  background: none !important;
  display: flex;
  border: 10000px solid rgba(255, 255, 255, .56);
  margin-left: -10000px;
  margin-top: -10000px;
  padding: 150px;
  opacity: 0;
  transition: opacity 0.6s;
  border-radius: 10006px
}

#userpilotContent[key="1377467235"] .userpilot .canv {
  position: fixed;
  top: 0;
  background: none;
  display: flex;
  border: 10000px solid rgba(255, 255, 255, .7);
  margin-left: -10000px;
  margin-top: -10000px;
  padding: 150px;
  opacity: 0;
  border-radius: 10006px
}

#userpilotContent[key="1377467235"] .canv.userpilot-canv-hidden {
  opacity: 0 !important
}

#userpilotContent[key="1377467235"] .userpilot-soft-focus .canv {
  border: none
}

#userpilotContent[key="1377467235"] .conv-cont[userpilot-hidden] .up-userpilot-mmx-part{
  pointer-events: none !important;
}

#userpilotContent[key="1377467235"] .up-userpilot-mmx-part {
  position: absolute;
  z-index: 1 !important;
  background: none;
}

#userpilotContent[key="1377467235"] [up-backdrop="0"] {
  background: none !important;
  border: none !important;
  box-shadow: none !important;
}

#userpilotContent[key="1377467235"] .conv-cont[backdrop-overlay="1"] .up-userpilot-mmx-part {
  width: 100% !important;
  height: 100% !important;
  top: 0px !important;
  left: 0px !important;
}

#userpilotContent[key="1377467235"] .conv-cont.allow-scroll .up-userpilot-mmx-part {
  pointer-events: none;
}

div#userpilotContent[key="1377467235"]>*, div#userpilotContent[key="1377467235"]>*:not(.userpilot-hotspot-container)>*:not(.userpilot-backdrop) {
  pointer-events: all;
}

#userpilotContent[key="1377467235"] .userpilot-mmx-cursor {
  position: fixed;
  width: 14px;
  -webkit-transition: all 1.5s;
  transition: all 1.5s;
  pointer-events: none
}
#userpilotContent[key="1377467235"] .userpilot-mmx-cursor * {
  pointer-events: none !important;
}
#userpilotContent[key="1377467235"] .up-t-pluse {
  position: absolute;
  width: 14px;
  height: 14px;
  border: none;
  border-radius: 100%;
  color: gainsboro;
  background: gainsboro
}
#userpilotContent[key="1377467235"]:not([version="0.1"]) .up-t-pluse {
  width: 10px;
  height: 10px;
  pointer-events: none !important;
}
#userpilotContent[key="1377467235"] .up-t-pluse:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: -3px;
  top: -3px;
  background-color: transparent;
  border-radius: 50%;
  border: 7px solid;
  border-color: inherit;
  -webkit-animation: userpilotActive 2s infinite linear;
  animation: userpilotActive 2s infinite linear
}
#userpilotContent[key="1377467235"]:not([version="0.1"]) .up-t-pluse:before {
  height: 18px;
  width: 18px;
  left: -4px;
  top: -4px;
  border: 0px;
  background: inherit;
  -webkit-animation: userpilot-tooltip-pulse 2s infinite linear;
  animation: userpilot-tooltip-pulse 2s infinite linear
}
@keyframes userpilotActive {
  0% {
    -webkit-transform: scale(.1);
    border-color: inherit;
    opacity: 1
  }

  30% {
    -webkit-transform: scale(1);
    border: 5px solid;
    border-color: inherit;
    opacity: 1
  }

  40% {
    -webkit-transform: scale(1.3);
    border: 0 solid;
    border-color: inherit
  }

  100% {
    border: 0 solid;
    border-color: inherit
  }
}

@-webkit-keyframes active {
  0% {
    -webkit-transform: scale(.1);
    border-color: inherit;
    opacity: 1
  }

  30% {
    -webkit-transform: scale(1);
    border: 5px solid;
    border-color: inherit;
    opacity: 1
  }

  40% {
    -webkit-transform: scale(1.3);
    border: 0 solid;
    border-color: inherit
  }

  100% {
    border: 0 solid;
    border-color: inherit
  }
}

#userpilotContent[key="1377467235"] .userpilot-ripple {
  position: absolute;
  pointer-events: none;
  width: 0px;
  height: 30px;
  border: none;
  border-radius: 100%;
  left: 50%;
  top: 50%;
}
#userpilotContent[key="1377467235"]:not([version="0.1"]) .userpilot-ripple {
  height: 18px;
  width: 18px;
  background-color: transparent !important;
}
#userpilotContent[key="1377467235"] .userpilot-ripple:before {
  position: absolute;
  content: "";
  height: 30px;
  width: 30px;
  left: 0px;
  top: 0px;
  background-color: transparent;
  border-radius: 50%;
  background: inherit;
  -webkit-animation: userpilotActive 2s infinite linear;
  animation: userpilotActive 2s infinite linear;
  border: 10px solid;
  border-color: inherit;
  box-sizing: border-box;
}
#userpilotContent[key="1377467235"]:not([version="0.1"]) .userpilot-ripple:before {
  height: 18px;
  width: 18px;
  left: -1px;
  top: -1px;
  -webkit-animation: userpilot-tooltip-pulse 2s infinite linear;
  animation: userpilot-tooltip-pulse 2s infinite linear;
}
@-webkit-keyframes userpilot-tooltip-pulse {
  0%,
  100% {
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0.2;
  }

  50% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
    opacity: 0.3;
  }
}

@keyframes userpilot-tooltip-pulse {
  0%,
  100% {
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0.2;
  }

  50% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
    opacity: 0.3;
  }
}

#userpilotContent[key="1377467235"] .userpilot-ripple:after {
  position: absolute;
  content: "";
  height: 10px;
  width: 10px;
  left: 10px;
  top: 10px;
  background-color: transparent;
  border-radius: 50%;
  background: inherit;
  -webkit-animation: userpilot_active_after 2s infinite linear;
  animation: userpilot_active_after 2s infinite linear;
  box-sizing: border-box;
  background: currentColor;
}
#userpilotContent[key="1377467235"]:not([version="0.1"]) .userpilot-ripple:after {
  height: 10px;
  width: 10px;
  left: 4px;
  top: 4px;
  animation: none;
}
@keyframes userpilot_active_after {
  0% {
    -webkit-transform: scale(.1);
    opacity: 1
  }

  20% {
    opacity: 1;
    -webkit-transform: scale(1)
  }

  100% {
    opacity: 0;
    -webkit-transform: scale(5)
  }
}

@keyframes userpilotActive {
  0% {
    -webkit-transform: scale(.1);
    opacity: 1;
    border-color: inherit;
  }

  20% {
    opacity: 1;
    -webkit-transform: scale(1.5);
    border-color: inherit;
  }

  30% {
    background: none;
    border: 0 solid;
    border-color: inherit;
    opacity: 0
  }

  100% {
    opacity: 0;
    -webkit-transform: scale(2.5);
    border-color: inherit;
  }
}


/* sonar animations */
#userpilotContent[key="1377467235"]:not([version="0.1"]) .up-t-pluse[animation="sonar"], 
#userpilotContent[key="1377467235"]:not([version="0.1"]) .userpilot-ripple[animation="sonar"] {
  background: none !important;
  animation: none;
}

#userpilotContent[key="1377467235"]:not([version="0.1"]) .up-t-pluse[animation="sonar"]::after, 
#userpilotContent[key="1377467235"]:not([version="0.1"]) .userpilot-ripple[animation="sonar"]::after {
  content: "";
  width: 9px;
  height: 9px;
  position: absolute;
  border-radius: 150px;
  animation: pulse-dot infinite 1.5s;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: currentColor;
}

#userpilotContent[key="1377467235"]:not([version="0.1"]) .up-t-pluse[animation="sonar"]::before,
#userpilotContent[key="1377467235"]:not([version="0.1"]) .userpilot-ripple[animation="sonar"]::before {
  left: 0px;
  top: 0px;
  animation: pulse-ring infinite 1.5s;
  border-style: solid;
  border-width: 4px;
  padding: 5px;
  background: none !important;
}

/* morph animation */
#userpilotContent[key="1377467235"]:not([version="0.1"]) .up-t-pluse[animation="morph"],
#userpilotContent[key="1377467235"]:not([version="0.1"]) .userpilot-ripple[animation="morph"] {
  background: none !important;
  animation: none;
  height: 18px;
  width: 18px;
  left: -4px;
  top: -4px;
}

#userpilotContent[key="1377467235"]:not([version="0.1"]) .up-t-pluse[animation="morph"]::before,
#userpilotContent[key="1377467235"]:not([version="0.1"]) .userpilot-ripple[animation="morph"]::before {
  left: 0;
  top: 0;
  content: "";
  width: 100%;
  height: 100%;
  background: currentColor;
  opacity: .6;
  position: absolute;
  border-radius: 50%;
  animation: morph 1s linear infinite;
  box-shadow: 0 0 5px 1px currentColor;
  border: 9px solid;
}

#userpilotContent[key="1377467235"]:not([version="0.1"]) .up-t-pluse[animation="morph"]::after,
#userpilotContent[key="1377467235"]:not([version="0.1"]) .userpilot-ripple[animation="morph"]::after {
  background: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  border-radius: 50%;
  content: "";
  display: block;
}

/* target animation */
#userpilotContent[key="1377467235"]:not([version="0.1"]) .up-t-pluse[animation="target"],
#userpilotContent[key="1377467235"]:not([version="0.1"]) .userpilot-ripple[animation="target"]{
  height: 18px;
  width: 18px;
  box-shadow: 0 0 4px 2px currentColor;
  opacity: 1;
  animation: target 2s linear infinite;
  background: currentColor !important;
}

#userpilotContent[key="1377467235"]:not([version="0.1"]) .up-t-pluse[animation="target"]::before,
#userpilotContent[key="1377467235"]:not([version="0.1"]) .userpilot-ripple[animation="target"]::before {
  content: "";
  display: block;
  position: absolute;
  top: 100%;
  left: 100%;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 10px 0 0;
  border-color: currentColor transparent transparent transparent;
  opacity: .6;
  background: none;
  animation: none;
  border-radius: 0;
}

#userpilotContent[key="1377467235"]:not([version="0.1"]) .up-t-pluse[animation="target"]::after,
#userpilotContent[key="1377467235"]:not([version="0.1"]) .userpilot-ripple[animation="target"]::after {
  content: "";
  display: block;
  position: absolute;
  bottom: 100%;
  right: 100%;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 10px 10px;
  border-color: transparent transparent currentColor transparent;
  opacity: .6;
  top: initial;
  left: initial;
  border-radius: initial;
  background: none;
}

 /* egg animations */
 #userpilotContent[key="1377467235"]:not([version="0.1"]) .up-t-pluse[animation="egg"],
 #userpilotContent[key="1377467235"]:not([version="0.1"]) .userpilot-ripple[animation="egg"]{
  width: 18px;
  height: 18px;
  border-radius: 50%;
  position: relative;
  box-shadow: inset 0 0 6px 4px currentColor;
  animation: egg 600ms linear infinite;
  animation-direction: alternate;
  background: none !important;
}

#userpilotContent[key="1377467235"]:not([version="0.1"]) .up-t-pluse[animation="egg"]::before,
#userpilotContent[key="1377467235"]:not([version="0.1"]) .userpilot-ripple[animation="egg"]::before {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: "";
  display: block;
  background: transparent;
  border: 1px solid currentColor;
  animation: none;
}

#userpilotContent[key="1377467235"]:not([version="0.1"]) .up-t-pluse[animation="egg"]::after,
#userpilotContent[key="1377467235"]:not([version="0.1"]) .userpilot-ripple[animation="egg"]::after {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: "";
  display: block;
  background: currentColor;
  opacity: .6;
}


@keyframes userpilotActive {
  0% {
    -webkit-transform: scale(.1);
    border-color: inherit;
    opacity: 1
  }

  30% {
    -webkit-transform: scale(1);
    border: 5px solid;
    border-color: inherit;
    opacity: 1
  }

  40% {
    -webkit-transform: scale(1.3);
    border: 0 solid;
    border-color: inherit
  }

  100% {
    border: 0 solid;
    border-color: inherit
  }
}

@-webkit-keyframes active {
  0% {
    -webkit-transform: scale(.1);
    border-color: inherit;
    opacity: 1
  }

  30% {
    -webkit-transform: scale(1);
    border: 5px solid;
    border-color: inherit;
    opacity: 1
  }

  40% {
    -webkit-transform: scale(1.3);
    border: 0 solid;
    border-color: inherit
  }

  100% {
    border: 0 solid;
    border-color: inherit
  }
}

@keyframes pulse-dot {
  0% {
    transform: scale(1, 1) translate(-50%, -50%);
  }

  30% {
    transform: scale(1.25, 1.25) translate(-40%, -40%);
  }

  100% {
    transform: scale(1, 1) translate(-50%, -50%);
  }
}

@keyframes pulse-ring {
  0% {
    transform: scale(1, 1);
    opacity: 0;
  }

  25% {
    opacity: .5;
  }

  100% {
    transform: scale(1.8, 1.8);
    opacity: 0;
  }
}

@keyframes morph {
  0% {
    transform: rotateZ(0);
    border-radius: 20%;
  }

  50% {
    transform: rotateZ(45deg);
    border-radius: 50%;
  }

  100% {
    transform: rotateZ(90deg);
    border-radius: 20%;
  }
}

@keyframes target {
  0% {
    transform: rotateZ(0) scale(0.6);
  }

  50% {
    transform: rotateZ(180deg) scale(1);
  }

  100% {
    transform: rotateZ(360deg) scale(0.6);
  }
}

@keyframes egg {
  from {
    box-shadow: inset 0 0 8px 3px currentColor;
  }

  to {
    box-shadow: inset 0 0 4px 1px currentColor;
  }
}</style><style nonce="undefined">
iframe#userpilotIframeContainer,
iframe#userpilotContentNativeIframe,
iframe#userpilot-nps,
iframe#userpilot-resource-centre-frame,
iframe#userpilot-checklist,
iframe#userpilotSurveys,
iframe#userpilot-survey {
  background: none;
  max-height: none;
  max-width: none;
  min-height: 0px;
  min-width: 0px;
  filter: none;
  pointer-events: initial;
}

iframe#userpilotIframeContainer,
iframe#userpilotContentNativeIframe,
iframe#userpilot-resource-centre-frame,
iframe#userpilot-checklist,
iframe#userpilotSurveys,
iframe#userpilot-survey {
  right: initial;
  left: initial;
}

iframe#userpilotIframeContainer,
iframe#userpilotContentNativeIframe,
iframe#userpilot-resource-centre-frame {
    display: initial;
}
</style></head>

  <body class="signed_in env_production notranslate" translate="no" data-theme-suffix="_alx" data-new-gr-c-s-check-loaded="14.1077.0" data-gr-ext-installed="">
      <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N4C8MF2"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->


      <nav class="navbar navbar-default navbar-fixed-top topbar visible-xs">
  <div class="navbar-header">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-mobile" aria-expanded="false">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>

    <a class="navbar-brand" href="/">
      <div class="logo"></div>
</a>  </div>

  <div class="collapse navbar-collapse navigation" id="navbar-mobile">
    <ul class="nav navbar-nav">
      <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Home"><a href="/"><div class="icon "><i aria-hidden="true" class="fa-solid fa-home "></i></div><div class="visible-xs">Home</div></a></li>




    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="My Planning"><a href="/planning/me"><div class="icon "><i aria-hidden="true" class="fa-solid fa-calendar "></i></div><div class="visible-xs">My Planning</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" id="sidebar-current-projects-item" title="" data-original-title="Projects"><a href="/projects/current"><div class="icon "><i aria-hidden="true" class="fa-solid fa-code-fork "></i></div><div class="visible-xs">Projects</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="QA Reviews I can make"><a href="/corrections/to_review"><div class="icon "><i aria-hidden="true" class="fa-solid fa-check "></i></div><div class="visible-xs">QA Reviews I can make</div></a></li>
    
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Evaluation quizzes"><a href="/dashboards/my_current_evaluation_quizzes"><div class="icon "><i aria-hidden="true" class="fa-solid fa-question "></i></div><div class="visible-xs">Evaluation quizzes</div></a></li>

    <hr title="My resources">

    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Curriculums"><a href="/dashboards/my_curriculums"><div class="icon "><i aria-hidden="true" class="fa-solid fa-graduation-cap "></i></div><div class="visible-xs">Curriculums</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" id="sidebar-concepts-item" title="" data-original-title="Concepts"><a href="/concepts"><div class="icon "><i aria-hidden="true" class="fa-solid fa-file-text "></i></div><div class="visible-xs">Concepts</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" id="sidebar-dashboards-video-rooms" title="" data-original-title="Conference rooms"><a href="/dashboards/video_rooms"><div class="icon "><i aria-hidden="true" class="fa-solid fa-comments "></i></div><div class="visible-xs">Conference rooms</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Servers"><a href="/servers"><div class="icon "><i aria-hidden="true" class="fa-solid fa-server "></i></div><div class="visible-xs">Servers</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" id="sidebar-dashboards-my-containers" title="" data-original-title="Sandboxes"><a href="/user_containers/current"><div class="icon "><i aria-hidden="true" class="fa-solid fa-terminal "></i></div><div class="visible-xs">Sandboxes</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Tools"><a href="/dashboards/my_tools"><div class="icon "><i aria-hidden="true" class="fa-solid fa-wrench "></i></div><div class="visible-xs">Tools</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Video on demand"><a href="/dashboards/videos"><div class="icon "><i aria-hidden="true" class="fa-solid fa-film "></i></div><div class="visible-xs">Video on demand</div></a></li>
    

      <hr title="My campus">

      
      <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Peers"><a href="/users/peers"><div class="icon "><i aria-hidden="true" class="fa-solid fa-users "></i></div><div class="visible-xs">Peers</div></a></li>
      


<hr class="visible-xs">

<li>
      <div data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Discord">
        <a rel="noreferrer" target="_blank" href="https://discord.com/app">
          <div class="icon discord">
            <i aria-hidden="true" class="fa-brands fa-discord "></i>
          </div>
          <div class="visible-xs">Discord</div>
</a>      </div>

  <div data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="My Profile">
    <a href="/users/my_profile">
        <div class="image ">
          <div class="inner" style="background-image: url('https://intranet.alxswe.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMXhnQlE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--2c8dc3f2b5f6fc0828c917f6f6e80e8a3c2cfaed/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCeUdrQnlBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--596ca5c9d0091ccfe5374ad3fb3471cc1878f984/me.jpg')"></div>
        </div>

      <div class="visible-xs">My Profile</div>
</a>  </div>
</li>


    </ul>
  </div>
</nav>

      <div class="hidden-xs navigation sidebar">
  <a class="logo-container" href="/">
    <div class="logo"></div>
</a>
  <ul>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Home"><a href="/"><div class="icon "><i aria-hidden="true" class="fa-solid fa-home "></i></div><div class="visible-xs">Home</div></a></li>




    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="My Planning"><a href="/planning/me"><div class="icon "><i aria-hidden="true" class="fa-solid fa-calendar "></i></div><div class="visible-xs">My Planning</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" id="sidebar-current-projects-item" title="" data-original-title="Projects"><a href="/projects/current"><div class="icon "><i aria-hidden="true" class="fa-solid fa-code-fork "></i></div><div class="visible-xs">Projects</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="QA Reviews I can make"><a href="/corrections/to_review"><div class="icon "><i aria-hidden="true" class="fa-solid fa-check "></i></div><div class="visible-xs">QA Reviews I can make</div></a></li>
    
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Evaluation quizzes"><a href="/dashboards/my_current_evaluation_quizzes"><div class="icon "><i aria-hidden="true" class="fa-solid fa-question "></i></div><div class="visible-xs">Evaluation quizzes</div></a></li>

    <hr title="My resources">

    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Curriculums"><a href="/dashboards/my_curriculums"><div class="icon "><i aria-hidden="true" class="fa-solid fa-graduation-cap "></i></div><div class="visible-xs">Curriculums</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" id="sidebar-concepts-item" title="" data-original-title="Concepts"><a href="/concepts"><div class="icon "><i aria-hidden="true" class="fa-solid fa-file-text "></i></div><div class="visible-xs">Concepts</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" id="sidebar-dashboards-video-rooms" title="" data-original-title="Conference rooms"><a href="/dashboards/video_rooms"><div class="icon "><i aria-hidden="true" class="fa-solid fa-comments "></i></div><div class="visible-xs">Conference rooms</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Servers"><a href="/servers"><div class="icon "><i aria-hidden="true" class="fa-solid fa-server "></i></div><div class="visible-xs">Servers</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" id="sidebar-dashboards-my-containers" title="" data-original-title="Sandboxes"><a href="/user_containers/current"><div class="icon "><i aria-hidden="true" class="fa-solid fa-terminal "></i></div><div class="visible-xs">Sandboxes</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Tools"><a href="/dashboards/my_tools"><div class="icon "><i aria-hidden="true" class="fa-solid fa-wrench "></i></div><div class="visible-xs">Tools</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Video on demand"><a href="/dashboards/videos"><div class="icon "><i aria-hidden="true" class="fa-solid fa-film "></i></div><div class="visible-xs">Video on demand</div></a></li>
    

      <hr title="My campus">

      
      <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Peers"><a href="/users/peers"><div class="icon "><i aria-hidden="true" class="fa-solid fa-users "></i></div><div class="visible-xs">Peers</div></a></li>
      


<hr class="visible-xs">

<li>
      <div data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Discord">
        <a rel="noreferrer" target="_blank" href="https://discord.com/app">
          <div class="icon discord">
            <i aria-hidden="true" class="fa-brands fa-discord "></i>
          </div>
          <div class="visible-xs">Discord</div>
</a>      </div>

  <div data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="My Profile">
    <a href="/users/my_profile">
        <div class="image ">
          <div class="inner" style="background-image: url('https://intranet.alxswe.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMXhnQlE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--2c8dc3f2b5f6fc0828c917f6f6e80e8a3c2cfaed/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCeUdrQnlBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--596ca5c9d0091ccfe5374ad3fb3471cc1878f984/me.jpg')"></div>
        </div>

      <div class="visible-xs">My Profile</div>
</a>  </div>
</li>


  </ul>
</div>


    <main>
        

        <div id="layout-bars">
          
          <div class="px-5 py-3" id="student-switch-curriculum">
  <div class="dropdown d-flex flex-column gap-1">
    <span class="fs-small text-muted">Curriculum</span>

    <div aria-haspopup="true" aria-expanded="false" class="align-items-center d-flex gap-3" data-toggle="dropdown" id="student-switch-curriculum-dropdown" role="button">
      <div class="d-flex flex-column" style="line-height: 16px">
        <span class="fs-4 fw-600">
          Short Specializations
        </span>
        <span class="fs-small text-muted">
          Average: <span class="fw-500">81.34%</span>
        </span>
      </div>

      <div class="d-flex flex-column justify-content-center">
        <span style="margin-bottom: -4px">
          <i aria-hidden="true" class="fa-solid fa-angle-up  fa-fw"></i>
        </span>
        <span style="margin-top: -4px">
          <i aria-hidden="true" class="fa-solid fa-angle-down  fa-fw"></i>
        </span>
      </div>
    </div>

    <ul aria-labelledby="student-switch-curriculum-dropdown" class="dropdown-menu fs-5">
        <li>
          <a href="/curriculums/17/observe">
            <div class="align-items-center d-flex py-2">
              <div class="d-flex flex-column" style="line-height: 16px">
                <span class="fs-4 fw-500">
                  Short Specializations
                </span>
                <span class="text-muted">
                  Average: <span class="fw-500">81.34%</span>
                </span>
              </div>

                <span class="fw-600 text-info" style="margin-left: 42px">
                  <i aria-hidden="true" class="fa-solid fa-check "></i>
                </span>
            </div>
</a>        </li>
        <li>
          <a href="/curriculums/1/observe">
            <div class="align-items-center d-flex py-2">
              <div class="d-flex flex-column" style="line-height: 16px">
                <span class="fs-4 fw-500">
                  SE Foundations
                </span>
                <span class="text-muted">
                  Average: <span class="fw-500">93.9%</span>
                </span>
              </div>

            </div>
</a>        </li>
    </ul>
  </div>
</div>

          
          
          
        </div>

      <article class="">

        
  <div class="d-flex flex-wrap">

    <div class="flex-grow-1" id="curriculum_navigation_content">
      
<div class="project row">
  <div class="col-xs-12 col-lg-10 contains-images">

      <h1 class="gap">
    0x05. NodeJS Basics
    
  </h1>

  <div data-react-class="tags/Tags" data-react-props="{&quot;tags&quot;:[{&quot;id&quot;:35,&quot;value&quot;:&quot;Back-end&quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;},{&quot;id&quot;:46,&quot;value&quot;:&quot;JavaScript&quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;},{&quot;id&quot;:52,&quot;value&quot;:&quot;ES6&quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;},{&quot;id&quot;:62,&quot;value&quot;:&quot;NodeJS&quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;},{&quot;id&quot;:63,&quot;value&quot;:&quot;ExpressJS&quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;}]}" data-react-cache-id="tags/Tags-0"><div class="align-items-center d-flex flex-wrap gap-3 my-2"><span class="label label-primary" style="font-size: 14px;">Back-end</span><span class="label label-primary" style="font-size: 14px;">JavaScript</span><span class="label label-primary" style="font-size: 14px;">ES6</span><span class="label label-primary" style="font-size: 14px;">NodeJS</span><span class="label label-primary" style="font-size: 14px;">ExpressJS</span></div></div>

  <div data-react-class="projects/ProjectMetadata" data-react-props="{&quot;metadata&quot;:{&quot;weight&quot;:1,&quot;correction&quot;:{&quot;released&quot;:false,&quot;auto_correction_available_at&quot;:&quot;2024-07-22T18:00:00.000+03:00&quot;,&quot;requires_auto_correction&quot;:true,&quot;requires_manual_correction&quot;:false},&quot;bpi&quot;:{&quot;current&quot;:true,&quot;started&quot;:false,&quot;in_second_deadline&quot;:false,&quot;starts_at&quot;:&quot;2024-07-22T06:00:00.000+03:00&quot;,&quot;ends_at&quot;:&quot;2024-07-24T06:00:00.000+03:00&quot;,&quot;second_deadline_at&quot;:&quot;2024-07-27T06:00:00.000+03:00&quot;}}}" data-react-cache-id="projects/ProjectMetadata-0"><ul class="list-group metadata" id="project-metadata"><li class="list-group-item"><i aria-hidden="true" class="fa-solid fa-gear fa-fw"></i> Weight: 1</li><li class="list-group-item"><i aria-hidden="true" class="fa-solid fa-calendar fa-fw"></i> Project will start <span data-container="body" data-html="false" data-placement="auto top" data-toggle="tooltip" title="" data-original-title="2024-07-22 06:00 (GMT+03:00)"><span class="datetime">Jul 22, 2024 3:00 AM</span></span>, must end by <span data-container="body" data-html="false" data-placement="auto top" data-toggle="tooltip" title="" data-original-title="2024-07-24 06:00 (GMT+03:00)"><span class="datetime">Jul 24, 2024 3:00 AM</span></span></li><li class="list-group-item"><i aria-hidden="true" class="fa-solid fa-check fa-fw"></i> Checker will be released at <span data-container="body" data-html="false" data-placement="auto top" data-toggle="tooltip" title="" data-original-title="2024-07-22 18:00 (GMT+03:00)"><span class="datetime">Jul 22, 2024 3:00 PM</span></span></li><li class="list-group-item"><i aria-hidden="true" class="fa-solid fa-square-check fa-fw"></i> An auto review will be launched at the deadline</li></ul></div>




    


    <div id="project_id" style="display: none" data-project-id="1243"></div>



      

      

      <div class="panel panel-default" id="project-description">
  <div class="panel-body">
    <p><img src="https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2020/1/82692897e15d9f03256f.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240722%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20240722T101609Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=01ee1790ff65cc8f59f08ebe871d5337bdf0f2db256e4e27e9f9ae669a877461" alt="" loading="lazy" style=""></p>

<h2>Resources</h2>

<p><strong>Read or watch</strong>:</p>

<ul>
<li><a href="/rltoken/hROgW3QO9jqFnFP-Nzwh8A" title="Node JS getting started" target="_blank">Node JS getting started</a></li>
<li><a href="/rltoken/Wt69QV2xygB4GEqob26AjQ" title="Process API doc" target="_blank">Process API doc</a></li>
<li><a href="/rltoken/IS4y9rRCblX71W_oeXpymw" title="Child process" target="_blank">Child process</a></li>
<li><a href="/rltoken/XsfrhG9NRLuuaTpVZlZv_g" title="Express getting started" target="_blank">Express getting started</a></li>
<li><a href="/rltoken/EBGDj1FwLrK_y4kgxp8hfg" title="Mocha documentation" target="_blank">Mocha documentation</a></li>
<li><a href="/rltoken/vnDSbLsicMDdxcf5YUSXIg" title="Nodemon documentation" target="_blank">Nodemon documentation</a></li>
</ul>

<h2>Learning Objectives</h2>

<p>At the end of this project, you are expected to be able to <a href="/rltoken/vXmxtc5JH_CeIWReMTNhDA" title="explain to anyone" target="_blank">explain to anyone</a>, <strong>without the help of Google</strong>:</p>

<ul>
<li>run javascript using NodeJS</li>
<li>use NodeJS modules</li>
<li>use specific Node JS module to read files</li>
<li>use <code>process</code> to access command line arguments and the environment</li>
<li>create a small HTTP server using Node JS</li>
<li>create a small HTTP server using Express JS</li>
<li>create advanced routes with Express JS</li>
<li>use ES6 with Node JS with Babel-node</li>
<li>use Nodemon to develop faster</li>
</ul>

<h2>Requirements</h2>

<ul>
<li>Allowed editors: <code>vi</code>, <code>vim</code>, <code>emacs</code>, <code>Visual Studio Code</code></li>
<li>All your files will be interpreted/compiled on Ubuntu 18.04 LTS using <code>node</code> (version 12.x.x)</li>
<li>All your files should end with a new line</li>
<li>A <code>README.md</code> file, at the root of the folder of the project, is mandatory</li>
<li>Your code should use the <code>js</code> extension</li>
<li>Your code will be tested using <code>Jest</code> and the command <code>npm run test</code></li>
<li>Your code will be verified against lint using ESLint</li>
<li>Your code needs to pass all the tests and lint. You can verify the entire project running <code>npm run full-test</code></li>
<li>All of your functions/classes must be exported by using this format: <code>module.exports = myFunction;</code></li>
</ul>

<h2>Provided files</h2>

<h3><code>database.csv</code></h3>

<pre style="position: relative;"><code>firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS
</code><div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div></pre>

<h3><code>package.json</code></h3>

<details open="">
<summary>Click to show/hide file contents</summary>
<pre style="position: relative;"><code>
{
  "name": "node_js_basics",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "test": "./node_modules/mocha/bin/mocha --require babel-register --exit",
    "dev": "nodemon --exec babel-node --presets babel-preset-env ./server.js ./database.csv"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "chai-http": "^4.3.0",
    "express": "^4.17.1"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "nodemon": "^2.0.2",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "chai": "^4.2.0",
    "mocha": "^6.2.2",
    "request": "^2.88.0",
    "sinon": "^7.5.0"
  }
}
</code>
<div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div></pre>
</details>

<h3><code>babel.config.js</code></h3>

<details open="">
<summary>Click to show/hide file contents</summary>
<pre style="position: relative;"><code>
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
</code>
<div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div></pre>
</details>

<h3><code>.eslintrc.js</code></h3>

<details open="">
<summary>Click to show/hide file contents</summary>
<pre style="position: relative;"><code>
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
</code>
<div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div></pre>
</details>

<h3>and…</h3>

<p>Don’t forget to run <code>$ npm install</code> when you have the <code>package.json</code></p>

  </div>
</div>


      

      

        
          <h2 class="gap">Tasks</h2>

    <div data-role="task11751" data-position="1" id="task-num-0">
      <div class="panel panel-default task-card " id="task-11751">
  <span id="user_id" data-id="246179"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      0. Executing basic javascript with Node JS
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="246179"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>In the file <code>0-console.js</code>, create a function named <code>displayMessage</code> that prints in <code>STDOUT</code> the string argument.</p>

<pre style="position: relative;"><code>bob@dylan:~$ cat 0-main.js
const displayMessage = require('./0-console');

displayMessage("Hello NodeJS!");

bob@dylan:~$ node 0-main.js
Hello NodeJS!
bob@dylan:~$
</code><div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-backend-javascript</code></li>
            <li>Directory: <code>0x05-Node_JS_basic</code></li>
            <li>File: <code>0-console.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11751">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11751}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11752" data-position="2" id="task-num-1">
      <div class="panel panel-default task-card " id="task-11752">
  <span id="user_id" data-id="246179"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      1. Using Process stdin
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="246179"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Create a program named <code>1-stdin.js</code> that will be executed through command line:</p>

<ul>
<li>It should display the message <code>Welcome to Holberton School, what is your name?</code> (followed by a new line)</li>
<li>The user should be able to input their name on a new line</li>
<li>The program should display <code>Your name is: INPUT</code></li>
<li>When the user ends the program, it should display <code>This important software is now closing</code> (followed by a new line)</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>Your code will be tested through a child process, make sure you have everything you need for that</li>
</ul>

<pre style="position: relative;"><code>bob@dylan:~$ node 1-stdin.js 
Welcome to Holberton School, what is your name?
Bob
Your name is: Bob
bob@dylan:~$ 
bob@dylan:~$ echo "John" | node 1-stdin.js 
Welcome to Holberton School, what is your name?
Your name is: John
This important software is now closing
bob@dylan:~$ 
</code><div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-backend-javascript</code></li>
            <li>Directory: <code>0x05-Node_JS_basic</code></li>
            <li>File: <code>1-stdin.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11752">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11752}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11753" data-position="3" id="task-num-2">
      <div class="panel panel-default task-card " id="task-11753">
  <span id="user_id" data-id="246179"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      2. Reading a file synchronously with Node JS
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="246179"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Using the database <code>database.csv</code> (provided in project description), create a function <code>countStudents</code> in the file <code>2-read_file.js</code></p>

<ul>
<li>Create a function named <code>countStudents</code>. It should accept a path in argument</li>
<li>The script should attempt to read the database file synchronously</li>
<li>If the database is not available, it should throw an error with the text <code>Cannot load the database</code></li>
<li>If the database is available, it should log the following message to the console <code>Number of students: NUMBER_OF_STUDENTS</code></li>
<li>It should log the number of students in each field, and the list with the following format: <code>Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES</code></li>
<li>CSV file can contain empty lines (at the end) - and they are not a valid student!</li>
</ul>

<pre style="position: relative;"><code>bob@dylan:~$ cat 2-main_0.js
const countStudents = require('./2-read_file');

countStudents("nope.csv");

bob@dylan:~$ node 2-main_0.js
2-read_file.js:9
    throw new Error('Cannot load the database');
    ^

Error: Cannot load the database
...
bob@dylan:~$
bob@dylan:~$ cat 2-main_1.js
const countStudents = require('./2-read_file');

countStudents("database.csv");

bob@dylan:~$ node 2-main_1.js
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
</code><div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-backend-javascript</code></li>
            <li>Directory: <code>0x05-Node_JS_basic</code></li>
            <li>File: <code>2-read_file.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11753">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11753}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11754" data-position="4" id="task-num-3">
      <div class="panel panel-default task-card " id="task-11754">
  <span id="user_id" data-id="246179"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      3. Reading a file asynchronously with Node JS
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="246179"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Using the database <code>database.csv</code> (provided in project description), create a function <code>countStudents</code> in the file <code>3-read_file_async.js</code></p>

<ul>
<li>Create a function named <code>countStudents</code>. It should accept a path in argument (same as in <code>2-read_file.js</code>)</li>
<li>The script should attempt to read the database file asynchronously</li>
<li>The function should return a Promise</li>
<li>If the database is not available, it should throw an error with the text <code>Cannot load the database</code></li>
<li>If the database is available, it should log the following message to the console <code>Number of students: NUMBER_OF_STUDENTS</code></li>
<li>It should log the number of students in each field, and the list with the following format: <code>Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES</code></li>
<li>CSV file can contain empty lines (at the end) - and they are not a valid student!</li>
</ul>

<pre style="position: relative;"><code>bob@dylan:~$ cat 3-main_0.js
const countStudents = require('./3-read_file_async');

countStudents("nope.csv")
    .then(() =&gt; {
        console.log("Done!");
    })
        .catch((error) =&gt; {
        console.log(error);
    });

bob@dylan:~$ node 3-main_0.js
Error: Cannot load the database
...
bob@dylan:~$
bob@dylan:~$ cat 3-main_1.js
const countStudents = require('./3-read_file_async');

countStudents("database.csv")
    .then(() =&gt; {
        console.log("Done!");
    })
        .catch((error) =&gt; {
        console.log(error);
    });
console.log("After!");

bob@dylan:~$ node 3-main_1.js
After!
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
Done!
bob@dylan:~$ 
</code><div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div></pre>

<p><strong>Tips:</strong></p>

<ul>
<li>Using asynchronous callbacks is the preferred way to write code in Node to avoid blocking threads</li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-backend-javascript</code></li>
            <li>Directory: <code>0x05-Node_JS_basic</code></li>
            <li>File: <code> 3-read_file_async.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11754">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11754}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11755" data-position="5" id="task-num-4">
      <div class="panel panel-default task-card " id="task-11755">
  <span id="user_id" data-id="246179"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      4. Create a small HTTP server using Node's HTTP module
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="246179"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>In a file named <code>4-http.js</code>, create a small HTTP server using the <code>http</code> module:</p>

<ul>
<li>It should be assigned to the variable <code>app</code> and this one must be exported </li>
<li>HTTP server should listen on port 1245</li>
<li>Displays <code>Hello Holberton School!</code> in the page body for any endpoint as plain text</li>
</ul>

<p>In terminal 1:</p>

<pre style="position: relative;"><code>bob@dylan:~$ node 4-http.js
...
</code><div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div></pre>

<p>In terminal 2:</p>

<pre style="position: relative;"><code>bob@dylan:~$ curl localhost:1245 &amp;&amp; echo ""
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/any_endpoint &amp;&amp; echo ""
Hello Holberton School!
bob@dylan:~$ 
</code><div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-backend-javascript</code></li>
            <li>Directory: <code>0x05-Node_JS_basic</code></li>
            <li>File: <code>4-http.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11755">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11755}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11756" data-position="6" id="task-num-5">
      <div class="panel panel-default task-card " id="task-11756">
  <span id="user_id" data-id="246179"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      5. Create a more complex HTTP server using Node's HTTP module
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="246179"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>In a file named <code>5-http.js</code>, create a small HTTP server using the <code>http</code> module:</p>

<ul>
<li>It should be assigned to the variable app and this one must be exported</li>
<li>HTTP server should listen on port 1245</li>
<li>It should return plain text</li>
<li>When the URL path is <code>/</code>, it should display <code>Hello Holberton School!</code> in the page body</li>
<li>When the URL path is <code>/students</code>, it should display <code>This is the list of our students</code> followed by the same content as the file <code>3-read_file_async.js</code> (with and without the database) - the name of the database must be passed as argument of the file</li>
<li>CSV file can contain empty lines (at the end) - and they are not a valid student!</li>
</ul>

<p>Terminal 1:</p>

<pre style="position: relative;"><code>bob@dylan:~$ node 5-http.js database.csv
...
</code><div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div></pre>

<p>In terminal 2:</p>

<pre style="position: relative;"><code>bob@dylan:~$ curl localhost:1245 &amp;&amp; echo ""
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students &amp;&amp; echo ""
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
</code><div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-backend-javascript</code></li>
            <li>Directory: <code>0x05-Node_JS_basic</code></li>
            <li>File: <code>5-http.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11756">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11756}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11757" data-position="7" id="task-num-6">
      <div class="panel panel-default task-card " id="task-11757">
  <span id="user_id" data-id="246179"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      6. Create a small HTTP server using Express
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="246179"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Install Express and in a file named <code>6-http_express.js</code>, create a small HTTP server using Express module:</p>

<ul>
<li>It should be assigned to the variable <code>app</code> and this one must be exported </li>
<li>HTTP server should listen on port 1245</li>
<li>Displays <code>Hello Holberton School!</code> in the page body for the endpoint <code>/</code></li>
</ul>

<p>In terminal 1:</p>

<pre style="position: relative;"><code>bob@dylan:~$ node 6-http_express.js
...
</code><div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div></pre>

<p>In terminal 2:</p>

<pre style="position: relative;"><code>bob@dylan:~$ curl localhost:1245 &amp;&amp; echo ""
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/any_endpoint &amp;&amp; echo ""
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="utf-8"&gt;
&lt;title&gt;Error&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;pre&gt;Cannot GET /lskdlskd&lt;/pre&gt;
&lt;/body&gt;
&lt;/html&gt; 
bob@dylan:~$ 
</code><div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-backend-javascript</code></li>
            <li>Directory: <code>0x05-Node_JS_basic</code></li>
            <li>File: <code>6-http_express.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11757">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11757}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11758" data-position="8" id="task-num-7">
      <div class="panel panel-default task-card " id="task-11758">
  <span id="user_id" data-id="246179"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      7. Create a more complex HTTP server using Express
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="246179"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>In a file named <code>7-http_express.js</code>, recreate the small HTTP server using <code>Express</code>:</p>

<ul>
<li>It should be assigned to the variable app and this one must be exported</li>
<li>HTTP server should listen on port 1245</li>
<li>It should return plain text</li>
<li>When the URL path is <code>/</code>, it should display <code>Hello Holberton School!</code> in the page body</li>
<li>When the URL path is <code>/students</code>, it should display <code>This is the list of our students</code> followed by the same content as the file <code>3-read_file_async.js</code> (with and without the database) - the name of the database must be passed as argument of the file</li>
<li>CSV file can contain empty lines (at the end) - and they are not a valid student!</li>
</ul>

<p>Terminal 1:</p>

<pre style="position: relative;"><code>bob@dylan:~$ node 7-http_express.js database.csv
...
</code><div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div></pre>

<p>In terminal 2:</p>

<pre style="position: relative;"><code>bob@dylan:~$ curl localhost:1245 &amp;&amp; echo ""
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students &amp;&amp; echo ""
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
</code><div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-backend-javascript</code></li>
            <li>Directory: <code>0x05-Node_JS_basic</code></li>
            <li>File: <code>7-http_express.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11758">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11758}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11759" data-position="9" id="task-num-8">
      <div class="panel panel-default task-card " id="task-11759">
  <span id="user_id" data-id="246179"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      8. Organize a complex HTTP server using Express
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="246179"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Obviously writing every part of a server within a single file is not sustainable. Let’s create a full server in a directory named <code>full_server</code>.</p>

<p>Since you have used ES6 and Babel in the past projects, let’s use <code>babel-node</code> to allow to use ES6 functions like <code>import</code> or <code>export</code>.</p>

<h4>8.1 Organize the structure of the server</h4>

<ul>
<li>Create 2 directories within:

<ul>
<li><code>controllers</code></li>
<li><code>routes</code></li>
</ul></li>
<li>Create a file <code>full_server/utils.js</code>, in the file create a function named <code>readDatabase</code> that accepts a file path as argument:

<ul>
<li>It should read the database asynchronously</li>
<li>It should return a promise</li>
<li>When the file is not accessible, it should reject the promise with the error</li>
<li>When the file can be read, it should return an object of arrays of the firstname of students per fields</li>
</ul></li>
</ul>

<h4>8.2 Write the App controller</h4>

<p>Inside the file <code>full_server/controllers/AppController.js</code>:</p>

<ul>
<li>Create a class named <code>AppController</code>. Add a static method named <code>getHomepage</code></li>
<li>The method accepts <code>request</code> and <code>response</code> as argument. It returns a 200 status and the message <code>Hello Holberton School!</code></li>
</ul>

<h4>8.3 Write the Students controller</h4>

<p>Inside the file <code>full_server/controllers/StudentsController.js</code>, create a class named <code>StudentsController</code>. Add two static methods:</p>

<p>The first one is <code>getAllStudents</code>:</p>

<ul>
<li>The method accepts <code>request</code> and <code>response</code> as argument</li>
<li>It should return a status 200</li>
<li>It calls the function <code>readDatabase</code> from the <code>utils</code> file, and display in the page:

<ul>
<li>First line: <code>This is the list of our students</code></li>
<li>And for each field (order by alphabetic order case insensitive), a line that displays the number of students in the field, and the list of first names (ordered by appearance in the database file) with the following format: <code>Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES</code></li>
</ul></li>
<li>If the database is not available, it should return a status 500 and the error message <code>Cannot load the database</code></li>
</ul>

<p>The second one is <code>getAllStudentsByMajor</code>:</p>

<ul>
<li>The method accepts <code>request</code> and <code>response</code> as argument</li>
<li>It should return a status 200</li>
<li>It uses a parameter that the user can pass to the browser <code>major</code>. The <code>major</code> can only be <code>CS</code> or <code>SWE</code>. If the user is passing another parameter, the server should return a 500 and the error <code>Major parameter must be CS or SWE</code></li>
<li>It calls the function <code>readDatabase</code> from the <code>utils</code> file, and display in the page the list of first names  for the students (ordered by appearance in the database file) in the specified field <code>List: LIST_OF_FIRSTNAMES_IN_THE_FIELD</code></li>
<li>If the database is not available, it should return a status 500 and the error message <code>Cannot load the database</code></li>
</ul>

<h4>8.4 Write the routes</h4>

<p>Inside the file <code>full_server/routes/index.js</code>:</p>

<ul>
<li>Link the route <code>/</code> to the <code>AppController</code></li>
<li>Link the route <code>/students</code>  and <code>/students/:major</code>to the <code>StudentsController</code></li>
</ul>

<h4>8.5 Write the server reusing everything you created</h4>

<p>Inside the file named <code>full_server/server.js</code>, create a small Express server:</p>

<ul>
<li>It should use the routes defined in <code>full_server/routes/index.js</code></li>
<li>It should use the port <code>1245</code></li>
</ul>

<h4>8.6 Update <code>package.json</code> (if you are running it from outside the folder <code>full_server</code>)</h4>

<p>If you are starting node from outside of the folder <code>full_server</code>, you will have to update the command <code>dev</code> by: <code>nodemon --exec babel-node --presets babel-preset-env ./full_server/server.js ./database.csv</code></p>

<p><strong>Warning:</strong></p>

<ul>
<li>Don’t forget to export your express app at the end of <code>server.js</code> (<code>export default app;</code>)</li>
<li>The database filename is passed as argument of the <code>server.js</code> BUT, for testing purpose, you should retrieve this filename at the execution (when <code>getAllStudents</code> or <code>getAllStudentsByMajor</code>  are called for example)</li>
</ul>

<p>In terminal 1:</p>

<pre style="position: relative;"><code>bob@dylan:~$ npm run dev
...
</code><div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div></pre>

<p>In terminal 2:</p>

<pre style="position: relative;"><code>bob@dylan:~$ curl localhost:1245 &amp;&amp; echo ""
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students &amp;&amp; echo ""
This is the list of our students
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students/SWE &amp;&amp; echo ""
List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students/French -vvv &amp;&amp; echo ""
*   Trying 127.0.0.1...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 1245 (#0)
&gt; GET /students/SWES HTTP/1.1
&gt; Host: localhost:1245
&gt; User-Agent: curl/7.58.0
&gt; Accept: */*
&gt;
&lt; HTTP/1.1 500 Internal Server Error
&lt; X-Powered-By: Express
&lt; Date: Mon, 06 Jul 2020 03:29:00 GMT
&lt; Connection: keep-alive
&lt; Content-Length: 33
&lt;
* Connection #0 to host localhost left intact
Major parameter must be CS or SWE
bob@dylan:~$ 
</code><div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div></pre>

<p>If you want to add test to validate your integration, you will need to add this file: <code>.babelrc</code>
</p><details>
<summary>Click to show/hide file contents</summary>
<pre style="position: relative;"><code>
{
    "presets": [["env", {"exclude": ["transform-regenerator"]}]]
}
</code>
<div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div></pre>
</details><p></p>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-backend-javascript</code></li>
            <li>Directory: <code>0x05-Node_JS_basic</code></li>
            <li>File: <code>full_server/utils.js, full_server/controllers/AppController.js, full_server/controllers/StudentsController.js, full_server/routes/index.js, full_server/server.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11759">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11759}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>




          <div class="modal fade" id="container-specs-modal"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button><h4 class="modal-title">Recommended Sandbox</h4></div><div class="modal-body"><div data-react-class="user_containers/ContainerSpecs" data-react-props="{&quot;containerModelName&quot;:&quot;Sandbox&quot;,&quot;containerSpecs&quot;:[{&quot;available&quot;:true,&quot;description&quot;:&quot;\u003cp\u003eUbuntu 18.04 with Node 12\u003c/p\u003e\n&quot;,&quot;id&quot;:29,&quot;name&quot;:&quot;Ubuntu 18.04 - Node 12&quot;,&quot;online&quot;:true,&quot;container&quot;:{&quot;container_id&quot;:null,&quot;id&quot;:674564,&quot;restart_uri&quot;:&quot;/user_containers/674564/restart.json&quot;,&quot;status&quot;:&quot;asleep&quot;,&quot;uri&quot;:&quot;/user_containers/674564.json&quot;,&quot;wake_uri&quot;:&quot;/user_containers/674564/wake.json&quot;,&quot;webterm_uri&quot;:&quot;/user_containers/674564/webterm&quot;,&quot;host&quot;:null,&quot;password&quot;:&quot;bc4c3d79b7a0694250c3&quot;,&quot;ports&quot;:{&quot;1245&quot;:59248,&quot;22&quot;:59250,&quot;4000&quot;:59246,&quot;5000&quot;:59245,&quot;5001&quot;:59244,&quot;8000&quot;:59243,&quot;8080&quot;:59242,&quot;3000&quot;:59247,&quot;80&quot;:59249}}}],&quot;containersLimit&quot;:2,&quot;csrfToken&quot;:&quot;5YTMnCvQ01Mlv3S7cJALWiIBh3jFZtUib59SBJtgncZax8QPYDble-XwJKbKBLRrkqJk8L1sOTi-Genf77msRg&quot;,&quot;startStatusURI&quot;:&quot;/user_containers/start_status.json&quot;,&quot;startURI&quot;:&quot;/user_containers/start.json&quot;}" data-react-cache-id="user_containers/ContainerSpecs-0"><div><div class="d-flex gap-4 sandboxes-filters"><a class="btn btn-outline-primary"><i aria-hidden="true" class="fa-solid fa-filter"></i><span class="ml-2">Running only</span></a><div class="align-items-center d-flex" style="position: relative; width: 100%;"><input class="form-control" placeholder="Search for an image ..." type="search" value=""></div></div><div class="mt-3"><h3>1 image<small class="ml-2">(1/2 Sandboxes spawned)</small></h3></div><div class="mt-3"><div class="panel panel-default"><div class="panel-body border-left-info" style="border-left: 6px solid;"><div class="align-items-center d-flex flex-wrap justify-content-between"><div><h3 class="mt-0"><i aria-hidden="true" class="fa-solid fa-terminal text-info"></i><span class="ml-2">Ubuntu 18.04 - Node 12</span><span class="fs-4 label label-info ml-2">Asleep</span></h3><div class="mt-2 text-muted"><p>Ubuntu 18.04 with Node 12</p>
</div></div><div class="d-flex flex-wrap gap-5"><a class="btn btn-success"><i aria-hidden="true" class="fa-solid fa-play"></i><span class="ml-2">Wake</span></a><a class="btn btn-danger"><i aria-hidden="true" class="fa-solid fa-trash"></i><span class="ml-2">Destroy</span></a></div></div></div></div></div></div></div></div></div></div></div>

  </div>
</div>


      
    </div>
  </div>


      </article>

        <div class="copyright">Copyright © 2024 ALX, All rights reserved.</div>

    </main>

        <button class="btn btn-primary atop-help" id="search-button" data-search-active="false" data-toggle="modal" data-target="#search-modal">
  <i aria-hidden="true" class="fa-solid fa-magnifying-glass "></i>
  <i aria-hidden="true" class="fa-solid fa-window-minimize "></i>
</button>

        <div class="modal fade" id="search-modal" tabindex="-1" role="dialog" aria-labelledby="search-modal-label">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <div id="search-bar-container">
    <input id="search-bar" autocomplete="off" type="text" name="hbtn-search-bar" placeholder="✨Start search by typing in this field✨">
</div>

            </div>
            <div class="modal-body">
                <div id="modal-spinner" class="spinner gap">
                    <div class="bounce1"></div>
                    <div class="bounce2"></div>
                    <div class="bounce3"></div>
                </div>
                <div id="search-results-container">
</div>

            </div>
        </div>
    </div>
</div>



        <div class="modal fade" id="markdownGuideModal" tabindex="-1" role="dialog" aria-labelledby="markdownGuideModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
          <h4 class="modal-title">Markdown Guide</h4>
        </div>
        <div class="modal-body">
            <h4>Emphasis</h4>
<pre style="position: relative;">**<strong>bold</strong>**
*<em>italics</em>*
~~<strike>strikethrough</strike>~~<div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div></pre>
<h4>Headers</h4>
<pre style="position: relative;"># Big header
## Medium header
### Small header
#### Tiny header<div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div></pre>
<h4>Lists</h4>
<pre style="position: relative;">* Generic list item
* Generic list item
* Generic list item

1. Numbered list item
2. Numbered list item
3. Numbered list item<div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div></pre>
<h4>Links</h4>
<pre style="position: relative;">[Text to display](http://www.example.com)<div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div></pre>
<h4>Quotes</h4>
<pre style="position: relative;">&gt; This is a quote.
&gt; It can span multiple lines!<div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div></pre>
<h4>Images</h4>
<p>CSS style available: <code>width, height, opacity</code></p>
<pre style="position: relative;">![](http://www.example.com/image.jpg)
![](http://www.example.com/image.jpg | width: 200px)
![](http://www.example.com/image.jpg | height: 124px | width: 80px | opacity: 0.6)
<div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div></pre>
<h4>Tables</h4>
<pre style="position: relative;">| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| John     | Doe      | Male     |
| Mary     | Smith    | Female   |

<em>Or without aligning the columns...</em>

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| John | Doe | Male |
| Mary | Smith | Female |
<div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div></pre>
<h4>Displaying code</h4>
<pre style="position: relative;">`var example = "hello!";`

<em>Or spanning multiple lines...</em>

```
var example = "hello!";
alert(example);
```<div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div></pre>
        </div>
    </div>
  </div>
</div>


        <script id="cody-snippet">
          window.codySettings = { widget_id: "9993bc72-2258-452b-a4bf-b2fe1ad5e0d7" };
          !function(){var t=window,e=document,a=function(){var t=e.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://trinketsofcody.com/cody-widget.js";var a=e.getElementsByTagName("script")[0];a.parentNode.insertBefore(t,a)};"complete"===document.readyState?a():t.attachEvent?t.attachEvent("onload",a):t.addEventListener("load",a,!1)}();
        </script>
  

<script type="text/javascript" id="">window.userpilotSettings={token:"NX-b636a33d"};</script>
<script type="text/javascript" id="" src="https://js.userpilot.io/sdk/latest.js"></script><link rel="stylesheet" href="https://alx-tools.github.io/savanna-content-styles/assets/css/styles.css">
<script type="text/javascript" id="">for(var dl=window.dataLayer||[],user=void 0,i=0;i<dl.length;i++)if(dl[i].userId){user=dl[i];break}user&&user.batch&&user.curriculum&&(userpilot.identify("savanna-"+user.userId.toString(),{cohortId:user.batch.id,cohortName:user.batch.fullNameWithC,locationId:user.batch.schoolLocation.id,locationName:user.batch.schoolLocation.name,curriculumId:user.curriculum.id,curriculumName:user.curriculum.name}),userpilot.reload());</script>
<iframe id="_hjSafeContext_15153697" title="_hjSafeContext" tabindex="-1" aria-hidden="true" src="about:blank" style="display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;"></iframe><div id="userpilotContent" key="1377467235" theme_id="0"></div><div id="cody-wrapper"><style>
  #cody-wrapper .cody-launcher {
    position: var(--position) !important;
    left: var(--left) !important;
    right: var(--right) !important;
    bottom: var(--launcher-bottom) !important;
    border-radius: 9999px !important;
    border: 0 !important;
    padding: 0 !important;
    box-sizing: border-box !important;
    z-index: 999999 !important;
    overflow: hidden !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    transition: box-shadow, scale 300ms linear !important;
    animation: cody-launcher-pulse 4s infinite !important;
    background-color: var(--background-color) !important;
    color: var(--text-color) !important;
    cursor: pointer !important;
    --icon-margin: 12px;
    --close-icon-margin: 16px;
  }

    #cody-wrapper {
    --position: fixed;
    --left: unset;
    --right: 20px;
    --launcher-bottom: 20px;
    --frame-bottom: 90px;
    --background-color: #FBD647;
    --text-color: #020617;
    --shadow-color: 251, 214, 71;
  }

  @media screen and (max-width: 512px) {
    #cody-wrapper {
      --left: unset;
      --right: 10px;
    }
  }

  
  #cody-wrapper .cody-launcher:hover {
    scale: 1.1 !important;
  }

  #cody-wrapper .cody-launcher .cody-close-icon {
    display: none !important;
  }

  #cody-wrapper[data-launcher-open] .cody-launcher .cody-icon {
    display: none !important;;
  }

  #cody-wrapper[data-launcher-open] .cody-launcher .cody-close-icon {
    display: block !important;;
  }

  #cody-wrapper .cody-iframe {
    z-index: 99999 !important;
    transition: visibility .5s, opacity .5s linear !important;
    background-color: #fff !important;
    position: fixed !important;
    left: var(--left) !important;
    right: var(--right) !important;
    bottom: var(--frame-bottom) !important;
    height: 75vh !important;
    width: 448px !important;
    border-radius: 10px !important;
    overflow: hidden !important;
    box-shadow: 0 2px 4px rgba(0, 18, 26, .08), 0 3px 12px rgba(0, 18, 26, .16), 0 2px 14px 0 rgba(0, 18, 26, .2) !important;
    border: 0 !important;
    display: none !important;
  }

  @media screen and (max-height: 667px) {
    #cody-wrapper .cody-iframe {
      height: calc(100vh - 110px) !important;
    }
  }

  @media screen and (max-width: 448px) {
    #cody-wrapper .cody-iframe {
      width: calc(100vw - 20px) !important;
    }
  }

  #cody-wrapper[data-launcher-open] .cody-iframe {
    display: block !important;
  }

  @keyframes cody-launcher-pulse {
    0%, 100% {
      box-shadow: 0 0 18px 4px rgba(var(--shadow-color), 0.8);
    }
    50% {
      box-shadow: 0 0 12px 3px rgba(var(--shadow-color), 0.4);
    }
  }
</style>

<button class="cody-launcher" style="width: 56px; height: 56px; font-size: 16px;">
    <svg class="cody-icon" style="aspect-ratio: 1 / 1; width: 100%; height: 100%; margin: var(--icon-margin)" aria-hidden="true" viewBox="5 7 45 45" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
    <path d="M41.18 17.86a52.75 52.75 0 0 0-19 0c-.54.1-7.9 2.7-7.9 2.7h.01c-2.9 1.01-4.91 3.75-4.91 6.9v4.85c0 2.96 1.78 5.56 4.4 6.7l17.91 8.93v-6.67c3.18 0 6.36-.29 9.5-.86 4.13-.76 7.13-4.36 7.13-8.56v-5.44c-.01-4.19-3.01-7.79-7.14-8.55zm3.47 14c0 2.43-1.74 4.52-4.13 4.95-2.91.53-5.88.8-8.84.8s-5.93-.27-8.84-.8c-2.39-.44-4.13-2.52-4.13-4.95v-5.44c0-2.43 1.74-4.52 4.13-4.95 2.91-.53 5.88-.8 8.84-.8s5.93.27 8.84.8c2.39.44 4.13 2.52 4.13 4.95v5.44z" fill="currentColor"></path>
    <path d="M26.17 32.79c-.84 0-1.53-.68-1.53-1.53v-4.24c0-.84.68-1.53 1.53-1.53s1.53.68 1.53 1.53v4.24c-.01.85-.69 1.53-1.53 1.53zM37.17 32.79c-.84 0-1.53-.68-1.53-1.53v-4.24c0-.84.68-1.53 1.53-1.53s1.53.68 1.53 1.53v4.24c0 .85-.68 1.53-1.53 1.53z" fill="currentColor"></path>
</svg>    <svg style="aspect-ratio: 1/1; width: 100%; height: 100%; margin: var(--close-icon-margin);" class="cody-close-icon" launchercloseicon="chevron-down" aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M239 401c9.4 9.4 24.6 9.4 33.9 0L465 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-175 175L81 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 401z" fill="currentColor"></path>
</svg></button></div></body><grammarly-desktop-integration data-grammarly-shadow-root="true"></grammarly-desktop-integration></html>