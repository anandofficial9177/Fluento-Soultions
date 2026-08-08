import '../App.css'

const LOGOS = ['INFOSYS','WIPRO','TCS','HCL','RELIANCE','MAHINDRA','HDFC BANK',
               'TATA GROUP','COGNIZANT','ACCENTURE','SHELL','TOTAL PETROLEUM','CHEVRON']

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="trust-label">Trusted by leading organizations</div>
      <div className="marquee-wrap">
        <div className="marquee">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={i} className="marquee-logo">{logo}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
