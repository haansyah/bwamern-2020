import React from "react";
import { Fade } from "react-reveal";
import CompletedIllustration from "assets/images/completed.png";

export default function Completed() {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center text-center">
          <div className="col-4">
            <img
              src={CompletedIllustration}
              alt="Completed checkout"
              className="img-fluid"
            />
            <p className="text-gray-500">
              Segera Lakukan Validasi Email anda agar kami dapat
              menginformasikan feed terupdate kami
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
