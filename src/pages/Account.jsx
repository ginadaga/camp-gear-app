import BackButton from '../components/BackButton';

export default function Account() {
  return (
    <div>
      <BackButton />
      <div className="px-[10px] pt-6 pb-6 flex flex-col gap-6">
        <button className="w-[382px] max-w-full h-[84px] bg-[rgba(199,206,182,0.4)] border-[0.5px] border-black rounded-[10px] shadow-[0px_4px_4px_0px_rgba(112,113,42,0.15)] px-[60px] flex items-center">
          <p className="text-[18px] text-black font-['Arial',sans-serif]">My Account</p>
        </button>
        <button className="w-[382px] max-w-full h-[84px] bg-[rgba(199,206,182,0.4)] border-[0.5px] border-black rounded-[10px] shadow-[0px_4px_4px_0px_rgba(112,113,42,0.15)] px-[60px] flex items-center">
          <p className="text-[18px] text-black font-['Arial',sans-serif]">Order History</p>
        </button>
      </div>
    </div>
  );
}
