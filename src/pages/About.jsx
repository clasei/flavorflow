import React from 'react'
import about from "../assets/images/about.webp";
function About() {
  return (
    <div className="mainContainer">
      
      <div className="mainBar">
        <p>About Flavor Flow</p>
      </div>
        
      <div className='aboutContainer'>
  <h1>Flavor Flow 🍳 cooked by <span id='yellowSpanH1'>Sala 13</span></h1>
  <span>👩‍🍳 A quirky squad that accidentally mixed together in <span  id='yellowSpan'>Sala 12</span> and never looked back.</span>
  <img id='about' src={about} alt="sala 13" />
    <section className='chefs'>
    <div className='chefCard'>
        <h3>Clara Seijo</h3>
        <p>Web Dev & ...</p>
        <a href="https://www.linkedin.com/in/claraseijo/">LinkedIn</a>
      </div>

      <div className='chefCard'>
        <h3>Núria Soley</h3>
        <p>Web Dev & ...</p>
        <a href="https://www.linkedin.com/in/n%C3%BAria-soley-arnau-905a67147/">LinkedIn</a>
      </div>
      <div className='chefCard'>
        <h3>Ana Badolato</h3>
        <p>Web Dev & UX Designer</p>
        <a href="https://www.linkedin.com/in/anabadolatomunuera/">LinkedIn</a>
      </div>
    
      
    </section>
    <div  className='aboutDescription'>
    <p>Like a surprise combo that just works 🍔, we’ve combined our skills to cook up the freshest app experience. Buckle up 🎢, because this flavor train isn’t stopping!</p>
    </div>

</div>

    </div>
  )
}

export default About