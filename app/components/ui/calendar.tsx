import * as React from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/components/ui/utils"
import { Button, buttonVariants } from "@/components/ui/button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "buttons",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}) {

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={formatters}
      classNames={{
        root: "w-fit",
        months: "relative flex flex-col gap-4 md:flex-row",
        month: "flex w-full flex-col gap-4",
        nav: "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
        nav_button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-[--cell-size] w-[--cell-size] select-none p-0 aria-disabled:opacity-50"
        ),
        nav_button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-[--cell-size] w-[--cell-size] select-none p-0 aria-disabled:opacity-50"
        ),
        caption: "flex h-[--cell-size] w-full items-center justify-center px-[--cell-size]",
        caption_dropdowns: "flex h-[--cell-size] w-full items-center justify-center gap-1.5 text-sm font-medium",
        dropdown: "bg-popover absolute inset-0 opacity-0",
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "buttons"
            ? "text-sm"
            : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5"
        ),
        table: "w-full border-collapse",
        head_cell: "text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal",
        row: "mt-2 flex w-full",
        weeknumber: "text-muted-foreground select-none text-[0.8rem]",
        day: "group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md",
        day_range_start: "bg-accent rounded-l-md",
        day_range_middle: "rounded-none",
        day_range_end: "bg-accent rounded-r-md",
        day_today: "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
        day_outside: "text-muted-foreground aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        vhidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeftIcon className={cn("size-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRightIcon className={cn("size-4", className)} {...props} />
        ),
        WeekNumber: ({ number }) => (
          <div className="flex size-[--cell-size] items-center justify-center text-center">
            {number}
          </div>
        ),
        ...components,
      }}
      {...props}
    />
  )
}

export { Calendar }
