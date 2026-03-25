import BackButton from '../components/BackButton';

export default function Account() {
  return (
    <div>
      <BackButton />
      <div className="px-14 pt-6 pb-6 flex flex-col gap-6">
        <button className="w-[290px] bg-white/40 border border-brand-green rounded-[10px] shadow-[0px_4px_4px_0px_rgba(112,113,42,0.15)] px-14 py-8">
          <p className="text-base text-black" style={{ fontFamily: "'Georgia', serif" }}>My Account</p>
        </button>
        <button className="w-[290px] bg-white/40 border border-brand-green rounded-[10px] shadow-[0px_4px_4px_0px_rgba(112,113,42,0.15)] px-14 py-8">
          <p className="text-base text-black" style={{ fontFamily: "'Georgia', serif" }}>Order History</p>
        </button>
      </div>
    </div>
  );
}
