import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const Announce = () => {
  const [announceStyle, setAnnounceStyle] = useState(
    'bg-[#8a4af3] font-bold text-white flex items-center justify-center'
  );

  const handleClose = () => {
    setAnnounceStyle(announceStyle + " hidden");
  };

  return (
    <div className={announceStyle}>
      <h2>Selamat Datang di FLowerStore</h2>
      <CloseIcon className="cursor-pointer" onClick={handleClose} />
    </div>
  );
};

export default Announce;
