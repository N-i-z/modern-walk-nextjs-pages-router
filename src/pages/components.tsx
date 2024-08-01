import React, { useState } from "react";
import { Heading } from "../ui-core/components";
import { Button } from "../ui-core/components/atoms/Button/button";
import { Input } from "../ui-core/components/atoms/Input/input";
import {
  RadioGroup,
  RadioGroupItem,
} from "../ui-core/components/atoms/RadioGroup/radio-group";
import { Checkbox } from "../ui-core/components/atoms/Checkbox/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui-core/components/molecules/DropdownMenu/dropdown-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { cn } from "../lib/utils";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "../ui-core/components/molecules/Dialog/dialog";
import {
  ScrollArea,
  ScrollBar,
} from "../ui-core/components/atoms/ScrollArea/scroll-area";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui-core/components/molecules/AlertDialog/alert-dialog";
import { z } from "zod";

type Checked = DropdownMenuCheckboxItemProps["checked"];

const Components: React.FC = () => {
  const [isDDOpen, setIsDDOpen] = React.useState(false);
  const [isVDOpen, setIsVDOpen] = React.useState(false);
  const [isCBDDOpen, setCBDDOpen] = React.useState(false);
  const [showOption1, setShowOption1] = React.useState<Checked>(true);
  const [showOption2, setShowOption2] = React.useState<Checked>(false);
  const [showDisabledOption, setShowDisabledOption] =
    React.useState<Checked>(false);
  const [isRBDDOpen, setRBDDOpen] = React.useState(false);
  const [position, setPosition] = React.useState("bottom");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const emailSchema = z.string().email("Please enter a valid email address");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);

    try {
      emailSchema.parse(value);
      setError("");
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      }
    }
  };

  return (
    <div className="mb-[10rem]">
      <div>
        <Heading variant="h2">Buttons</Heading>
        <div className="my-3 flex start ml-12">
          <Button variant="primary" disabled className="mr-3">
            Cancel
          </Button>
          <Button variant="secondary" disabled>
            Add User
          </Button>
        </div>

        <div className="my-3 flex start ml-12">
          <Button variant="primary" className="mt-3 mr-3">
            Cancel
          </Button>
          <Button variant="secondary" className="mt-3">
            Add User
          </Button>
        </div>
      </div>
      <div>
        <Heading variant="h2">Input Fields</Heading>
        <div>
          <div>
            <label className="flex start ml-12 mt-5">Username</label>
            <Input
              disabled
              isError={false}
              placeholder="Disabled"
              className="ml-12 w-550px mb-5 rounded-md focus:outline-none text-inactiveBorder"
            />
          </div>

          <div>
            <label className="flex start ml-12 mt-5">Email</label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={handleChange}
              isError={!!error}
              placeholder="Normal"
              className="ml-12 w-550px"
            />
            {error && (
              <span className="flex start ml-12  text-sm text-dangerRed">
                {error}
              </span>
            )}
          </div>
        </div>
      </div>
      <div>
        <Heading variant="h2">Radio buttons</Heading>
        <div className="flex start ml-12">
          <RadioGroup defaultChecked={false}>
            <RadioGroupItem
              disabled={true}
              value="option-one"
              id="option-one"
            />
            <span className="ml-[-0.5rem] rounded-lg px-2 pt-1 pb-[6px] hover:bg-inverseHover">
              <RadioGroupItem value="option-two" id="option-two" />
            </span>
          </RadioGroup>
        </div>
      </div>
      <div>
        <Heading variant="h2">Checkboxes</Heading>
        <div className="flex flex-col items-start ml-12">
          <div>
            <Checkbox disabled={true} />
          </div>
          <div className="mt-3">
            <Checkbox />
          </div>
        </div>
      </div>
      <div>
        <Heading variant="h2">Popup Dialog</Heading>
        <div className="flex start ml-12">
          <Dialog>
            <DialogTrigger>
              <Button variant="primary">Open</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Jokester</DialogTitle>
              </DialogHeader>
              <ScrollArea className="h-[350px] w-[300px] rounded-md border-none">
                <DialogDescription>
                  Jokester began sneaking into the castle in the middle of the
                  night and leaving jokes all over the place: under the king's
                  pillow, in his soup, even in the royal toilet. The king was
                  furious, but he couldn't seem to stop Jokester. And then, one
                  day, the people of the kingdom discovered that the jokes left
                  by Jokester were so funny that they couldn't help but laugh.
                  And once they started laughing, they couldn't stop. Jokester
                  began sneaking into the castle in the middle of the night and
                  leaving jokes all over the place: under the king's pillow, in
                  his soup, even in the royal toilet. The king was furious, but
                  he couldn't seem to stop Jokester. And then, one day, the
                  people of the kingdom discovered that the jokes left by
                  Jokester were so funny that they couldn't help but laugh. And
                  once they started laughing, they couldn't stop.Jokester began
                  sneaking into the castle in the middle of the night and
                  leaving jokes all over the place: under the king's pillow, in
                  his soup, even in the royal toilet. The king was furious, but
                  he couldn't seem to stop Jokester. And then, one day, the
                  people of the kingdom discovered that the jokes left by
                  Jokester were so funny that they couldn't help but laugh. And
                  once they started laughing, they couldn't stop.Jokester began
                  sneaking into the castle in the middle of the night and
                  leaving jokes all over the place: under the king's pillow, in
                  his soup, even in the royal toilet. The king was furious, but
                  he couldn't seem to stop Jokester. And then, one day, the
                  people of the kingdom discovered that the jokes left by
                  Jokester were so funny that they couldn't help but laugh. And
                  once they started laughing, they couldn't stop.
                </DialogDescription>
                <ScrollBar orientation="vertical" />
              </ScrollArea>
              <DialogFooter>
                <Button variant="dotted">
                  <DialogClose>Cancel</DialogClose>
                </Button>
                <Button variant="secondary">Confirm</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div>
        <Heading variant="h2">Popup Alert Dialog</Heading>
        <div className="flex start ml-12">
          <AlertDialog>
            <AlertDialogTrigger>
              <Button variant="primary">Clear Cart</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
      <div>
        <Heading variant="h2">Dropdown Menu</Heading>
        <div className="flex start ml-12 mb-[6rem]">
          <DropdownMenu onOpenChange={setIsDDOpen}>
            <DropdownMenuTrigger
              className={cn(
                "p-3 ring-1 shadow-none hover:ring-hover hover:text-hover outline-none hover:bg-inverseHover",
                isDDOpen
                  ? "ring-selected text-selected"
                  : " text-normal ring-normal"
              )}
            >
              Global Action
              <FontAwesomeIcon
                icon={isDDOpen ? faAngleUp : faAngleDown}
                className="ml-2"
              ></FontAwesomeIcon>{" "}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="text-activeBorder ">
                Delete Properties
              </DropdownMenuItem>
              <DropdownMenuItem disabled={true} className="text-inactiveBorder">
                Disabled Property
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div>
        <Heading variant="h2">Vertical Ellipsis Dropdown</Heading>
        <div className="flex start ml-12 mb-[8rem]">
          <DropdownMenu onOpenChange={setIsVDOpen}>
            <DropdownMenuTrigger
              className={cn(
                "px-2 py-1 ring-2 hover:ring-none hover:text-hover outline-none hover:bg-inverseHover shadow-none hover:shadow-none active:shadow-none focus:shadow-none",
                isVDOpen
                  ? "ring-0 text-selected bg-inverseHoverClick outline-none"
                  : " text-normal ring-0"
              )}
            >
              <FontAwesomeIcon icon={faEllipsisV} className="mx-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem className="text-activeBorder ">
                View Property
              </DropdownMenuItem>
              <DropdownMenuItem className="text-activeBorder ">
                Delete
              </DropdownMenuItem>
              <DropdownMenuItem disabled={true} className="text-inactiveBorder">
                Disabled Property
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div>
        <Heading variant="h2">Button with Checkbox Dropdown</Heading>
        <div className="flex start ml-12 mb-[9rem]">
          <DropdownMenu onOpenChange={setCBDDOpen}>
            <DropdownMenuTrigger
              asChild
              className={cn(
                "p-3 hover:ring-0 outline-none hover:shadow-boxHover",
                isCBDDOpen
                  ? "ring-selected text-selected active:shadow-boxSelected"
                  : " text-normal ring-normal shadow-boxNormal"
              )}
            >
              <Button variant="primary">
                Open
                <FontAwesomeIcon
                  icon={isCBDDOpen ? faAngleUp : faAngleDown}
                  className="ml-2"
                ></FontAwesomeIcon>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuCheckboxItem
                checked={showOption1}
                onCheckedChange={setShowOption1}
              >
                Option 1
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showOption2}
                onCheckedChange={setShowOption2}
              >
                Option 2
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showDisabledOption}
                onCheckedChange={setShowDisabledOption}
                disabled={true}
              >
                Disabled Option
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div>
        <Heading variant="h2">Button with Radio Group Dropdown</Heading>
        <div className="flex start ml-12 mb-[9rem]">
          <DropdownMenu onOpenChange={setRBDDOpen}>
            <DropdownMenuTrigger
              asChild
              className={cn(
                "p-3 hover:ring-0 outline-none  hover:shadow-boxHover ",
                isRBDDOpen
                  ? "ring-selected text-selected active:shadow-boxSelected"
                  : " text-normal ring-normal shadow-boxNormal"
              )}
            >
              <Button variant="primary">
                Open
                <FontAwesomeIcon
                  icon={isRBDDOpen ? faAngleUp : faAngleDown}
                  className="ml-2"
                ></FontAwesomeIcon>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bottom">
                  Bottom
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right" disabled={true}>
                  Right
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Components;
