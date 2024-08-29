import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Group, Code, ScrollArea, rem } from "@mantine/core";
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from "@tabler/icons-react";
import classes from "./NavbarNested.module.css";
import { Logo } from "./Logo";
import { LinksGroup } from "./NavbarLinksGroup";
import { UserButton } from "./UserButton";

const mockdata = [
  {
    label: "Dashboard",
    icon: (props) => <IconGauge {...props} color="rgb(202, 138, 4)" />,
    link: "/dashboard", // Define the link for Dashboard
  },
  {
    label: "Market news",
    icon: (props) => <IconNotes {...props} color="rgb(202, 138, 4)" />,

    initiallyOpened: true,
    links: [
      { label: "Overview", link: "/profile" },
      { label: "Forecasts", link: "/login" },
      { label: "Outlook", link: "/" },
      { label: "Real time", link: "/" },
    ],
  },
  {
    label: "Releases",
    icon: (props) => <IconCalendarStats {...props} color="rgb(202, 138, 4)" />,

    links: [
      { label: "Upcoming releases", link: "/login" },
      { label: "Previous releases", link: "/" },
      { label: "Releases schedule", link: "/" },
    ],
  },

  {
    label: "Analytics",
    icon: (props) => (
      <IconPresentationAnalytics {...props} color="rgb(202, 138, 4)" />
    ),
  },
  {
    label: "Contracts",
    icon: (props) => <IconFileAnalytics {...props} color="rgb(202, 138, 4)" />,
    link: "/login",
  },

  {
    label: "Settings",
    icon: (props) => <IconAdjustments {...props} color="rgb(202, 138, 4)" />,
  },
  {
    label: "Security",
    icon: (props) => <IconLock {...props} color="rgb(202, 138, 4)" />,

    links: [
      { label: "Enable 2FA", link: "/" },
      { label: "Change password", link: "/" },
      { label: "Recovery codes", link: "/" },
    ],
  },
];

function NavbarNested() {
  const links = mockdata.map((item) => (
    <LinksGroup
      {...item}
      key={item.label}
      linkComponent={Link} // Use Link for navigation
    />
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Group justify="space-between">
          <Logo style={{ width: rem(120) }} />
          <Code fw={700}>v3.1.2</Code>
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>
        <UserButton />
      </div>
    </nav>
  );
}

export default NavbarNested;
