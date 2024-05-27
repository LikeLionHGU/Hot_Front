import React from "react";
import styled from "styled-components";

const FadeInSection = styled.div`
  opacity: 0;
  transform: translateY(10vh);
  visibility: hidden;
  transition: opacity 2000ms ease-out, transform 1000ms ease-out,
    visibility 2000ms ease-out;
  will-change: opacity, transform, visibility;

  &.is-visible {
    opacity: 1;
    transform: none;
    visibility: visible;
  }
`;

function About_fadin(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);

    // Clean up the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <FadeInSection className={isVisible ? "is-visible" : ""} ref={domRef}>
      {props.children}
    </FadeInSection>
  );
}

export default About_fadin;
