import { create } from 'zustand';

type TabsProps = {
  id: string;
  name: string;
  title: string;
  to: string;
};

type ActionsProps = {
  addTabs: (tab: TabsProps) => void;
  removeTab: (tabId: string) => void;
  updateTab: (tabId: string, updateTab: TabsProps) => void;
};

type StoreProps = {
  state: {
    tabs: TabsProps[];
  };
  actions: ActionsProps;
};

export const useTabsStore = create<StoreProps>((set) => ({
  state: {
    tabs: []
  },
  actions: {
    addTabs: (tab) =>
      set((state) => ({
        state: { tabs: [...state.state.tabs, tab] }
      })),
    removeTab: (tabId) =>
      set((state) => ({
        state: { tabs: state.state.tabs.filter((tab) => tab.id !== tabId) }
      })),
    updateTab: (tabId, updatedTab) =>
      set((state) => ({
        state: {
          tabs: state.state.tabs.map((tab) => (tab.id === tabId ? { ...tab, ...updatedTab } : tab))
        }
      }))
  }
}));
