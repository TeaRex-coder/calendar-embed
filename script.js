(function (C, A, L) {
  const cal =
    C.Cal ||
    (C.Cal = function () {
      cal.ns = {};
      cal.q = cal.q || [];
      const script = document.createElement("script");
      script.src = A;
      document.head.appendChild(script);
      cal.loaded = true;

      const api = function () {
        cal.q.push(arguments);
      };
      const namespace = arguments[1];

      api.q = api.q || [];
      typeof namespace === "string"
        ? (cal.ns[namespace] = api) && cal.q.push(arguments)
        : cal.q.push(arguments);
      return api;
    });

  if (arguments[0] === L) {
    return;
  }

  cal.apply(null, arguments);
})(window, "https://app.cal.com/embed/embed.js", "init");

Cal("init", { origin: "https://app.cal.com" });
Cal("inline", {
  elementOrSelector: "#my-cal-inline",
  calLink: "alexboutoille",
});

Cal("ui", {
  styles: { branding: { brandColor: "#000000" } },
  hideEventTypeDetails: false,
  tab: { label: "Meet me!" },
});
