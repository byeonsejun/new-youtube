import React from 'react';

export default function AsideModal({ children, onClose }) {
  return (
    <section
      className="fixed top-0 left-0 flex flex-col justify-center w-full h-full z-50 bg-neutral-900/50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-[#0f0f0f] w-[240px] h-full pl-4 pr-4">{children}</div>
    </section>
  );
}
