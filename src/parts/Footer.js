import React from "react";
import Button from "elements/Button";
import IconText from "./IconText";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{ width: 350 }}>
            <IconText />
            <p className="brand-tagline">
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Start Booking a Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payments">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/careers">
                  Our Careers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Condition
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  href="mailto:hansyah242@gmail.com"
                  type="link"
                >
                  hansyah242@gmail.com
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal href="tel:+6281299115053" type="link">
                  0812 - 9911 - 5053
                </Button>
              </li>
              <li className="list-group-item">
                <span>Staycation, Kemang, Jakarta.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row copyrights">
          <div className="col text-center ">
            Copyright 2020. All Rights Reserved, Staycation.
          </div>
        </div>
      </div>
    </footer>
  );
}
