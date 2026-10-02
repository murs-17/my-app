import BillingCard from "./homework 3/BillingCard";
function App() { return ( <div className="min-h-screen bg-[#f5f6f8] py-3">
  <div className="mx-auto max-w-[960px] rounded-2xl bg-white p-4">

    <h1 className="mb-7 text-[16px] font-bold text-[#40536d]">
      Billing Information
    </h1>

    <div className="space-y-6">

      <BillingCard
        name="Oliver Liam"
        company="Viking Burrito"
        email="oliver@burrito.com"
        vat="FRB1235476"
      />

      <BillingCard
        name="Lucas Harper"
        company="Stone Tech Zone"
        email="lucas@stone-tech.com"
        vat="FRB1235476"
      />

      <BillingCard
        name="Ethan James"
        company="Fiber Notion"
        email="ethan@fiber.com"
        vat="FRB1235476"
      />

    </div>

  </div>

</div>
); }
export default App;