export default function Footer() {
  return (
    <div className="fixed bottom-5 left-0 w-full mx-auto backdrop-blur-3xl">
      <div className="pt-5 border-t border-[#24A0B5] flex items-center justify-center gap-x-3 font-merriweather text-sm mx-5">
        <h3 className="font-semibold">&copy;{new Date().getFullYear()}</h3>
        <h2 className="font-semibold">|</h2>
        <h3 className="font-semibold">
          Built with ❤️ by{" "}
          <a
            href="http://github.com/amnesia2k"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold italic"
          >
            Ola_the_Dev
          </a>
        </h3>
      </div>
    </div>
  );
}
