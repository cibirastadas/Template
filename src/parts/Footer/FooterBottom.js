import React from "react";
import "./FooterBottom.scss";
const FooterBottom = () => {
  return (
    <div className="footer-bottom pt-5">
      <p className="pb-3">
        Copyright {new Date().getFullYear()}{" "}
        <span className="team-corporation-text">4Team Corporation.</span> All
        rights reserved
      </p>
      <p>
        Microsoft and the Office logo are registered trademarks of Microsoft
        Corporation in the United States and/or other countries. Apple and the
        iPhone, iCloud, iTunes logos are registered trademarks of Apple Inc. In
        the United States and/or other countries. Google and the Google
        Calendar, Google Contacts, Google Tasks logos are registered trademarks
        of Google LLC. In the United States and/or other countries.
      </p>
      {/*       <div
        class="fb-like"
        data-href="https://developers.facebook.com/docs/plugins/"
        data-width=""
        data-layout="button_count"
        data-action="recommend"
        data-size="small"
        data-share="true"
      ></div> */}
    </div>
  );
};

export default FooterBottom;
