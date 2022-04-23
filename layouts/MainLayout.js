import Icon from "components/Icon";
import ThemeSwitch from "components/ThemeSwitch";
import SEO from "components/SEO";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

function AnimatedButton({ children, ...rest }) {
  return (
    <motion.button
      whileHover={{
        scale: 1.2,
        fontWeight: "bold",
      }}
      transition={{
        duration: 0.1,
      }}
      {...rest}
    >
      {children}
    </motion.button>
  );
}

function MainLayout({ children }) {
  const router = useRouter();

  const header = (
    <header className="flex justify-center mx-5">
      <div className="w-full xs:max-w-xs sm:max-w-xl md:max-w-2xl pt-8 flex justify-between">
        <span
          className="text-2xl font-bold cursor-pointer"
          onClick={() => router.push("/")}
        >
          Wame
        </span>
        <AnimatedButton>
          <ThemeSwitch />
        </AnimatedButton>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="pb-8 flex justify-center">
        Made with Next.js and Love
        {/* Like Wame? Consider buying me a coffee :) */}
      </div>
    </footer>
  );

  return (
    <div className="flex h-screen flex-col justify-between">
      {header}
      <SEO
        title="Wame"
        description="Open whatsapp chat without creating contact"
        ogType="website"
      />
      <div className="h-full w-full mb-auto flex justify-center">
        <div className="w-full xs:max-w-xs sm:max-w-xl md:max-w-2xl">
          {children}
        </div>
      </div>
      {/* <main
        className="flex flex-col"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </main> */}
      {footer}
    </div>
  );
}

export default MainLayout;
