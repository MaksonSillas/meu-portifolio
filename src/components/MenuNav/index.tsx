import { DivContainerNav } from "./style";
import { ReactNode, useEffect, useRef } from "react";

interface IMenuNav {
  children: ReactNode;
  setNavIsOpen: (item: boolean) => void;
}

export function MenuNav({ children, setNavIsOpen }: IMenuNav) {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleOutClick(e: MouseEvent) {
      if (!navRef.current?.contains(e.target as Node)) {
        setNavIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  return (
    <DivContainerNav>
      <nav className="nav-box" ref={navRef}>
        {children}
      </nav>
    </DivContainerNav>
  );
}
