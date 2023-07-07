type TabsProps = {
  id: string;
  name: string;
  title: string;
  to: string;
};

export default function currentPage(tabs: TabsProps[], pathname: string) {
  return tabs.filter((obj) => obj.to === pathname)[0];
}
