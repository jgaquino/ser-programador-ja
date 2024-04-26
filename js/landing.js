jQuery(document).ready(function () {
  $("html, body").addClass("ready").animate({ scrollTop: 0 }, 500);

  const valuesToAnimation = {
    duration: 1300,
    delay: 500,
  };

  anime({
    targets: ".html5",
    translateX: [
      {
        value: 0,
        duration: valuesToAnimation.duration,
        delay: valuesToAnimation.delay,
      },
    ],
    translateY: [
      {
        value: -110,
        duration: valuesToAnimation.duration,
        delay: valuesToAnimation.delay,
      },
    ],
  });

  anime({
    targets: ".css3",
    translateX: [
      {
        value: 10,
        duration: valuesToAnimation.duration,
        delay: valuesToAnimation.delay,
      },
    ],
    translateY: [
      {
        value: -95,
        duration: valuesToAnimation.duration,
        delay: valuesToAnimation.delay,
      },
    ],
  });

  anime({
    targets: ".js",
    translateX: [
      {
        value: 100,
        duration: valuesToAnimation.duration,
        delay: valuesToAnimation.delay,
      },
    ],
  });

  anime({
    targets: ".nodejs",
    translateX: [
      {
        value: 50,
        duration: valuesToAnimation.duration,
        delay: valuesToAnimation.delay,
      },
    ],
    translateY: [
      {
        value: 90,
        duration: valuesToAnimation.duration,
        delay: valuesToAnimation.delay,
      },
    ],
  });

  anime({
    targets: ".angular",
    translateX: [
      {
        value: 40,
        duration: valuesToAnimation.duration,
        delay: valuesToAnimation.delay,
      },
    ],
    translateY: [
      {
        value: 80,
        duration: valuesToAnimation.duration,
        delay: valuesToAnimation.delay,
      },
    ],
  });

  anime({
    targets: ".react",
    translateX: [{ value: -76, duration: 1000, delay: 500 }],
  });
});
