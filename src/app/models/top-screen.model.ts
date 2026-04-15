export enum BusinessCodes {
  'MN_01' = '01',
  'MN_02' = '02',
}

export function getEnumValue(key: string): string | undefined {
  if (key in BusinessCodes) {
    return BusinessCodes[key as keyof typeof BusinessCodes];
  }

  return undefined;
}

export const MENU_ITEMS = [
  {
    id: 'MN_01',
    text: 'Document Request',
    icon: 'document-text-outline',
    page: 'document-request',
  },
  {
    id: 'MN_02',
    text: 'Coming Soon...',
    icon: 'alert-circle-outline',
    page: 'na',
  },
  {
    id: 'MN_03',
    text: 'Coming Soon...',
    icon: 'alert-circle-outline',
    page: 'na',
  },
  {
    id: 'MN_04',
    text: 'Coming Soon...',
    icon: 'alert-circle-outline',
    page: 'na',
  },
];

export interface MenuItems {
  id: string;
  text: string;
  icon: string;
  page: string;
}
