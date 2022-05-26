import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import nodesquared from "../../Assets/Projects/nodesquared.png";
import nftlocker from "../../Assets/Projects/nftlocker.png";
import trillest from "../../Assets/Projects/trillest.png";
import defiswap from "../../Assets/Projects/defiswap.png";
import deopp from "../../Assets/Projects/deopp.png";
import estoken from "../../Assets/Projects/estoken.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nodesquared}
              isBlog={false}
              title="Node Squared"
              description="Node Squared aims to acquire as many Strongblock Nodes as possible, and distribute the revenue back to token holders through buy back and burns on ETH & AVA."
              link="https://dashboard.nodesquared.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nftlocker}
              isBlog={false}
              title="NFT Locker"
              description="First NFT marketplaces for Top College Athletes"
              link="https://nftlocker.io/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trillest}
              isBlog={false}
              title="Trillest"
              description="Collection of 3 unique Trillest Nodes backed by $TRILL"
              link="https://nftlocker.io/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={defiswap}
              isBlog={false}
              title="DefiSwap"
              description="DEX platform just like Uniswap, Pancakeswap running on BSC"
              link="https://defiswap.io/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deopp}
              isBlog={false}
              title="DEOPP"
              description="The Decentralized Empowerment Of Prospering People"
              link="https://defiswap.io/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={estoken}
              isBlog={false}
              title="ESToken"
              description="A P2P digital currency that enables you to send and receive funds at a lower cost due to its fully decentralised blockchain system"
              link="https://estt.io/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
