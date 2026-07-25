import "../style/ContactMap.css";
import Reveal from "./Reveal";
import { MapPinned } from "lucide-react";

export default function ContactMap() {
  return (
    <section className="contact-map">

      <div className="container">

        <Reveal>

          <div className="contact-map-header">

            <span className="contact-map-tag">
              FIND US
            </span>

            <h2>
              Visit Our
              <span> Office</span>
            </h2>

            <p>
              Although we work with businesses across Canada and around the
              world, we're always happy to connect from our office location.
            </p>

          </div>

        </Reveal>

        <Reveal>

          <div className="map-wrapper">

            <div className="map-title">

              <MapPinned size={22} />

              <span>
                Toronto, Ontario, Canada
              </span>

            </div>

            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Toronto,Ontario,Canada&output=embed"
              loading="lazy"
              allowFullScreen
            ></iframe>

          </div>

        </Reveal>

      </div>

    </section>
  );
}