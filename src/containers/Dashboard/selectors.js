import { createSelector } from "reselect";

const selectDashboardDomain = (state) => state.dashboard;

const makeSelectAnalytics = () =>
  createSelector(selectDashboardDomain, (substate) => {
    const analytics = {
      FCPTime: {
        label: "First Contentful Paint",
        data: [],
        borderColor: "rgb(131, 144, 115)",
      },
      TTFBTime: {
        label: "Time To First Byte",
        data: [],
        borderColor: "rgb(110, 99, 98)",
      },
      domLoadTime: {
        label: "DOM Load",
        data: [],
        borderColor: "rgb(78, 74, 89)",
      },
      windowLoadTime: {
        label: "Window Load",
        data: [],
        borderColor: "rgb(57, 64, 83)",
      },
    };
    substate.analytics.forEach((analytic) => {
      ["FCPTime", "TTFBTime", "domLoadTime", "windowLoadTime"].forEach(
        (key) => {
          analytics[key].data.push({
            time: analytic[key],
            createdAt: analytic.createdAt,
          });
        }
      );
    });
    return analytics;
  });

const makeSelectAnalyticsPending = () =>
  createSelector(
    selectDashboardDomain,
    (substate) => substate.isAnalyticsPending
  );

export { makeSelectAnalytics, makeSelectAnalyticsPending };
