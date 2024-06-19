import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

export const labels = [
  {
    value: "applications",
    label: "Applications",
  },
  {
    value: "project",
    label: "Project",
  },
  {
    value: "personal",
    label: "Personal",
  },
  {
    value: "leetcode",
    label: "Leetcode",
  },
  {
    value: "referral",
    label: "Referral",
  },
];

export const status = [
  {
    value: "backlog",
    label: "Backlog",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "todo",
    label: "Todo",
    icon: CircleIcon,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: StopwatchIcon,
  },
  {
    value: "complete",
    label: "Completed",
    icon: CheckCircledIcon,
  },
  {
    value: "postponed",
    label: "Postponed",
    icon: CrossCircledIcon,
  },
];

export const priority = [
  {
    value: "urgent",
    label: "Urgent",
    icon: ArrowUpIcon,
  },
  {
    value: "not urgent",
    label: "Not Urgent",
    icon: ArrowLeftIcon,
  },
  {
    value: "important",
    label: "Important",
    icon: ArrowRightIcon,
  },
  {
    value: "not important",
    label: "Not Important",
    icon: ArrowDownIcon,
  },
];
