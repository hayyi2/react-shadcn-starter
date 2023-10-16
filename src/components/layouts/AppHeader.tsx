import { useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Icons } from "@/components/icons";
import { appConfig } from "@/config/app";
import { Button, buttonVariants } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { mainMenu } from "@/config/menu";
import { ViewVerticalIcon } from "@radix-ui/react-icons";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur">
            <div className="container px-4 md:px-8 flex h-14 items-center">
                <div className="mr-4 hidden md:flex">
                    <a href="/" className="mr-6 flex items-center space-x-2">
                        <Icons.logo className="h-6 w-6" />
                        <span className="hidden font-bold sm:inline-block">{appConfig.name}</span>
                    </a>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        {mainMenu.map((menu, index) => (
                            <NavLink
                                key={index}
                                to={menu.to ?? ""}
                                className={({ isActive }) => cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    isActive ? "text-foreground" : "text-foreground/60"
                                )}>
                                {menu.title}
                            </NavLink>
                        ))}
                    </nav>

                </div>
                {/* mobile */}
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            className="mr-4 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
                            <ViewVerticalIcon className="h-5 w-5" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="pr-0">
                        <a
                            href="/"
                            className="flex items-center"
                            onClick={() => setOpen(false)}>
                            <Icons.logo className="mr-2 h-4 w-4" />
                            <span className="font-bold">{appConfig.name}</span>
                        </a>
                        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                            <div className="flex flex-col space-y-3">
                                {mainMenu.map((menu, index) => (
                                    <NavLink
                                        key={index}
                                        to={menu.to ?? ""}
                                        className={({ isActive }) => cn(
                                            "text-sm font-medium transition-colors hover:text-primary",
                                            isActive ? "text-foreground" : "text-foreground/60"
                                        )}>
                                        {menu.title}
                                    </NavLink>
                                ))}
                            </div>
                        </ScrollArea>
                    </SheetContent>
                </Sheet>
                <a href="/" className="mr-6 flex items-center space-x-2 md:hidden">
                    <Icons.logo className="h-6 w-6" />
                    <span className="font-bold inline-block">{appConfig.name}</span>
                </a>
                {/* right */}
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        {/* <CommandMenu /> */}
                    </div>
                    <nav className="flex items-center space-x-2">
                        <a
                            href={appConfig.github.url}
                            title={appConfig.github.title}
                            target="_blank"
                            rel="noreferrer">
                            <div
                                className={cn(
                                    buttonVariants({
                                        variant: "ghost",
                                    }),
                                    "w-9 px-0"
                                )}>
                                <Icons.gitHub className="h-4 w-4" />
                                <span className="sr-only">GitHub</span>
                            </div>
                        </a>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant='ghost'
                                    className='relative h-8 w-8 rounded-full'>
                                    <Avatar className='h-8 w-8'>
                                        <AvatarFallback>SC</AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='w-56' align='end' forceMount>
                                <DropdownMenuLabel className='font-normal'>
                                    <div className='flex flex-col space-y-1'>
                                        <p className='text-sm font-medium leading-none'>shadcn</p>
                                        <p className='text-xs leading-none text-muted-foreground'>
                                            m@example.com
                                        </p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Log out</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </nav>
                </div>
            </div>
        </header>
    )
}