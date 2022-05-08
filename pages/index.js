import { motion } from "framer-motion";
import { useState } from "react";
import Icon from "components/Icon";
import CountrySelectorDialog from "components/CountrySelectorDialog";

function PhoneNumberRule({ text, icon, iconColor }) {
  return (
    <div className="flex justify-between">
      <p className="italic text-gray-400">{text}</p>
      <Icon className={`${iconColor} ml-5`}>{icon}</Icon>
    </div>
  );
}

export default function Home() {
  const helpTextList = [
    {
      text: "(60)1111931731",
      icon: "x",
      iconColor: "text-red-500",
    },
    {
      text: "011-11931731",
      icon: "x",
      iconColor: "text-red-500",
    },
    {
      text: "601111931731",
      icon: "check",
      iconColor: "text-green-500",
    },
  ];

  const [countryCode, setCountryCode] = useState("60");
  const [mobileNumber, setMobileNumber] = useState("");
  const [helpVisible, setHelpVisible] = useState(false);
  const [countryDialogState, setCountryDialogState] = useState({
    open: false,
  });

  const closeCountryDialog = () => {
    setCountryDialogState({
      open: false,
    });
  };

  const onMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleFocus = () => {
    if (!helpVisible) {
      setHelpVisible(true);
    }
  };

  const handleBlur = () => {
    if (helpVisible && mobileNumber.length === 0) {
      setHelpVisible(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      submit();
    }
  };

  const submit = () => {
    if (!mobileNumber || !countryCode) return;
    const trimmedMobileNumber = mobileNumber.trim();
    window.open(
      `https://wa.me/${countryCode + trimmedMobileNumber}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="h-full mx-5">
      <div className="h-2/5 flex justify-center items-center flex-col md:flex-row">
        <motion.p
          className="text-xl"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          Open Whatsapp Chat
        </motion.p>
        <motion.p
          className="text-xl"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
            duration: 1,
          }}
        >
          &nbsp;Without Adding Contact
        </motion.p>
      </div>
      <div className="flex justify-between items-center p-3 rounded-md border-2 border-neutral-200 dark:border-[#FFFFFF]">
        <div
          className="pr-3 cursor-pointer"
          onClick={() => {
            setCountryDialogState({
              open: true,
            });
          }}
        >
          {`(+${countryCode})`}
        </div>
        {countryDialogState.open && (
          <CountrySelectorDialog
            value={countryCode}
            setValue={setCountryCode}
            open={countryDialogState.open}
            onClose={closeCountryDialog}
          />
        )}
        <input
          className="bg-transparent outline-0 focus:outline-none grow"
          type="text"
          pattern="[0-9]*"
          inputMode="numeric"
          maxLength="15"
          placeholder="Enter phone number.."
          value={mobileNumber}
          onChange={(e) => onMobileNumberChange(e)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
        />
        <motion.button
          className="cursor-pointer p-2"
          type="button"
          whileHover={{
            fontWeight: "bold",
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          onClick={submit}
          aria-label="Open"
        >
          Open
        </motion.button>
      </div>
      <div className="pt-8 pl-2 w-48">
        {helpTextList.map((helpText, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
            }}
            animate={{
              ...(helpVisible && {
                opacity: 1,
                transition: {
                  delay: index * 0.15,
                  //duration: index * 0.5,
                },
              }),
            }}
          >
            <PhoneNumberRule
              text={helpText.text}
              icon={helpText.icon}
              iconColor={helpText.iconColor}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
