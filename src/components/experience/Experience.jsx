import ExperienceSubcard from "./ExperienceSubcard"
import "./experience.css"

function Experience()
{
    return(
        <>
            <section id="resume" className="experience-container width100">
                <p className="popin">EDUCATION</p>
                <h2 className="popin">Professional Resume</h2>
                <div className="exp-card-container">
                    <div className="sub-card popin">

                        <ExperienceSubcard 
                        date="2022-2024" 
                        clg="Graphic Era Hill University (Dehradun)"
                        course="MCA"
                        cgpa="7.84 CGPA"        
                        />    

                        <ExperienceSubcard 
                        date="2018-2021" 
                        clg="Himalayan Institute of Technology (Dehradun)"
                        course="BSC IT"
                        cgpa="7.84 CGPA"    
                        />   
                    
                    </div>
                    <div className="sub-card popin">

                        <ExperienceSubcard 
                        date="2017-2018" 
                        clg="Scholars Home All India Sr. Sec & Residential School (Dehradun)"
                        course="Grade 12"
                        cgpa="70.16 %"    
                        />   
                        <ExperienceSubcard 
                        date="2015-2016" 
                        clg="Scholars Home All India Sr. Sec & Residential School (Dehradun)"
                        course="Grade 10"
                        cgpa="7.6 CGPA"    
                        />   
                    </div>
                </div>
            </section>
        </>
    );
}

export default Experience;