export default function OrderPlaced() {
  return (
    <div className="relative flex-1 flex items-start justify-center pt-32">
      <div className="w-[330px] bg-white/40 border border-brand-green rounded-[38px] shadow-[0px_4px_4px_0px_rgba(112,113,42,0.3)] px-5 py-9 flex flex-col gap-5 items-center text-center text-white">
        <p className="text-base font-bold">Thank you for your order!</p>
        <div className="text-base space-y-3">
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
