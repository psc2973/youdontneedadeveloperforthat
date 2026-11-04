import { UniformText } from "@uniformdev/next-app-router/component";
import type { ComponentParameter, ComponentContext } from "@uniformdev/next-app-router/component";

type Props = {
  id: string;
  component: ComponentContext;
  eyebrow?: ComponentParameter<string>;
  title?: ComponentParameter<string>;
  intro?: ComponentParameter<string>;
};

export default function SectionHead({ id, component, eyebrow, title, intro }: Props) {
  return (
    <div className="section-head">
      <div>
        {eyebrow && <UniformText as="div" className="eyebrow" component={component} parameter={eyebrow} />}
        {title && <UniformText as="h2" id={id} component={component} parameter={title} />}
      </div>
      {intro && <UniformText as="p" component={component} parameter={intro} isMultiline />}
    </div>
  );
}
