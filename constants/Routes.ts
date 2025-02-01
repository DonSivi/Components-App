import { FontAwesome } from '@expo/vector-icons'

interface MenuRoute{
  title: string
  icon: keyof typeof FontAwesome.glyphMap
  name: string
}

export const menuRoutes: MenuRoute[] = [
  {
    title: 'Pull to refresh',
    icon: 'refresh',
    name: 'pull-to-refresh/index',
  },
  {
    title: 'Section List',
    icon: 'list-ul',
    name: 'section-list/index',
  },
  {
    title: 'Modal',
    icon: 'window-maximize',
    name: 'modal/index',
  },
  {
    title: 'InfiniteScroll',
    icon: 'download',
    name: 'infinite-scroll/index',
  },
  {
    title: 'Slides',
    icon: 'sliders',
    name: 'slides/index',
  },
  {
    title: 'Themes',
    icon: 'stack-overflow',
    name: 'themes/index',
  },
];

export const uiMenuRoutes: MenuRoute[] = [
  {
    title: 'Switches',
    icon: 'toggle-down',
    name: 'switches/index',
  },
  {
    title: 'Alerts',
    icon: 'warning',
    name: 'alerts/index',
  },
  {
    title: 'TextInputs',
    icon: 'file-text',
    name: 'text-inputs/index',
  },
];

export const animationMenuRoutes: MenuRoute[] = [
  {
    title: 'Animation 101',
    icon: 'cube',
    name: 'animation-101/index',
  },
  {
    title: 'Animation 102',
    icon: 'book',
    name: 'animation-102/index',
  },
];

export const allRoutes: MenuRoute[] = [
  ...menuRoutes,
  ...uiMenuRoutes,
  ...animationMenuRoutes,
];
