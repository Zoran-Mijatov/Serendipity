import { ReactComponent as Logo } from '/public/icons/logo.svg';

export const Header = () => {
  return (
    <header className="w-full max-w-[1552px] mx-auto relative z-50 pt-16">
      <nav className="w-full flex justify-between">
        <Logo />
        <div className="flex text-red-700">
          <a href="/">Hello</a>
          <a href="/">Hello</a>
          <a href="/">Hello</a>
          <a href="/">Hello</a>
        </div>
      </nav>
    </header>
  );
};
