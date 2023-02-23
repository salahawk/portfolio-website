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
import cgAfrica from "../../Assets/Projects/cgAfrica.png";
import portfolder from "../../Assets/Projects/portfolder.png";
import picknmelt from "../../Assets/Projects/picknmelt.png";
import audi0 from "../../Assets/Projects/audi0.png";
import folkichain from "../../Assets/Projects/folkichain.jpg";
import digitalcurrency from "../../Assets/Projects/digitalcurrency.png";
import smolrunners from "../../Assets/Projects/smolrunners.png";
import searchbook from "../../Assets/Projects/search-book-online.png";

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
              imgPath={digitalcurrency}
              isBlog={false}
              title="Top Digital Currencies"
              description="Trending coins, coins' price and transactions"
              link="https://salahawk.github.io/digital-currency/"
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
              imgPath={searchbook}
              isBlog={false}
              title="Online Book Store"
              description="Search books online by title"
              link="https://book-search-online.netlify.app/"
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cgAfrica}
              isBlog={false}
              title="CGAfrica"
              description="The leading online animation community in Africa connecting professionals together in a collaborative environment."
              link="https://cgafrica.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolder}
              isBlog={false}
              title="PortFolder"
              description="An SNS service that allows creators to divide posts into folders and publish them (iOS, Android, Web)."
              link="https://portfolder.jp/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={picknmelt}
              isBlog={false}
              title="Pick n Melt"
              description="Highly scented (or unscented) soy candles, wax melts, diffusers and sprays. Over 500 scents to pick from! All products are hand made by our quirky team in Gosport, UK."
              link="https://picknmelt.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={audi0}
              isBlog={false}
              title="Audi0"
              description="Art / Music NFT store with crypto mayment integrated by Athar"
              link="https://audi0.agency/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={folkichain}
              isBlog={false}
              title="FolkiChain Swap"
              description="Folkichain token targeted DEX / AMM - forked Uniswap"
              link="https://flokichainerc.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smolrunners}
              isBlog={false}
              title="SmolRunners"
              description="NFT minting Dapp on Flow blockchain"
              link="https://flow-nft.netlify.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
