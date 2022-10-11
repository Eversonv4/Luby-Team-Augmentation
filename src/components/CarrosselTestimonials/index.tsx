import React from "react";
import { Iframe } from "./styles";
import { Helmet } from "react-helmet";

export function CarrosselTestimonials() {
  return (
    <>
      <Helmet>
        <script
          src="https://widget.clutch.co/static/js/widget.js"
          async
        ></script>
      </Helmet>
      <div
        className="clutch-widget"
        data-url="https://widget.clutch.co"
        data-widget-type="4"
        data-height="auto"
        data-nofollow="true"
        data-expandifr="true"
        data-scale="100"
        data-reviews="1981829,1973220,1962997,1917262,1909639"
        data-clutchcompany-id="1748502"
        style={{
          transform: "scale(1)",
          marginBottom: "0px",
          transformOrigin: "0px 0px",
        }}
      >
        <Iframe
          id="iframe-0.8994833892171967"
          width="100%"
          src="https://widget.clutch.co/widgets/get/4?ref_domain=luby-team-augmentation.vercel.app&amp;uid=1748502&amp;rel_nofollow=true&amp;reviews=1981829%2C1973220%2C1962997%2C1917262%2C1909639&amp;ref_path=/"
          height="750px"
          scrolling="no"
          style={{
            border: "none",
            overflow: "hidden",
            display: "block",
          }}
          title="[iFrameSizer]iframe-0.8994833892171967:0:0:mouseleave:779:5324"
        ></Iframe>
      </div>
    </>
  );
}
