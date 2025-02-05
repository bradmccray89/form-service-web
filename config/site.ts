export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Form Service Web",
  description: "Create and customize forms with ease.",
  navItems: [
    {
      label: "Home",
      href: "/",
      active: true,
    },
    {
      label: "Docs",
      href: "/docs",
      active: true,
    },
    {
      label: "Pricing",
      href: "/pricing",
      active: true,
    },
    {
      label: "Blog",
      href: "/blog",
      active: false,
    },
    {
      label: "About",
      href: "/about",
      active: false,
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
      active: true,
    },
    {
      label: "Docs",
      href: "/docs",
      active: true,
    },
    {
      label: "Pricing",
      href: "/pricing",
      active: true,
    },
    {
      label: "Profile",
      href: "/profile",
      active: false,
    },
    {
      label: "Dashboard",
      href: "/dashboard",
      active: false,
    },
    {
      label: "Projects",
      href: "/projects",
      active: false,
    },
    {
      label: "Team",
      href: "/team",
      active: false,
    },
    {
      label: "Calendar",
      href: "/calendar",
      active: false,
    },
    {
      label: "Settings",
      href: "/settings",
      active: false,
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
      active: false,
    },
    {
      label: "Logout",
      href: "/logout",
      active: false,
    },
  ],
  links: {
    github: "https://github.com/bradmccray89/form-service-web",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
