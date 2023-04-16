import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import "./about-us.style.scss";
import { ReactComponent as Check } from "../../../assets/check-2.svg";
const AboutUs = () => {
  const [n, setN] = useState(0);
  const galleryRef = useRef();
  const svgRight = useRef();
  const svgLeft = useRef();
  const modal = useRef();
  const modalImage = useRef();
  const overlay = useRef();
  const svgIcon = (num) => {
    switch (num) {
      case 10:
        svgRight.current.style.fill = "#000";
        break;
      case 1:
        svgLeft.current.style.fill = "#000";
        svgRight.current.style.fill = "#fff";
        break;
      default:
        svgRight.current.style.fill = "#fff";
        svgLeft.current.style.fill = "#fff";
        break;
    }
  };
  const openModal = (e) => {
    if (e.target.localName === "img") {
      let num = parseInt(e.target.id);
      setN(num);
      modal.current.classList.remove("hidden");
      overlay.current.classList.remove("hidden");
      modalImage.current.style.backgroundImage = `url(${e.target.src})`;
      svgIcon(num);
    }
  };
  const modalToRight = () => {
    if (n < 10) {
      let num = n + 1;
      setN(num);
      modalImage.current.style.backgroundImage = `url(${
        galleryRef.current.childNodes[num - 1]?.src
      })`;
      svgIcon(num);
    }
  };
  const modalToLeft = () => {
    if (n > 1) {
      let num = parseInt(n) - 1;
      setN(num);
      modalImage.current.style.backgroundImage = `url(${
        galleryRef.current.childNodes[num - 1].src
      })`;
      svgIcon(num);
    }
  };
  const closeModal = () => {
    modal.current.classList.add("hidden");
    overlay.current.classList.add("hidden");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const eventListenerFunc = (e) => {
      if (e.key === "ArrowRight") {
        modalToRight();
      } else if (e.key === "ArrowLeft") {
        modalToLeft();
      } else if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", eventListenerFunc);
    return () => window.removeEventListener("keydown", eventListenerFunc);
  });
  return (
    <Fragment>
      <div className="about-us">
        <div className="about-wrap">
          <div className="about-container-1">
            <div className="about-header">OUR CLINIC</div>
            <div className="about-us-gallery">
              <div
                className="about-us-gallery-container"
                ref={galleryRef}
                onClick={openModal}
              >
                <img
                  id="1"
                  width="123"
                  height="183"
                  alt="clinic"
                  src={require("../../../assets/clinic-1.jpg")}
                />
                <img
                  id="2"
                  width="275"
                  height="184"
                  alt="clinic"
                  src={require("../../../assets/clinic-2.jpg")}
                />
                <img
                  id="3"
                  width="138"
                  height="184"
                  alt="clinic"
                  src={require("../../../assets/clinic-3.jpg")}
                />
                <img
                  id="4"
                  width="138"
                  height="184"
                  alt="clinic"
                  src={require("../../../assets/clinic-4.jpg")}
                />
                <img
                  id="5"
                  width="276"
                  height="184"
                  alt="clinic"
                  src={require("../../../assets/clinic-5.jpg")}
                />
                <img
                  id="6"
                  width="138"
                  height="184"
                  alt="clinic"
                  src={require("../../../assets/clinic-6.jpg")}
                />
                <img
                  id="7"
                  width="275"
                  height="184"
                  alt="clinic"
                  src={require("../../../assets/clinic-7.jpg")}
                />
                <img
                  id="8"
                  width="275"
                  height="184"
                  alt="clinic"
                  src={require("../../../assets/clinic-8.jpg")}
                />
                <img
                  id="9"
                  width="275"
                  height="184"
                  alt="clinic"
                  src={require("../../../assets/clinic-9.jpg")}
                />
                <img
                  id="10"
                  width="150"
                  height="200"
                  alt="clinic"
                  src={require("../../../assets/clinic-10.jpg")}
                />
              </div>
            </div>
          </div>
          <div className="about-container-2">
            <div className="about-header">OUR TEAM</div>
            <div className="about-us-team">
              <div className="about-team-wrap">
                <h3 className="about-team-header">Ahmet Mert Nalbantoğlu</h3>
                <div className="about-team-container">
                  <div className="about-team-row-1">
                    <h4>Speciality</h4>
                    <div>Periodontology</div>
                  </div>
                  <div className="about-team-row-2">
                    <h4>Degree</h4>
                    <div>
                      Hacettepe University, School of Dentistry / Cumhuriyet
                      University, School of Dentistry, Department of
                      Periodontology
                    </div>
                  </div>
                  <div className="about-team-row-3">
                    <h4>Training</h4>
                    <div>
                      Gum Diease Treatment / Non-surgical Periodontal Therapy /
                      Laser Treatment / Surgical Periodontal Therapy / Bone
                      Grafting and Periodontal Tissue Regeneration / Periodontal
                      Maintenance / Recerding Gum Treatment / Oral Hygiene /
                      Air-Flow Therapy
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-team-wrap">
                <h3 className="about-team-header">Deniz Yanık</h3>
                <div className="about-team-container">
                  <div className="about-team-row-1">
                    <h4>Speciality</h4>
                    <div>Endodontics</div>
                  </div>
                  <div className="about-team-row-2">
                    <h4>Degree</h4>
                    <div>
                      Istanbul University,School of Dentistry / Akdeniz
                      University, School of Dentistry Department of Endodontics
                    </div>
                  </div>
                  <div className="about-team-row-3">
                    <h4>Training</h4>
                    <div>
                      Root Canal Treatment of Vital and Devital Teeth /
                      Retreatment / Teatment of Chronic Apical Lesions /
                      Treatment of Teeth with Endodontic-Periodonal Lesions /
                      Devital Teeth Whitening / Vital Teeth Whitening /
                      Internal-External Root Resorption Treatment / Treatment of
                      Anatomically Variated Teeth / Dental Trauma Treatment /
                      Endodontic Treatments with Laser Support
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-team-wrap">
                <h3 className="about-team-header">Burak Kale</h3>
                <div className="about-team-container">
                  <div className="about-team-row-1">
                    <h4>Speciality</h4>
                    <div>Orthodontics</div>
                  </div>
                  <div className="about-team-row-2">
                    <h4>Degree</h4>
                    <div>
                      Akdenız Unıveristy, School of Dentistry – Orthodontics
                      (PhD) – Istanbul University, School of Dentistry (DDS)
                    </div>
                  </div>
                  <div className="about-team-row-3">
                    <h4>Training</h4>
                    <div>
                      Class I, II and III Malocclusion / Rapid Maxillary
                      Expansion-Alt RAMEC / Temporary Anchorage Devices /
                      Titanium Miniplates / Orthognatic Surgery / Accelariting
                      Orthodontic Tooth Movement / Clear Aligners (Invisalign)
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-team-wrap">
                <h3 className="about-team-header">Beyza Ballı Akgöl</h3>
                <div className="about-team-container">
                  <div className="about-team-row-1">
                    <h4>Speciality</h4>
                    <div>Pedodontics</div>
                  </div>
                  <div className="about-team-row-2">
                    <h4>Degree</h4>
                    <div>
                      İstanbul University School of Dentistry / İstanbul
                      University Department of Pediatric Dentistry
                    </div>
                  </div>
                  <div className="about-team-row-3">
                    <h4>Training</h4>
                    <div>
                      Preventive Applications / Fissur Sealents / Flouride
                      Application / Extraction / Fillings / Vital Pulp
                      Treatments / Root Canal Treatment of Vital and Devital
                      Teeth / Dental Trauma Treatment / Space Mainteners /
                      Pediatric Crowns / Dental Treatment Under Sedation and
                      General Anesthesia
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-team-wrap">
                <h3 className="about-team-header">Ramazan Köymen</h3>
                <div className="about-team-container">
                  <div className="about-team-row-1">
                    <h4>Speciality</h4>
                    <div>Oral and Facial Surgery, Professor</div>
                  </div>
                  <div className="about-team-row-2">
                    <h4>Degree</h4>
                    <div>
                      Gazi University, School of Dentistry Center of Dental
                      Sciences of Gülhane Military Medical Academy Department of
                      Oral and Facial Surgery
                    </div>
                  </div>
                  <div className="about-team-row-3">
                    <h4>Training</h4>
                    <div>
                      Dental İmplants / Minimally invasive implant applications
                      / Asymmetries in the jaws and Orthognathic Surgery /
                      Temporamandibular joint disorders and treatments /
                      Treatments of jaw fractures / Jaw cysts and treatments /
                      preprosthetic surgery treatments / Nerve injuries and
                      treatments
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-team-wrap">
                <h3 className="about-team-header">Kerem Yılmaz</h3>
                <div className="about-team-container">
                  <div className="about-team-row-1">
                    <h4>Speciality</h4>
                    <div>Prosthodontics</div>
                  </div>
                  <div className="about-team-row-2">
                    <h4>Degree</h4>
                    <div>
                      Gazi University, School of Dentistry / Ankara University,
                      School of Dentistry – Department of Prosthodontics
                    </div>
                  </div>
                  <div className="about-team-row-3">
                    <h4>Training</h4>
                    <div>
                      Aesthetic Dentistry / Implant Dentistry / removable and
                      fixed Prostheses, All-Ceramic / Metal based ceramic /
                      Laminate / Inlay-Onlay / Partial Adhesive Fiber and Post
                      Core Based Prosthetic Crown and Bridges / Smile Design /
                      Treatment of Abraded Teeth / Occlusal Splints / Soft and
                      Hard Liner Applications, CAD/CAM Prostheses / Overdentures
                      / Telescopic Prostheses.
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-team-wrap">
                <h3 className="about-team-header">Seher KAYA</h3>
                <div className="about-team-container">
                  <div className="about-team-row-1">
                    <h4>Speciality</h4>
                    <div>Restorative and Operative Dentistry</div>
                  </div>
                  <div className="about-team-row-2">
                    <h4>Degree</h4>
                    <div>
                      Süleyman Demirel University, School of Dentistry,
                      Cumhuriyet University, School of Dentistry, Department of
                      Restorative and Operative Dentistry
                    </div>
                  </div>
                  <div className="about-team-row-3">
                    <h4>Training</h4>
                    <div>
                      Aesthetic Dentistry / Bleaching / Composite Restorations
                      Fillings / Composite Laminate Veneers / Ceramic Laminate
                      Veneers / Smile Desingn / Inley – Onley / Root Canal
                      Treatmen
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-container-3">
            <div className="about-header">OUR TECHNOLOGY</div>
            <div className="about-tech-wrap">
              <div className="about-tech-container">
                <div>Straumann</div>
                <div>3M</div>
                <div>Invisiling</div>
                <div>Vita</div>
                <div>E-max</div>
                <div>Zirconium</div>
                <div>Dentsply-Sirona</div>
                <div>Astra</div>
              </div>
              <div className="about-tech-container-2">
                <div className="tech-wrapper">
                  <div className="tech-container">
                    <h3>ORTHOPHOS SL 3D</h3>
                    <div>
                      Thanks to the DCS (Direct Conversion Sensor) technology,
                      which bypasses the light conversion and thus provides more
                      image information, unmatched sharp images are obtained.
                      The clear layer technology automatically adapts the
                      panoramic curve to the patient's anatomical features, thus
                      ensuring that the entire jaw always remains in the clear
                      layer.​
                    </div>
                  </div>
                </div>
                <div className="tech-wrapper">
                  <div className="tech-container">
                    <h3>ORTHOPHOS SL 2D</h3>
                    <div>
                      Automatic positioning with occlusal bite block and
                      intuitive EasyPad provides stability For Bitewing, sinus
                      or Cephalometry images, the left or right cephalometry
                      arms can optionally be adapted at any time.
                    </div>
                  </div>
                </div>
                <div className="tech-wrapper">
                  <div className="tech-container">
                    <h3>HELIODENT PLUS</h3>
                    <div>
                      The Heliodent Plus offers a versatile and intelligent unit
                      design that includes smart tools such as Sensors, imaging
                      plates or a media detector that provides the right
                      settings for the film without error, or different unit
                      control options to choose from.
                    </div>
                  </div>
                </div>
                <div className="tech-wrapper">
                  <div className="tech-container">
                    <h3>PERIAPICAL XRAY</h3>
                    <div>
                      Shows the entire crown and root of teeth, providing vital
                      information to help diagnose the most common dental
                      diseases; especially dental caries, periodontal bone loss
                      and gum disease. Additional important findings such as the
                      status of restorations, the presence of calculus or
                      tartar, impacted teeth, broken tooth fragments, and
                      variations in tooth and bone anatomy can be detected.
                    </div>
                  </div>
                </div>
                <div className="tech-wrapper">
                  <div className="tech-container">
                    <h3>SIRONA XIOS SCAN</h3>
                    <div>
                      Xios Scan works seamlessly with x-ray units and software
                      for a better, safer and faster intraoral diagnosis.
                    </div>
                  </div>
                </div>
                <div className="tech-wrapper">
                  <div className="tech-container">
                    <h3>3M ESPE ELİPAR</h3>
                    <div>
                      Thanks to the 3M Espe Elipar high-performance LED light
                      curing device, it ensures that our restorations -from the
                      center to the periphery and from the surface to the
                      cavitary bottoms- are performed in a deep and uniform
                      manner.
                    </div>
                  </div>
                </div>
                <div className="tech-wrapper">
                  <div className="tech-container">
                    <h3>SİROLASER BLUE</h3>
                    <div>
                      The 970-nm diode is used to reduce bacterial levels in the
                      fields of periodontology and endodontics. Satisfaction of
                      our patients is ensured as it enables uncomplicated
                      healing and reduces post-operative wound pain. It
                      generally eliminates the need for sutures, thus allowing
                      surgical wounds to heal mostly without scarring. Another
                      advantage it provides is that it can eliminate the need
                      for antibiotic use after endodontic, periodontitis or
                      surgical treatment.
                    </div>
                  </div>
                </div>
                <div className="tech-wrapper">
                  <div className="tech-container">
                    <h3>AIRFLOW</h3>
                    <div>
                      The Airflow tool cleans the black plaque on the tooth
                      surface with jet spray, allowing the tooth color to be
                      lighter by 1-2 tones. With this system, it is possible to
                      clean the most difficult areas. Cleans up to 10 mm,
                      including gingival pockets.
                    </div>
                  </div>
                </div>
                <div className="tech-wrapper">
                  <div className="tech-container">
                    <h3>SİRONA CEREC MC XL</h3>
                    <div>
                      The nLab MC XL is a fast wet milling and grinding unit
                      with many production options for the dental lab. It can
                      take advantage of high speed and precision, and perfect
                      products can be achieved in just a few steps.
                    </div>
                  </div>
                </div>
                <div className="tech-wrapper">
                  <div className="tech-container">
                    <h3>SIRONA INEOS X5</h3>
                    <div>
                      The next generation CAD/CAM scanner covers all
                      digitization tasks in the dental lab. It combines highly
                      accurate measurements in a very short time with the
                      versatility of working flexibility and new functions for
                      the dental laboratory.
                    </div>
                  </div>
                </div>
                <div className="tech-wrapper">
                  <div className="tech-container">
                    <h3>‘Zoom’ Tooth Whitening</h3>
                    <div>
                      Compared to other whitening methods, 'Zoom' teeth
                      whitening gives faster (within one hour) and more
                      effective results.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal hidden" ref={modal}>
        <div className="modal-btn-left" onClick={modalToLeft}>
          <Check ref={svgLeft} />
        </div>
        <div className="image-container" id="" ref={modalImage}></div>
        <button className="btn--close-modal" onClick={closeModal}>
          &times;
        </button>
        <div className="modal-btn-right" onClick={modalToRight}>
          <Check ref={svgRight} />
        </div>
        <div className="modal-num">{n} / 10</div>
      </div>
      <div className="overlay hidden" onClick={closeModal} ref={overlay}></div>
    </Fragment>
  );
};
export default AboutUs;
