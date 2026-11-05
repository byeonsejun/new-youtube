export default function Footer() {
  return (
    <footer className="w-full mt-12 px-4 py-6 border-t border-white/10 text-center text-xs text-gray-400">
      {`Copyright © ${new Date().getFullYear()} BYUN SEJUN. All Rights Reserved.`}
    </footer>
  );
}
