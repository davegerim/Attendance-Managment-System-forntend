import cx from "clsx";
import { useState } from "react";
import {
  Table,
  Checkbox,
  ScrollArea,
  Group,
  Avatar,
  Text,
  rem,
  Button,
} from "@mantine/core";
import { IconCheck, IconX, IconClock } from "@tabler/icons-react"; // Import icons
import classes from "./TableSelection.module.css";

const data = [
  {
    id: "1",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
    name: "Robert Wolfkisser",
    job: "Engineer",
    email: "rob_wolf@gmail.com",
    date: "2024-08-01",
    status: "present", // Added status field for each user
  },
  {
    id: "2",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",
    name: "Jill Jailbreaker",
    job: "Engineer",
    email: "jj@breaker.com",
    date: "2024-08-02",
    status: "late", // Example of late attendance
  },
  {
    id: "3",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
    name: "Henry Silkeater",
    job: "Designer",
    email: "henry@silkeater.io",
    date: "2024-08-03",
    status: "absent", // Example of absent attendance
  },
  {
    id: "4",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
    name: "Bill Horsefighter",
    job: "Designer",
    email: "bhorsefighter@gmail.com",
    date: "2024-08-04",
    status: "present",
  },
  {
    id: "5",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png",
    name: "Jeremy Footviewer",
    job: "Manager",
    email: "jeremy@foot.dev",
    date: "2024-08-05",
    status: "late",
  },
];

// Extract unique dates from data
const uniqueDates = [...new Set(data.map((item) => item.date.split("-")[2]))];

export function Attendance() {
  const [selection, setSelection] = useState(["1"]);
  const toggleRow = (id: string) =>
    setSelection((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  const toggleAll = () =>
    setSelection((current) =>
      current.length === data.length ? [] : data.map((item) => item.id)
    );

  const rows = data.map((item) => {
    const selected = selection.includes(item.id);
    return (
      <Table.Tr
        key={item.id}
        className={cx({ [classes.rowSelected]: selected })}
      >
        <Table.Td>
          <Checkbox
            checked={selection.includes(item.id)}
            onChange={() => toggleRow(item.id)}
          />
        </Table.Td>
        <Table.Td>{item.id}</Table.Td>
        <Table.Td>
          <Group gap="sm">
            <Avatar size={26} src={item.avatar} radius={26} />
            <Text size="sm" fw={500}>
              {item.name}
            </Text>
          </Group>
        </Table.Td>
        <Table.Td>{item.email}</Table.Td>
        <Table.Td>{item.job}</Table.Td>
        {uniqueDates.map((day) => (
          <Table.Td key={day}>
            {item.date.endsWith(day) ? (
              item.status === "present" ? (
                <IconCheck size={18} color="green" />
              ) : item.status === "late" ? (
                <IconClock size={18} color="orange" />
              ) : (
                <IconX size={18} color="red" />
              )
            ) : (
              <IconX size={18} color="red" />
            )}
          </Table.Td>
        ))}
        {/* Action column with buttons */}
        <Table.Td>
          <Button
            size="xs"
            variant="outline"
            color="blue"
            onClick={() => alert(`Editing ${item.name}`)}
          >
            Edit
          </Button>
          <Button
            size="xs"
            variant="outline"
            color="red"
            onClick={() => alert(`Deleting ${item.name}`)}
            style={{ marginLeft: rem(8) }}
          >
            Delete
          </Button>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <ScrollArea>
      <Table miw={800} verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={{ width: rem(40) }}>
              <Checkbox
                onChange={toggleAll}
                checked={selection.length === data.length}
                indeterminate={
                  selection.length > 0 && selection.length !== data.length
                }
              />
            </Table.Th>
            <Table.Th>ID</Table.Th>
            <Table.Th>User</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Job</Table.Th>
            {/* Header for date columns */}
            {uniqueDates.map((day) => (
              <Table.Th key={day}>{day}</Table.Th>
            ))}
            <Table.Th>Action</Table.Th> {/* New Action header */}
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
}
