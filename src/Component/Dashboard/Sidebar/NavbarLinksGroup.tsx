import { useState } from "react";
import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  Text,
  UnstyledButton,
  rem,
} from "@mantine/core";
import { IconCalendarStats, IconChevronRight, IconGauge } from "@tabler/icons-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import classes from "./NavbarLinksGroup.module.css";
import React from "react";

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  link?: string; // Optional link for single items
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

export function LinksGroup({
  icon: Icon,
  label,
  link, // Accept the link prop
  initiallyOpened,
  links,
}: LinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);

  const items = (hasLinks ? links : []).map((linkItem) => (
    <Text<"a">
      component={Link}
      className={classes.link}
      to={linkItem.link}
      key={linkItem.label}
    >
      {linkItem.label}
    </Text>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={classes.control}
      >
        <Group justify="space-between" gap={0}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <ThemeIcon variant="light" size={30}>
              <Icon style={{ width: rem(18), height: rem(18) }} />
            </ThemeIcon>
            {link ? (
              <Text
                component={Link}
                to={link}
                className={classes.label}
                ml="md"
              >
                {label}
              </Text>
            ) : (
              <Box ml="md">{label}</Box>
            )}
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              style={{
                width: rem(16),
                height: rem(16),
                transform: opened ? "rotate(-90deg)" : "none",
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}

const mockdata = [
  {
    label: "Dashboard",
    icon: IconGauge,
    link: "/profile", // This should work now
  },
  {
    label: "Releases",
    icon: IconCalendarStats,
    links: [
      { label: "Upcoming releases", link: "/upcoming-releases" },
      { label: "Previous releases", link: "/previous-releases" },
      { label: "Releases schedule", link: "/releases-schedule" },
    ],
  },
];

export function NavbarLinksGroup() {
  return (
    <Box mih={220} p="md">
      {mockdata.map((item) => (
        <LinksGroup {...item} key={item.label} />
      ))}
    </Box>
  );
}
