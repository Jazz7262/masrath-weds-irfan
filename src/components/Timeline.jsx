import React, { useCallback } from "react";
import "../styles/Timeline.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import timelineParticlesConfig from "../ts-particles-config-files/timeline-particles-config";

function Timeline() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section id="timeline">
      <Particles
        id="timeline-ts-particles"
        init={particlesInit}
        options={timelineParticlesConfig}
      ></Particles>
      <div className="single-timeline">
        <h1 className="inshaallaah">Inshaallaah ...</h1>

        <div className="wrapper" data-aos="fade-up" data-aos-delay="100">
          <div className="content">
            <h1>Nikaah</h1>
            <p>
              On Sunday, 21<sup>st</sup> July, 2024,
              <br />
              14<sup>th</sup> Muharram-ul-Haraam, 1446 Hijri,
              <br />
              Time: After Namaaz-e-Zohar.
            </p>

            <h2>Venue:</h2>
            <p>
              MSK Function Hall,
              <br /> Badepally, Jadcherla - 509 301.
            </p>

            {/* <h2>Nikaah At:</h2>
            <p>
              Masjid-e-Noor,
              <br /> Pension Lane, Mohammed Nagar,
              <br /> New Bowenpally,
              <br /> Secunderabad.
            </p>

            <h2>Dinner Follows:</h2>
            <p>
              Heritage Function Palace,
              <br /> Musheerabad Main Road,
              <br /> Musheerabad, Bakaram,
              <br /> Kavadiguda, Hyderabad
              <br /> Telangana - 500020.
              <br /> Time: 09:00 PM.
            </p> */}
          </div>
        </div>
      </div>
    </section>

    //     <section id="timeline">
    //         <Particles
    //             id="timeline-ts-particles"
    //             init={particlesInit}
    //             options={timelineParticlesConfig}
    //         ></Particles>
    //         <div className="multi-timeline">
    //             <h1 className="inshaallaah">Inshaallaah ...</h1>
    //             <div className="wrapper">
    //                 {/* shukrana included */}
    //                 {/* <>
    //                 //     <div className="row">
    //                 //         <div className="col-lg-6 left" data-aos="fade-down">
    //                 //             <h1>Shukrana</h1>
    //                 //             <p>
    //                 //                 On Saturday, 04<sup>th</sup> November, 2023.
    //                 //                 <br />
    //                 //                 20<sup>th</sup> Rabi-ul-Aakhir, 1445 Hijri,
    //                 //                 <br />
    //                 //                 Time: 09:00 PM.
    //                 //             </p>

    //                 //             <h2>Venue:</h2>
    //                 //             <p>
    //                 //                 KKB Function Hall,
    //                 //                 <br /> NGO's Colony,
    //                 //                 <br /> Adoni.
    //                 //             </p>
    //                 //         </div>

    //                 //         <div
    //                 //             className="col-lg-6 right"
    //                 //             data-aos="fade-down"
    //                 //         ></div>
    //                 //     </div>
    //                 //     <div className="row">
    //                 //         <div
    //                 //             className="col-lg-6 left next"
    //                 //             data-aos="fade-down"
    //                 //             data-aos-offset="200"
    //                 //         ></div>
    //                 //         <div
    //                 //             className="col-lg-6 right next"
    //                 //             data-aos="fade-down"
    //                 //             data-aos-offset="200"
    //                 //         >
    //                 //             <h1>Nikaah</h1>
    //                 //             <p>
    //                 //                 On Sunday, 05<sup>th</sup> November, 2023,
    //                 //                 <br />
    //                 //                 21<sup>st</sup> Rabi-ul-Aakhir, 1445 Hijri,
    //                 //                 <br /> Time: 12:45 PM.
    //                 //             </p>

    //                 //             {/* <h2>Venue:</h2>
    //                 //             <p>
    //                 //                 Masjid -e- Shekhan,
    //                 //                 <br /> Near Yemmiganur By-pass Road,
    //                 //                 <br /> Tirumala Nagar,
    //                 //                 <br /> Adoni.
    //                 //             </p>

    //                 //             <h2>Lunch Follows:</h2>
    //                 //             <p>
    //                 //                 Roshan Garden,
    //                 //                 <br /> Near Art's College,
    //                 //                 <br /> Yemmiganur Road,
    //                 //                 <br /> Tirumala Nagar,
    //                 //                 <br /> Adoni.
    //                 //             </p>

    //                 //             <h2>Venue:</h2>
    //                 //             <p>
    //                 //                 KKB Function Hall,
    //                 //                 <br /> NGO's Colony,
    //                 //                 <br /> Adoni.
    //                 //             </p>
    //                 //         </div>
    //                 //     </div>
    //                 //     <div className="row">
    //                 //         <div
    //                 //             className="col-lg-6 left next"
    //                 //             data-aos="fade-down"
    //                 //             data-aos-offset="200"
    //                 //             data-aos-delay="100"
    //                 //         >
    //                 //             <h1>Valima</h1>

    //                 //             <p>
    //                 //                 On Monday, 06<sup>th</sup> November, 2023,
    //                 //                 <br />
    //                 //                 22<sup>nd</sup> Rabi-ul-Aakhir, 1445 Hijri,
    //                 //                 <br />
    //                 //                 Time: 02:00 PM.
    //                 //             </p>

    //                 //             <h2>Venue:</h2>
    //                 //             <p>
    //                 //                 KKB Function Hall,
    //                 //                 <br /> NGO's Colony,
    //                 //                 <br /> Adoni.
    //                 //             </p>
    //                 //         </div>
    //                 //         <div
    //                 //             className="col-lg-6 right next"
    //                 //             data-aos="fade-down"
    //                 //             data-aos-offset="200"
    //                 //             data-aos-delay="100"
    //                 //         ></div>
    //                 //     </div>
    //                 </>                */}

    //                 {/* shukrana excluded */}
    //                  <>
    //                     <div className="row">
    //                         <div
    //                             className="col-lg-6 left next"
    //                             data-aos="fade-down"
    //                             data-aos-offset="200"
    //                         >
    //                             <h1>Nikaah</h1>
    //                             <p>
    //                                 On Friday, 24<sup>th</sup> November, 2023,
    //                                 <br />
    //                                 10<sup>th</sup> Jamaad-il-awwal, 1445 Hijri,
    //                                 <br />
    //                                 Time: After Namaaz-e-Jumaah.
    //                             </p>

    //                             <h2>Nikaah At:</h2>
    //                             <p>
    //                                 Masjid-e-Noor,
    //                                 <br /> Pension Lane, Mohammed Nagar,
    //                                 <br /> New Bowenpally,
    //                                 <br /> Secunderabad.
    //                             </p>

    //                             <h2>Dinner Follows:</h2>
    //                             <p>
    //                                 Heritage Function Palace,
    //                                 <br /> Musheerabad Main Road,
    //                                 <br /> Musheerabad, Bakaram,
    //                                 <br /> Kavadiguda, Hyderabad
    //                                 <br /> Telangana - 500020.
    //                                 <br /> Time: 09:00 PM.
    //                             </p>
    //                         </div>
    //                         <div
    //                             className="col-lg-6 right next"
    //                             data-aos="fade-down"
    //                             data-aos-offset="200"
    //                         ></div>
    //                     </div>
    //                     <div className="row">
    //                         <div
    //                             className="col-lg-6 left next"
    //                             data-aos="fade-down"
    //                             data-aos-offset="200"
    //                             data-aos-delay="100"
    //                         ></div>
    //                         <div
    //                             className="col-lg-6 right next"
    //                             data-aos="fade-down"
    //                             data-aos-offset="200"
    //                             data-aos-delay="100"
    //                         >
    //                             <h1>Valima</h1>
    //                             <p>
    //                                 On Sunday, 26<sup>th</sup> November, 2023,
    //                                 <br />
    //                                 12<sup>th</sup> Jamaad-il-awwal, 1445 Hijri,
    //                                 <br />
    //                                 Time: 08:00 PM.
    //                             </p>
    //                             <h2>Venue:</h2>
    //                             <p>
    //                                 786 Garden Function Hall,
    //                                 <br /> Moula Ali Road, S.P. Nagar,
    //                                 <br /> Moula Ali, Secunderabad Road,
    //                                 <br /> Moula Ali, Hyderabad.
    //                             </p>
    //                         </div>
    //                     </div>
    //                 </>
    //             </div>
    //         </div>
    //     </section>
  );
}

export default Timeline;
