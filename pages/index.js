import { motion } from "framer-motion";
import { useState } from "react";
import Icon from "components/Icon";

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

  const [mobileNumber, setMobileNumber] = useState("");
  const [helpVisible, setHelpVisible] = useState(false);

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
    if (!mobileNumber) return;
    const trimmedMobileNumber = mobileNumber.trim();
    window.open(
      `https://wa.me/${trimmedMobileNumber}`,
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
            duration: 0.5,
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
            delay: 0.5,
            duration: 0.5,
          }}
        >
          &nbsp;Without Adding Contact
        </motion.p>
      </div>
      <div className="flex justify-between p-3 border-2 rounded-md border-neutral-200 dark:border-[#FFFFFF]">
        <input
          className="flex bg-transparent outline-0 focus:outline-none"
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
          type="submit"
          whileHover={{
            fontWeight: "bold",
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          onClick={submit}
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
