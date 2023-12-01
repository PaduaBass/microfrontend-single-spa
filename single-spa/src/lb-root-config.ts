import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import<LifeCycles>(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location: Location) => location.pathname === "/",
});

registerApplication({
  name: "@lb/react-single",
  app: () => System.import<LifeCycles>("@lb/react-single"),
  activeWhen: (location: Location) => location.pathname === "/react-single",
});

registerApplication({
  name: "@lb/react-multiples",
  app: () => System.import<LifeCycles>("@lb/react-multiples"),
  activeWhen: ["/react-parcel"],
});

registerApplication({
  name: "@lb/react-parcel",
  app: () => System.import<LifeCycles>("@lb/react-parcel"),
  activeWhen: (location: Location) => location.pathname === "/react-parcel",
});

registerApplication({
  name: "@lb/react-route",
  app: () => System.import<LifeCycles>("@lb/react-route"),
  activeWhen: (location: Location) => location.pathname === "/react-route",
});

// registerApplication({
//   name: "@lb/navbar",
//   app: () => System.import("@lb/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
