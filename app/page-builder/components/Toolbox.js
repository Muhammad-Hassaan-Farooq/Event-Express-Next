import { Element, useEditor } from "@craftjs/core";
import { Button } from "./Button";
import { Text } from "./Text";
import { Container } from "./Container";
import { Card } from "./Card";

export const Toolbox = () => {
  const { connectors, query } = useEditor();
  return (
    <div className="p-3">
      <div className="mb-3 text-center">
        <h5>Drag to add</h5>
      </div>
      <div className="d-flex flex-column align-items-center">
        <button
          ref={(ref) =>
            connectors.create(ref, <Button text="Click me" size="small" />)
          }
          className="btn btn-primary mb-2"
        >
          Button
        </button>
        <button
          ref={(ref) => connectors.create(ref, <Text text="Hi world" />)}
          className="btn btn-primary mb-2"
        >
          Text
        </button>
        <button
          ref={(ref) =>
            connectors.create(
              ref,
              <Element is={Container} padding={20} canvas />
            )
          }
          className="btn btn-primary mb-2"
        >
          Container
        </button>
        <button
          ref={(ref) => connectors.create(ref, <Card />)}
          className="btn btn-primary mb-2"
        >
          Card
        </button>
      </div>
    </div>
  );
};
