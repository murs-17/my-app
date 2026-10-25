
/*
  GitHub: https://github.com/murs-17/my-app
*/
function PhoneIcon() { 
  return ( <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /> </svg> ); }
function MailIcon() {
   return ( <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <rect x="2" y="4" width="20" height="16" rx="2" /> <path d="m22 7-10 6L2 7" /> </svg> ); }
const services = [ "Interior Design", "Space Planning", "Consultation", "Project Management", ];
const company = ["About Us", "Our Team", "Portfolio", "Contact"];
const contact = [ "123 Design Street", "New York, NY 10001", "(555) 123-4567", "hello@modernism.com", ];
function Column({ title, items }) {
   return ( <div> <h3 className="mb-4 text-sm font-semibold text-white">{title}</h3> 
<ul className="space-y-3"> {items.map((item) => ( <li key={item} className="text-sm text-gray-400"> {item} </li> ))} </ul> </div> ); }
function Footer() {
   return ( 
   <footer className="w-full bg-[#1c1917] px-6 pb-8 pt-12 mb-5 "> 
<div className="mx-auto max-w-4xl"> <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4"> <div> 
  <h2 className="mb-4 text-xl font-bold text-[#fbbf24]"> Modernism </h2> 
  <p className="max-w-[220px] text-sm leading-relaxed text-gray-400"> Creating beautiful, functional spaces that reflect your unique style and needs. </p>
   <div className="mt-5 flex gap-3"> 
  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2a2623] text-gray-300"> <PhoneIcon /> </span> 
  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2a2623] text-gray-300"> <MailIcon /> </span> </div> </div>
      <Column title="Services" items={services} />
      <Column title="Company" items={company} />
      <Column title="Contact" items={contact} />
    </div>

    <div className="mt-10 border-t border-white/10 pt-8 text-center text-sm text-gray-400">
      © 2024 Modernism Interior Design. All rights reserved.
    </div>
  </div>
</footer>
); }
export default Footer;