interface IsiValueProps {
  title: string;
  content: string;
  onClose: () => void;
}

const IsiValue = ({ title, content, onClose }: IsiValueProps) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose} // klik di luar akan menutup modal
    >
      <div
        className="bg-[#E5E5E5] w-[722px] h-[354px] rounded-[18px] p-6 relative"
        onClick={(e) => e.stopPropagation()} // mencegah penutupan saat klik di dalam konten
      >
        <div className="flex items-center bg-[#D4FFA9] rounded-[18px] px-4 py-2 mb-4">
          {/* Tombol ini bisa dihapus jika cukup klik backdrop */}
          {/* <button className="text-xl mr-2 font-bold" onClick={onClose}>←</button> */}
          <h2 className="text-2xl font-semibold text-[#1E1E1E]">{title}</h2>
        </div>
        <p className="text-[#1E1E1E] leading-relaxed text-base">
          {content.split("**").map((part, i) =>
            i % 2 === 1 ? (
              <strong className="text-[#58A40D]" key={i}>{part}</strong>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </p>
      </div>
    </div>
  );
};

export default IsiValue;
