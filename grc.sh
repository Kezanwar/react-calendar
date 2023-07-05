#* GENERATE A COMPONENT

#*--- USAGE
#* bash grc.sh {directory} {yourcomponent}

#* $1 = directory - should be lowercase, will be converted to uppercase first where needed
#* $2 = component - should be capital/camelcase inline with react component 


# create component folder/file structure in src/components

mkdir src/components/$1/$2 # make new directory in components
touch src/components/$1/$2/$2.tsx # make component.tsx
touch src/components/$1/$2/index.ts # make index.ts
touch src/components/$1/$2/$2.stories.ts # make component.stories.ts



# ----- component.tsx ------ create starter functional component

echo "import React from 'react';

type Props = {};

const ${2}: React.FC<Props> = (props) => {
  return <div className='${2}'>${2}</div>;
};

export default ${2}; " >  src/components/$1/$2/$2.tsx



# ------ index.ts ------- create default export 

echo "import ${2} from './${2}';

export { ${2} }" >  src/components/$1/$2/index.ts



# ------ component.stories.ts ------- add basic storybook configuration 

echo "import type { Meta, StoryObj } from '@storybook/react';

import { ${2} } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'components/${1}/${2}',
  component: ${2},
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof ${2}>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {}
};
" > src/components/$1/$2/$2.stories.ts