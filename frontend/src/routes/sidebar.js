s; /**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: "/app/dashboard", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Dashboard", // name that appear in Sidebar
  },
  {
    path: "/app/profile",
    icon: "OutlinePersonIcon",
    name: "Profile",
  },
  {
    path: "/app/shifts",
    icon: "ShiftsIcon",
    name: "Shifts",
  },
  {
    path: "/app/branches",
    icon: "BranchesIcon",
    name: "Branches",
  },
  {
    path: "/app/employees",
    icon: "UsersIcon",
    name: "Employees",
  },
  {
    path: "/app/reports",
    icon: "ReportIcon",
    name: "Reports",
  },
  {
    path: "/app/subscription",
    icon: "SubscriptionIcon",
    name: "Subscription",
  },
  {
    path: "/app/adjust",
    icon: "AdjustIcon",
    name: "Adjust",
  },
  {
    path: "/app/help",
    icon: "HelpIcon",
    name: "Help",
  },
];

export default routes;
