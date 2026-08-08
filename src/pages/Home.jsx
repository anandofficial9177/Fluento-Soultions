import Hero          from '../components/Hero'
import TrustBar      from '../components/TrustBar'
import Stats         from '../components/Stats'
import About         from '../components/About'
import VideoShowcase from '../components/VideoShowcase'
import Programs      from '../components/Programs'
import WhyFluento    from '../components/WhyFluento'
import Journey       from '../components/Journey'
import Industries    from '../components/Industries'
import Testimonials  from '../components/Testimonials'
import VideoStories  from '../components/VideoStories'
import Blog          from '../components/Blog'
import CtaBanner     from '../components/CtaBanner'
import Footer        from '../components/Footer'

export default function Home({ onNavigate, onContactClick, onDemoClick, onToast }) {
  return (
    <>
      <Hero          onContactClick={onContactClick} onDemoClick={onDemoClick} />
      {/* <TrustBar />
      <Stats /> */}
      <About        onNavigate={onNavigate}   onContactClick={onContactClick} />
      <VideoShowcase onDemoClick={onDemoClick} />
      {/* <Programs     onNavigate={onNavigate} /> */}
      <WhyFluento />
      <Journey      onNavigate={onNavigate} />
      {/* <Industries /> */}
      {/* <Testimonials /> */}
      {/* <VideoStories onDemoClick={onDemoClick} /> */}
      {/* <Blog         onToast={onToast} /> */}
      {/* <CtaBanner    onBookClick={onBookClick} onDemoClick={onDemoClick} /> */}
      <Footer       onNavigate={onNavigate}   onContactClick={onContactClick} onDemoClick={onDemoClick} onToast={onToast} />
    </>
  )
}
