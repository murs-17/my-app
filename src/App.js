import Welcome from "./homework 1/Welcome";
 import BlogPost from "./homework2/BlogPost";
 import BillingCard from "./homework 3/BillingCard";
  import LikeButton from "./homework 4/LikeButton";
   import Footer from "./homework 5/Footer";
const billings = [ { name: "Oliver Liam", company: "Viking Burrito", email: "oliver@burrito.com", vat: "FRB1235476", }, { name: "Lucas Harper", company: "Stone Tech Zone", email: "lucas@stone-tech.com", vat: "FRB1235476", }, { name: "Ethan James", company: "Fiber Notion", email: "ethan@fiber.com", vat: "FRB1235476", }, ];
function Section({ title, children }) {
   return ( <section> <h2 className="mb-3 text-lg font-bold text-gray-700">{title}</h2> {children} </section> ); }
function App() { return (
  <div className="min-h-screen bg-gray-100"> 
  <main className="mx-auto max-w-3xl space-y-10 px-6 pb-10 pt-6"> 
  <Section title="Homework 1: Welcome"> <Welcome /> </Section>
    <Section title="Homework 2: Blog Post">
      <BlogPost />
    </Section>

    <Section title="Homework 3: Billing Card">
    <div className="bg-[#edf0f4] p-4">
        <div className="rounded-2xl bg-white p-4 pt-5 shadow-sm">
          <h3 className="mb-6 text-[15px] font-semibold text-[#40536d]">
            Billing Information
          </h3>
          <div className="space-y-6">
            {billings.map((b) => (
              <BillingCard
                key={b.name}
                name={b.name}
                company={b.company}
                email={b.email}
                vat={b.vat}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>

    <Section title="Homework 4: Like Button">
  <div className="rounded-2xl bg-white p-4 shadow-sm">
    <LikeButton />
  </div>
</Section>


  </main>

  <section>
    <h2 className="mx-auto mb-3  max-w-3xl px-6 text-lg font-bold text-gray-700">
      Homework 5: Footer
    </h2>
    <Footer />
  </section>
</div>
); }
export default App;