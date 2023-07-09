import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import nodesquared from "../../Assets/Projects/nodesquared.png";
import nftlocker from "../../Assets/Projects/nftlocker.png";
import trillest from "../../Assets/Projects/trillest.png";
import defiswap from "../../Assets/Projects/defiswap.png";
import portfolder from "../../Assets/Projects/portfolder.png";
import flokichain from "../../Assets/Projects/flokichain.jpg";
import digitalcurrency from "../../Assets/Projects/digitalcurrency.png";
import smolrunners from "../../Assets/Projects/smolrunners.png";
import chatgptdiscord from "../../Assets/Projects/chatgpt-discord.png";
import bitapai from "../../Assets/Projects/bitapai.png";

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
              imgPath={bitapai}
              isBlog={false}
              title="BitAPAI"
              description="API access to the Bittensor Network (Prompt + Benchmark). Through BitAPAI keys you can access the Bittensor prompting network through many common languages such as Python, Node.js, cURL, Dart, Golang, oCaml, PHP, R, Rust & Swift."
              link="https://bitapai.io"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatgptdiscord}
              isBlog={false}
              title="ChatGPT Discord Bot"
              description="Discord bot using ChatGPT by OpenAI for virtual assistance"
              link="https://discord.gg/kEX5GjHW"
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
              imgPath={portfolder}
              isBlog={false}
              title="PortFolder"
              description="An SNS service that allows creators to divide posts into folders and publish them (iOS, Android, Web)."
              link="https://portfolder.jp/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flokichain}
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
