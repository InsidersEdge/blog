"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Discord } from "@/components/custom-icons";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Book,
  ChevronRight,
  Home,
  Newspaper,
  Twitter,
  Users,
  Youtube,
} from "lucide-react";
import Logo from "@/components/logo";
import NavigationDrawer from "@/components/navigation/drawer";

const courses: { title: string; href: string; description: string }[] = [
  {
    title: "Course Title 1",
    href: "/courses/course-title-1",
    description: "Some description about the course and etc here...",
  },
  {
    title: "Course Title 2",
    href: "/courses/course-title-2",
    description: "Some description about the course and etc here...",
  },
  {
    title: "Course Title 3",
    href: "/courses/course-title-3",
    description: "Some description about the course and etc here...",
  },
  {
    title: "Course Title 4",
    href: "/courses/course-title-4",
    description: "Some description about the course and etc here...",
  },
  {
    title: "Course Title 5",
    href: "/courses/course-title-5",
    description: "Some description about the course and etc here...",
  },
  {
    title: "Course Title 6",
    href: "/courses/course-title-6",
    description: "Some description about the course and etc here...",
  },
];

interface NavigationBarProps {
  // Your prop types here
}

const NavigationBar: React.FC<NavigationBarProps> = (props) => {
  return (
    <div className="w-full py-1 dark:bg-popover/90 border-b dark:border-popover/10 backdrop-blur-md sticky inset-0">
      <div className="flex container items-center justify-between">
        {/* logo  */}
        <Logo />
        {/* logo  */}

        {/* navigation links  */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:bg-accent/60"
                  )}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                Courses
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex flex-col gap-4">
                  <ul className="grid w-[400px] gap-3 pb-0 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {courses.map((course) => (
                      <ListItem
                        key={course.title}
                        title={course.title}
                        href={course.href}
                      >
                        {course.description}
                      </ListItem>
                    ))}
                  </ul>
                  <Link
                    href="/courses"
                    className="p-4 bg-accent/40 hover:bg-accent/90 text-center text-accent-foreground w-full h-fit cursor-pointer"
                  >
                    View All
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blogs" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:bg-accent/60"
                  )}
                >
                  Blogs
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/community" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:bg-accent/60"
                  )}
                >
                  Community
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* navigation links  */}

        <div className="hidden lg:flex">
          <SocialLinks />
        </div>

        <NavigationDrawer
          component={
            <div className="flex  flex-col h-full items-stretch">
              <div className="flex flex-col">
                <Link href="/" legacyBehavior passHref>
                  <a className="w-full px-3 py-2.5 rounded-md bg-transparent flex gap-x-2 items-center hover:bg-accent/60">
                    <Home className="w-4 h-4" />
                    Home
                  </a>
                </Link>
                <Link href="/" legacyBehavior passHref>
                  <a className="w-full px-3 py-2.5 rounded-md bg-transparent flex gap-x-2 items-center hover:bg-accent/60">
                    <Book className="w-4 h-4" />
                    Courses
                  </a>
                </Link>
                <Link href="/" legacyBehavior passHref>
                  <a className="w-full px-3 py-2.5 rounded-md bg-transparent flex gap-x-2 items-center hover:bg-accent/60">
                    <Newspaper className="w-4 h-4" />
                    Blog
                  </a>
                </Link>
                <Link href="/" legacyBehavior passHref>
                  <a className="w-full px-3 py-2.5 rounded-md bg-transparent flex gap-x-2 items-center hover:bg-accent/60">
                    <Users className="w-4 h-4" />
                    Community
                  </a>
                </Link>
              </div>
              <div className="mt-auto">
                <SocialLinks />
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};
export default NavigationBar;

const SocialLinks = () => {
  return (
    <>
      {/* buttons and links  */}
      <div className="flex items-center gap-x-3">
        <Link href={`https:github.com`}>
          <Button variant={"ghost"} size="icon">
            <Discord className="text-2xl" />
          </Button>
        </Link>
        <Link href={`https:github.com`}>
          <Button variant={"ghost"} size="icon">
            <Twitter />
          </Button>
        </Link>
        <Link href={`https:github.com`}>
          <Button variant={"ghost"} size="icon">
            <Youtube />
          </Button>
        </Link>
        <ModeToggle />
      </div>
      {/* buttons and links  */}
    </>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
