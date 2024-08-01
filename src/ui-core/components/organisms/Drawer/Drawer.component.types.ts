export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onExpand?: () => void;
  children: React.ReactNode;
}
