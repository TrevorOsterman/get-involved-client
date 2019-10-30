import React from "react";
import BackButton from "../BackButton/BackButton";
import "./About.css";

export default function About() {
  return (
    <div>
      <section className="about">
        <p>
          <b>getInvolved</b> is web app with a focus on bringing communities
          together and giving back. it aims to serve as a platform for people
          who want to know how they can take action <i>now</i> and where to do
          it.
        </p>
        <p>
          the app is a current work in progress by an aspiring developer named{" "}
          <a
            className="github-link"
            target="_blank"
            href="http://www.github.com/TrevorOsterman"
          >
            <b>trevor osterman</b>
          </a>
          . the app currently lacks restrictive permissions so as it stands
          anyone can create and delete data. so if this ends up being used for
          anything...
          <br />
          please don't be a jerk.
        </p>
        <BackButton />
      </section>
    </div>
  );
}
