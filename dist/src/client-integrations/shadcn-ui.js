'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from '@lshay/ui/components/default/accordion';
import { Alert, AlertDescription, AlertTitle, } from '@lshay/ui/components/default/alert';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger, } from '@lshay/ui/components/default/alert-dialog';
import { AspectRatio } from '@lshay/ui/components/default/aspect-ratio';
import { Avatar, AvatarFallback, AvatarImage, } from '@lshay/ui/components/default/avatar';
import { Badge } from '@lshay/ui/components/default/badge';
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from '@lshay/ui/components/default/breadcrumb';
import { Button } from '@lshay/ui/components/default/button';
import { Calendar } from '@lshay/ui/components/default/calendar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from '@lshay/ui/components/default/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from '@lshay/ui/components/default/carousel';
import { Checkbox } from '@lshay/ui/components/default/checkbox';
import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from '@lshay/ui/components/default/collapsible';
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, } from '@lshay/ui/components/default/command';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, } from '@lshay/ui/components/default/dialog';
import { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger, } from '@lshay/ui/components/default/context-menu';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger, } from '@lshay/ui/components/default/drawer';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, } from '@lshay/ui/components/default/dropdown-menu';
import { HoverCard, HoverCardContent, HoverCardTrigger, } from '@lshay/ui/components/default/hover-card';
import { Input } from '@lshay/ui/components/default/input';
import { Label } from '@lshay/ui/components/default/label';
import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger, } from '@lshay/ui/components/default/menubar';
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, navigationMenuTriggerStyle, } from '@lshay/ui/components/default/navigation-menu';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, } from '@lshay/ui/components/default/pagination';
import { Popover, PopoverContent, PopoverTrigger, } from '@lshay/ui/components/default/popover';
import { Progress } from '@lshay/ui/components/default/progress';
import { RadioGroup, RadioGroupItem, } from '@lshay/ui/components/default/radio-group';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup, } from '@lshay/ui/components/default/resizable';
import { ScrollArea, ScrollBar, } from '@lshay/ui/components/default/scroll-area';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, } from '@lshay/ui/components/default/select';
import { Separator } from '@lshay/ui/components/default/separator';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger, } from '@lshay/ui/components/default/sheet';
import { Skeleton } from '@lshay/ui/components/default/skeleton';
import { Slider } from '@lshay/ui/components/default/slider';
import { Switch } from '@lshay/ui/components/default/switch';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, } from '@lshay/ui/components/default/table';
import { Tabs, TabsContent, TabsList, TabsTrigger, } from '@lshay/ui/components/default/tabs';
import { Textarea } from '@lshay/ui/components/default/textarea';
import { Toast, ToastAction, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport, } from '@lshay/ui/components/default/toast';
import { Toaster } from '@lshay/ui/components/default/toaster';
import { useToast } from '@lshay/ui/components/default/use-toast';
import { Toggle } from '@lshay/ui/components/default/toggle';
import { ToggleGroup, ToggleGroupItem, } from '@lshay/ui/components/default/toggle-group';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from '@lshay/ui/components/default/tooltip';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, } from '@lshay/ui/components/default/input-otp';
import { ChevronDownIcon, ChevronUpIcon, ChevronsUpDown } from 'lucide-react';
import { Fragment, useEffect, useState } from 'react';
function CustomAccordion({ data, type, className }) {
    return (_jsx(Accordion, { type: type, collapsible: true, className: className, children: data.map((item) => (_jsxs(AccordionItem, { value: item.value, children: [_jsx(AccordionTrigger, { children: item.trigger }), _jsx(AccordionContent, { children: item.content })] }, item.value))) }));
}
function CustomAlert({ variant, icon, title, description }) {
    return (_jsxs(Alert, { variant: variant, children: [icon, _jsx(AlertTitle, { children: title }), _jsx(AlertDescription, { children: description })] }));
}
function CustomAlertDialog({ title, description, triggerLabel, cancelLabel = 'Cancel', actionLabel, }) {
    return (_jsxs(AlertDialog, { children: [_jsx(AlertDialogTrigger, { asChild: true, children: _jsx(Button, { variant: "outline", children: triggerLabel }) }), _jsx(AlertDialogPortal, { children: _jsxs(AlertDialogContent, { children: [_jsxs(AlertDialogHeader, { children: [_jsx(AlertDialogTitle, { children: title }), _jsx(AlertDialogDescription, { children: description })] }), _jsxs(AlertDialogFooter, { children: [_jsx(AlertDialogCancel, { children: cancelLabel }), _jsx(AlertDialogAction, { children: actionLabel })] })] }) })] }));
}
function CustomAvatar({ src, alt, fallbackLabel }) {
    return (_jsxs(Avatar, { children: [_jsx(AvatarImage, { src: src, alt: alt }), _jsx(AvatarFallback, { children: fallbackLabel })] }));
}
function CustomBreadcrumb({ homeLink, dropdownMenuItems, componentLink, componentName, }) {
    return (_jsx(Breadcrumb, { children: _jsxs(BreadcrumbList, { children: [_jsx(BreadcrumbItem, { children: _jsx(BreadcrumbLink, { href: homeLink, children: "Home" }) }), _jsx(BreadcrumbSeparator, {}), _jsx(BreadcrumbItem, { children: _jsxs(DropdownMenu, { children: [_jsxs(DropdownMenuTrigger, { className: "flex items-center gap-1", children: [_jsx(BreadcrumbEllipsis, { className: "h-4 w-4" }), _jsx("span", { className: "sr-only", children: "Toggle menu" })] }), _jsx(DropdownMenuContent, { align: "start", children: dropdownMenuItems.map((item) => (_jsx(DropdownMenuItem, { onClick: item.onClick, children: item.label }, item.label))) })] }) }), _jsx(BreadcrumbSeparator, {}), _jsx(BreadcrumbItem, { children: _jsx(BreadcrumbLink, { href: componentLink, children: componentName }) }), _jsx(BreadcrumbSeparator, {}), _jsx(BreadcrumbItem, { children: _jsx(BreadcrumbPage, { children: componentName }) })] }) }));
}
function CustomCard({ className, title, description, children, footerChildren, }) {
    return (_jsxs(Card, { className: className, children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: title }), _jsx(CardDescription, { children: description })] }), _jsx(CardContent, { children: children }), footerChildren && _jsx(CardFooter, { children: footerChildren })] }));
}
function CustomCarousel({ items }) {
    return (_jsxs(Carousel, { opts: {
            align: 'start',
        }, className: "mx-20 w-[calc(100%-160px)]", children: [_jsx(CarouselContent, { children: items.map((item) => (_jsx(CarouselItem, { className: "md:basis-1/2 lg:basis-1/3", children: item.content }, item.id ||
                    `carousel-item-${Math.random().toString(36).substr(2, 9)}`))) }), _jsx(CarouselPrevious, {}), _jsx(CarouselNext, {})] }));
}
function CollapsibleSection({ title, nonCollapsedItems, collapsedItems }) {
    const [isOpen, setIsOpen] = useState(false);
    return (_jsxs(Collapsible, { open: isOpen, onOpenChange: setIsOpen, className: "w-[350px] space-y-2", children: [_jsxs("div", { className: "flex items-center justify-between space-x-4 px-4", children: [_jsx("h4", { className: "font-semibold text-sm", children: title }), _jsx(CollapsibleTrigger, { asChild: true, children: _jsxs(Button, { variant: "ghost", size: "sm", className: "w-9 p-0", children: [_jsx(ChevronsUpDown, { className: "h-4 w-4" }), _jsx("span", { className: "sr-only", children: "Toggle" })] }) })] }), nonCollapsedItems, _jsx(CollapsibleContent, { children: collapsedItems })] }));
}
function CommandPalette({ asDialog = false, dialogTriggerKey = 'k', commandGroups, }) {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (!asDialog)
            return;
        const down = (e) => {
            if (e.key === dialogTriggerKey && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((newOpen) => !newOpen);
            }
        };
        document.addEventListener('keydown', down);
        return () => {
            document.removeEventListener('keydown', down);
        };
    }, [asDialog, dialogTriggerKey]);
    const render = (_jsxs(Command, { className: "rounded-lg border shadow-md", children: [_jsx(CommandInput, { placeholder: "Type a command or search..." }), _jsxs(CommandList, { children: [commandGroups.length === 0 && (_jsx(CommandEmpty, { children: "No results found." })), commandGroups.map((group) => (_jsxs(Fragment, { children: [_jsx(CommandGroup, { heading: group.heading, children: group.items.map((item) => (_jsxs(CommandItem, { onSelect: item.onSelect, children: [_jsx("span", { children: item.label }), item.shortcut && (_jsx(CommandShortcut, { children: item.shortcut }))] }, item.label))) }), _jsx(CommandSeparator, {})] }, group.heading)))] })] }));
    if (!asDialog)
        return render;
    return (_jsx(CommandDialog, { open: open, onOpenChange: setOpen, children: render }));
}
function CustomContextMenu({ triggerLabel, items }) {
    const renderMenuItems = (menuItems) => menuItems.map((item) => (_jsx(Fragment, { children: item.subItems ? (_jsxs(ContextMenuSub, { children: [_jsx(ContextMenuSubTrigger, { children: item.label }), _jsx(ContextMenuSubContent, { children: _jsx(ContextMenuGroup, { children: renderMenuItems(item.subItems) }) })] })) : (_jsxs(ContextMenuItem, { onSelect: item.onSelect, disabled: item.disabled, children: [item.label, item.shortcut && (_jsx(ContextMenuShortcut, { children: item.shortcut }))] }, item.label)) }, item.label)));
    return (_jsxs(ContextMenu, { children: [_jsx(ContextMenuTrigger, { className: "h-full w-full", children: triggerLabel }), _jsx(ContextMenuContent, { children: _jsx(ContextMenuGroup, { children: renderMenuItems(items) }) })] }));
}
function CustomDialog({ triggerButtonText, title, description, children, footer, open, onOpenChange, }) {
    return (_jsxs(Dialog, { open: open, onOpenChange: onOpenChange, children: [_jsx(DialogTrigger, { asChild: true, children: _jsx(Button, { variant: "outline", children: triggerButtonText }) }), _jsx(DialogPortal, { children: _jsxs(DialogContent, { className: "sm:max-w-[425px]", children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: title }), _jsx(DialogDescription, { children: description })] }), children, footer && _jsx(DialogFooter, { children: footer })] }) })] }));
}
function CustomDrawer({ title, description, openButtonText = 'Open', children, footer, }) {
    return (_jsxs(Drawer, { children: [_jsx(DrawerTrigger, { asChild: true, children: _jsx(Button, { variant: "outline", children: openButtonText }) }), _jsx(DrawerPortal, { children: _jsx(DrawerContent, { children: _jsxs("div", { className: "mx-auto w-full max-w-sm", children: [_jsxs(DrawerHeader, { children: [_jsx(DrawerTitle, { children: title }), _jsx(DrawerDescription, { children: description })] }), _jsx("div", { className: "p-4", children: children }), footer && _jsx(DrawerFooter, { children: footer })] }) }) })] }));
}
function CustomDropdown({ triggerLabel, menuLabel, items }) {
    const renderMenuItems = (itemsToRender) => itemsToRender.map((item) => (_jsx(Fragment, { children: item.subItems ? (_jsxs(DropdownMenuSub, { children: [_jsxs(DropdownMenuSubTrigger, { children: [item.content, _jsx("span", { children: item.label })] }), _jsx(DropdownMenuPortal, { children: _jsx(DropdownMenuSubContent, { children: renderMenuItems(item.subItems) }) })] })) : (_jsxs(DropdownMenuItem, { children: [item.content, _jsx("span", { children: item.label }), item.shortcut && (_jsx(DropdownMenuShortcut, { children: item.shortcut }))] })) }, item.label)));
    return (_jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsx(Button, { variant: "outline", children: triggerLabel }) }), _jsxs(DropdownMenuContent, { className: "w-56", children: [menuLabel && _jsx(DropdownMenuLabel, { children: menuLabel }), _jsx(DropdownMenuSeparator, {}), _jsx(DropdownMenuGroup, { children: renderMenuItems(items) }), _jsx(DropdownMenuSeparator, {})] })] }));
}
function CustomMenubar({ menuData }) {
    return (_jsx(Menubar, { children: menuData.map((menu) => (_jsxs(MenubarMenu, { children: [_jsx(MenubarTrigger, { children: menu.trigger }), _jsx(MenubarContent, { children: menu.items.map((item) => {
                        switch (item.type) {
                            case 'separator':
                                return _jsx(MenubarSeparator, {}, `separator-${item.type}`);
                            case 'submenu':
                                return (_jsxs(MenubarSub, { children: [_jsx(MenubarSubTrigger, { children: item.label }), _jsx(MenubarSubContent, { children: item.items.map((subItem) => subItem.type === 'item' && (_jsxs(MenubarItem, { onSelect: subItem.onSelect, disabled: subItem.disabled, children: [subItem.label, subItem.shortcut && (_jsx(MenubarShortcut, { children: subItem.shortcut }))] }, subItem.label))) })] }, item.label));
                            case 'item':
                                return (_jsxs(MenubarItem, { disabled: item.disabled, onSelect: item.onSelect, children: [item.label, item.shortcut && (_jsx(MenubarShortcut, { children: item.shortcut }))] }, item.label));
                            default:
                                return null;
                        }
                    }) })] }, menu.trigger))) }));
}
function CustomHoverCard({ trigger, children }) {
    return (_jsxs(HoverCard, { children: [_jsx(HoverCardTrigger, { asChild: true, children: trigger }), _jsx(HoverCardContent, { className: "w-80", children: children })] }));
}
function CustomNavigation({ sections }) {
    return (_jsx(NavigationMenu, { children: _jsx(NavigationMenuList, { children: sections.map((section) => (_jsxs(NavigationMenuItem, { children: [_jsx(NavigationMenuTrigger, { children: section.trigger }), _jsx(NavigationMenuContent, { children: _jsx("ul", { className: "grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]", children: section.items.map((item) => (_jsx("li", { className: `row-span-${item.rowSpan ?? 1}`, children: _jsx(NavigationMenuLink, { asChild: true, children: _jsxs("a", { className: "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", href: item.href, children: [item.logo, _jsx("div", { className: "font-medium text-sm leading-none", children: item.title }), _jsx("p", { className: "text-muted-foreground text-sm leading-tight" }), _jsx("p", { className: "line-clamp-2 text-muted-foreground text-sm leading-snug", children: item.description })] }) }) }, item.href))) }) })] }, section.trigger))) }) }));
}
function CustomPagination({ currentPage, totalPages, onPageChange }) {
    const pageNumbers = [];
    // Determine the range of page numbers to display.
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);
    // Adjust the start and end pages
    // if near the beginning or end of totalPages.
    if (currentPage - 2 < 1) {
        endPage = Math.min(5, totalPages);
    }
    if (currentPage + 2 > totalPages) {
        startPage = Math.max(1, totalPages - 4);
    }
    for (let num = startPage; num <= endPage; num++) {
        pageNumbers.push(num);
    }
    return (_jsx(Pagination, { children: _jsxs(PaginationContent, { children: [_jsx(PaginationItem, { children: _jsx(PaginationPrevious, { size: 'default', href: "#", onClick: (e) => {
                            e.preventDefault();
                            onPageChange(Math.max(1, currentPage - 1));
                        } }) }), startPage > 1 && (_jsxs(_Fragment, { children: [_jsx(PaginationItem, { children: _jsx(PaginationLink, { size: 'default', href: "#", onClick: (e) => {
                                    e.preventDefault();
                                    onPageChange(1);
                                }, children: "1" }) }), _jsx(PaginationItem, { children: _jsx(PaginationEllipsis, {}) })] })), pageNumbers.map((page) => (_jsx(PaginationItem, { children: page === currentPage ? (_jsx(PaginationLink, { size: 'default', href: "#", isActive: true, children: page })) : (_jsx(PaginationLink, { size: 'default', href: "#", onClick: (e) => {
                            e.preventDefault();
                            onPageChange(page);
                        }, children: page })) }, page))), endPage < totalPages && (_jsxs(_Fragment, { children: [_jsx(PaginationItem, { children: _jsx(PaginationEllipsis, {}) }), _jsx(PaginationItem, { children: _jsx(PaginationLink, { size: 'default', href: "#", onClick: (e) => {
                                    e.preventDefault();
                                    onPageChange(totalPages);
                                }, children: totalPages }) })] })), _jsx(PaginationItem, { children: _jsx(PaginationNext, { size: 'default', href: "#", onClick: (e) => {
                            e.preventDefault();
                            onPageChange(Math.min(totalPages, currentPage + 1));
                        } }) })] }) }));
}
function CustomPopover({ triggerLabel = 'Open', children }) {
    return (_jsxs(Popover, { children: [_jsx(PopoverTrigger, { asChild: true, children: _jsx(Button, { variant: "outline", children: triggerLabel }) }), _jsx(PopoverContent, { className: "w-80", children: children })] }));
}
function CustomSelect({ placeholder, label, value, onValueChange, groups }) {
    return (_jsxs(Select, { value: value, onValueChange: onValueChange, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: placeholder }) }), _jsxs(SelectContent, { children: [_jsx(SelectScrollUpButton, { children: _jsx(ChevronUpIcon, {}) }), groups.map((group) => (_jsxs(Fragment, { children: [_jsxs(SelectGroup, { children: [group.groupName && _jsx(SelectLabel, { children: group.groupName }), group.items.map((item) => (_jsx(SelectItem, { value: item.value, disabled: item.disabled, children: item.label }, item.value)))] }), _jsx(SelectSeparator, {})] }, group.groupName || 'default-group'))), _jsx(SelectScrollDownButton, { children: _jsx(ChevronDownIcon, {}) })] })] }));
}
function CustomSheet({ title, description, buttonLabel, children, footer, open, onOpenChange, }) {
    return (_jsxs(Sheet, { open: open, onOpenChange: onOpenChange, children: [_jsx(SheetTrigger, { asChild: true, children: _jsx(Button, { variant: "outline", children: buttonLabel }) }), _jsx(SheetPortal, { children: _jsxs(SheetContent, { children: [_jsxs(SheetHeader, { children: [_jsx(SheetTitle, { children: title }), _jsx(SheetDescription, { children: description })] }), children, _jsx(SheetFooter, { children: footer })] }) })] }));
}
function CustomTabs({ tabs, className, defaultValue }) {
    return (_jsxs(Tabs, { defaultValue: defaultValue || tabs[0]?.value, className: className, children: [_jsx(TabsList, { children: tabs.map((tab) => (_jsx(TabsTrigger, { value: tab.value, children: tab.label }, tab.value))) }), tabs.map((tab) => (_jsx(TabsContent, { value: tab.value, children: tab.content }, tab.value)))] }));
}
function CustomTooltip({ children, content, defaultOpen, open, onOpenChange, delayDuration, }) {
    return (_jsx(TooltipProvider, { children: _jsxs(Tooltip, { defaultOpen: defaultOpen, open: open, onOpenChange: onOpenChange, delayDuration: delayDuration, children: [_jsx(TooltipTrigger, { asChild: true, children: children }), _jsx(TooltipContent, { children: content })] }) }));
}
export { CustomAccordion, CustomAlert, CustomAlertDialog, CustomAvatar, CustomBreadcrumb, CustomCard, CustomCarousel, CollapsibleSection, CommandPalette, CustomContextMenu, CustomDialog, CustomDrawer, CustomDropdown, CustomMenubar, CustomHoverCard, CustomNavigation, CustomPagination, CustomPopover, CustomSelect, CustomSheet, CustomTabs, CustomTooltip, Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertDescription, AlertTitle, AlertDialog, AlertDialogTitle, AlertDialogAction, AlertDialogCancel, AlertDialogFooter, AlertDialogHeader, AlertDialogPortal, AlertDialogContent, AlertDialogOverlay, AlertDialogTrigger, AlertDialogDescription, AspectRatio, Avatar, AvatarFallback, AvatarImage, Badge, Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis, Button, Calendar, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, Checkbox, Collapsible, CollapsibleContent, CollapsibleTrigger, Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandDialog, CommandShortcut, ContextMenu, ContextMenuSub, ContextMenuItem, ContextMenuGroup, ContextMenuLabel, ContextMenuPortal, ContextMenuContent, ContextMenuTrigger, ContextMenuShortcut, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuRadioGroup, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuCheckboxItem, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogFooter, DialogPortal, DialogOverlay, Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger, DrawerPortal, DrawerOverlay, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuSub, DropdownMenuGroup, DropdownMenuPortal, DropdownMenuShortcut, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuCheckboxItem, HoverCard, HoverCardContent, HoverCardTrigger, Input, Label, Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger, MenubarSub, MenubarGroup, MenubarLabel, MenubarPortal, MenubarRadioItem, MenubarRadioGroup, MenubarSubContent, MenubarSubTrigger, MenubarCheckboxItem, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, navigationMenuTriggerStyle, Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, Popover, PopoverContent, PopoverTrigger, Progress, RadioGroup, RadioGroupItem, ResizableHandle, ResizablePanel, ResizablePanelGroup, ScrollArea, ScrollBar, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectScrollUpButton, SelectGroup, SelectLabel, SelectSeparator, SelectScrollDownButton, Separator, Sheet, SheetClose, SheetTitle, SheetFooter, SheetHeader, SheetPortal, SheetContent, SheetOverlay, SheetTrigger, SheetDescription, Skeleton, Slider, Switch, Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, TableFooter, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, Toast, ToastClose, ToastTitle, ToastAction, ToastProvider, ToastViewport, ToastDescription, useToast, Toaster, Toggle, ToggleGroup, ToggleGroupItem, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, };
