interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  return <div className="m-0 p-12 h-[100vh] bg-blue-400 flex justify-center">{children}</div>;
};

export default MainLayout;
