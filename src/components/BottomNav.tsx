import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";


const BottomNav = () => {
  const [selected, setSelected] = useState(0);

  return (
    // NOTE: In prod, you'd likely set height to h-screen and fix to the viewport
    <nav className="h-[5rem] w-fit bg-slate-950 p-4 flex flex-row items-center gap-2">
      {/* Temp logo from https://logoipsum.com/ */}
      
      <NavItem selected={selected === 0} id={0} setSelected={setSelected}>
        Home
      </NavItem>
      <NavItem selected={selected === 1} id={1} setSelected={setSelected}>
       Somwhere else
      </NavItem>
      <NavItem selected={selected === 2} id={2} setSelected={setSelected}>
        Uhuh
      </NavItem>
      <NavItem selected={selected === 3} id={3} setSelected={setSelected}>
        About
      </NavItem>
      <NavItem selected={selected === 4} id={4} setSelected={setSelected}>
        Contact
      </NavItem>
    </nav>
  );
};

const NavItem = ({ children, selected, id, setSelected }) => {
  return (
    <motion.button
      className="p-3 text-xl bg-slate-800 hover:bg-slate-700 rounded-md transition-colors relative"
      onClick={() => setSelected(id)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="block relative z-10">{children}</span>
      <AnimatePresence>
        {selected && (
          <motion.span
            className="absolute inset-0 rounded-md bg-indigo-600 z-0"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          ></motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default BottomNav;