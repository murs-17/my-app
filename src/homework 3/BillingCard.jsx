function BillingCard({ name, company, email, vat }) { return ( <div className="h-40 rounded-xl bg-[#f8f9fa] p-6">
  <div className="flex justify-between">
    <h2 className="text-[14px] font-bold text-[#40536d]">
      {name}
    </h2>

    <div className="flex gap-8 text-[13px] font-bold">
      <span className="text-red-600">
        🗑 DELETE
      </span>

      <span className="text-[#40536d]">
        ✎ EDIT
      </span>
    </div>
  </div>

  <div className="mt-6 space-y-2 text-[13px]">

    <p>
      <span className="text-[#8490a2]">
        Company Name:
      </span>
      <span className="ml-2 font-semibold text-[#40536d]">
        {company}
      </span>
    </p>

    <p>
      <span className="text-[#8490a2]">
        Email Address:
      </span>
      <span className="ml-2 font-semibold text-[#40536d]">
        {email}
      </span>
    </p>

    <p>
      <span className="text-[#8490a2]">
        VAT Number:
      </span>
      <span className="ml-2 font-semibold text-[#40536d]">
        {vat}
      </span>
    </p>

  </div>
</div>
); }
export default BillingCard;