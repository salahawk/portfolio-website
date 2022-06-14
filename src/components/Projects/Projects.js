import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import nodesquared from "../../Assets/Projects/nodesquared.png";
import nftlocker from "../../Assets/Projects/nftlocker.png";
import trillest from "../../Assets/Projects/trillest.png";
import defiswap from "../../Assets/Projects/defiswap.png";
import chadscanner from "../../Assets/Projects/chadscanner.png";
import degen from "../../Assets/Projects/degen.png";

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
              link="https://app.trillest.finance/"
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
              imgPath={chadscanner}
              isBlog={false}
              title="ChadScanner"
              description="Telegram Bot monitoring Uniswap to post a new alert for each new pair."
              link="https://t.me/chad_scanner_staging"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={degen}
              isBlog={false}
              title="DegenHounds"
              description="Betting game on Ethereum & Polygon. Winners can take double their deposit, and others lose all."
              link="https://www.degenhounds.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
