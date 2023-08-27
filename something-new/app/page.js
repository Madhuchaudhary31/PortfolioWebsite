import Image from 'next/image'
export const metadata= {
    title: "Madhu's Dev Portfolio",
    description: 'Hi this is madhus dev portfolio',
  }



export default function Home() {
  return (
    <>
       <header>
        <main>
            <section className="firstSection">
                <div className="leftSection"> 
                   <div>Hi, My name is  <span className="purple"> Madhu  </span></div> 
                    <div>and I am a passionate</div>
                   
                    <span id="element"></span>
                       
                    <div className="buttons">
                        <button className="btn">Download Resume</button>
                        <button className="btn">Visit Github</button>
                    

                    </div>


                    
                   
                </div>  
                 <div className="rightSection">  
                <img src="/webdevelopment-banner.png" height ="350px" width="400px" alt=" "/>
                
                 </div>

            </section>
            <hr/>


             <section className="secondSection">
                <span className="text-gray"> What I have done so far</span>
                <h1> Work Experience </h1>

                <div className="box">
                    <div className="vertical">
                        <img className="image-top" src="/https://cdn2.iconfinder.com/data/icons/professions-vivid-vol-2/256/Programmer_Female-1024.png" alt=""/>
                        <div className="vertical-title">
                            HTML Developer (2010-2012)    
                        </div>
                        <div className="vertical-desc">
                           Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                           Architecto dolores voluptate velit est neque excepturi
                            nobis temporibus alias quasi. Eveniet impedit autem id.
                        </div>
                    </div>
                    

                    <div className="vertical">
                        <img className="image-top" src="/New-Instagram-logo.jpg" alt=""/>
                        <div className="vertical-title">
                            Nodejs Developer- Instagram (2012-2014)    
                        </div>
                        <div className="vertical-desc">
                           Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                           Architecto dolores voluptate velit est neque excepturi
                            nobis temporibus alias quasi. Eveniet impedit autem id.
                        </div>
                    </div>
                    <div className="vertical">
                        <img className="image-top" src="/facebook-logo-png-2335.png" alt=""/>
                        <div className="vertical-title">
                            HTML Developer - Facebook (2014-2016)    
                        </div>
                        <div className="vertical-desc">
                           Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                           Architecto dolores voluptate velit est neque excepturi
                            nobis temporibus alias quasi. Eveniet impedit autem id.
                        </div>
                    </div>
                    <div className="vertical">
                        <img className="image-top" src="/twitter-png-logo-twitterbird-1528.png" alt=""/>
                        <div className="vertical-title">
                            HTML Developer - Twitter (2016-2018)    
                        </div>
                        <div className="vertical-desc">
                           Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                           Architecto dolores voluptate velit est neque excepturi
                            nobis temporibus alias quasi. Eveniet impedit autem id.
                        </div>
                    </div>
                    <div className="vertical">
                        <img className="image-top" src="/YouTube-LOGO.png" alt=""/>
                        <div className="vertical-title">
                            HTML Developer - Yooutube (2018-2020)    
                        </div>
                        <div className="vertical-desc">
                           Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                           Architecto dolores voluptate velit est neque excepturi
                            nobis temporibus alias quasi. Eveniet impedit autem id.
                        </div>
                    </div>
                </div>
            </section>

        </main>
        <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>


        <footer>
            <div className="footer">
                <div className="footer-first">
                <h3>Madhu's Developer Portfolio</h3>
                </div>
                <div className="footer-second">
                   <ul>
                    <li>Home</li>
                    <li>About </li>
                    <li>Contact</li>
                    <li>Services</li>
                 </ul> 
        
                </div>
                <div className="footer-third">
                    <ul>
                        <li>Home</li>
                        <li>About </li>
                        <li>Contact</li>
                        <li>Services</li>
                     </ul> 
            
        
                </div>
                <div className="footer-fourth">
                    <ul>
                        <li>Home</li>
                        <li>About </li>
                        <li>Contact</li>
                        <li>Services</li>
                     </ul> 
            
                </div>
                </div>
                <div className="footer-rights">
                    Copyright &#169;madhusportfolio.com | All rights reserved
                </div>
        </footer>
           
    </header>
    </>
  )
}
