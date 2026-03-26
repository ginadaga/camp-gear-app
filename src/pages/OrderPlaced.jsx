export default function OrderPlaced() {
  return (
    <div className="relative flex-1 flex items-start justify-center pt-32">
      <div className="w-[330px] bg-[rgba(199,206,182,0.4)] border-[0.5px] border-[#70712a] rounded-[38px] shadow-[0px_4px_4px_0px_rgba(112,113,42,0.3)] px-5 py-9 flex flex-col gap-5 items-center text-center text-white">
        <p className="text-[16px] font-bold" style={{ fontFamily: "'Arlen Expanded Bold', 'Arlen', Georgia, serif" }}>Thank you for your order!</p>
        <div className="text-[16px] space-y-3 font-['Arial',sans-serif]">
          <p>Order #XXXXXXXX</p>
          <p>Delivery date: XXXX XX, 20XX</p>
          <div>
            <p>Order confirmation emailed to:</p>
            <p>janedoe@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
