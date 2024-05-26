"use client";
import { Container } from "./components/Container";
import { Card } from "./components/Card";
import { Toolbox } from "./components/Toolbox";
import { SettingsPanel } from "./components/SettingsPanel";
import { Topbar } from "./components/Topbar";
import { Editor, Frame, Element } from "@craftjs/core";
import { Button } from "./components/Button";
import { Text } from "./components/Text";

export default function page() {
  return (
    <div className="container" style={{ margin: "0 auto", maxWidth: "800px" }}>
      <h5 className="text-center">A super simple page editor</h5>
      <Editor resolver={{ Card, Container, Button, Text }}>
        <div className="row mt-3">
          <div className="col-12">
            <Topbar />
          </div>
          <div className="col">
            <Frame>
              <Element is={Container} padding={5} background="#eee" canvas>
                <Card />

                <Element
                  is={Button}
                  size="small"
                  variant="contained"
                  color="primary"
                ></Element>
              </Element>
            </Frame>
          </div>
          <div className="col-3">
            <div className="card p-3">
              <Toolbox />
              <SettingsPanel />
            </div>
          </div>
        </div>
      </Editor>
    </div>
  );
}
