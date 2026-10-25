function TrashIcon() 
{ return ( <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
   <path d="M9 3h6l1 2h4v2H4V5h4l1-2zm-3 6h12l-1 12H7L6 9z" /> </svg> ); }
function PencilIcon() 
{ return ( <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor"> 
<path d="M3 17.25V21h3.75L17.8 9.94l-3.75-3.75L3 17.25zM20.7 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /> </svg> ); }
function BillingCard({ name, company, email, vat }) {
   return ( <div className="h-40 rounded-xl bg-[#f8f9fa] pb-6 pl-6 pr-9 pt-7"> 
   <div className="flex items-center justify-between"> <h2 className="text-[14px] font-bold text-[#40536d]">{name}</h2>
    <div className="flex gap-8 text-[12px] font-bold">
      <button className="flex items-center gap-1 text-red-600">
        <TrashIcon /> DELETE
      </button>
      <button className="flex items-center gap-1 text-[#40536d]">
        <PencilIcon /> EDIT
      </button>
    </div>
  </div>

  <div className="mt-5 space-y-1 text-[12px]">
    <p>
      <span className="text-[#8490a2]">Company Name:</span>
      <span className="ml-2 font-semibold text-[#40536d]">{company}</span>
    </p>
    <p>
      <span className="text-[#8490a2]">Email Address:</span>
      <span className="ml-2 font-semibold text-[#40536d]">{email}</span>
    </p>
    <p>
      <span className="text-[#8490a2]">VAT Number:</span>
      <span className="ml-2 font-semibold text-[#40536d]">{vat}</span>
    </p>
  </div>
</div>
); }
export default BillingCard;