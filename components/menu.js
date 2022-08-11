import { Input, Button, Center } from "@mantine/core";
import { IconBrandTwitter, IconDatabase, IconPlus } from "@tabler/icons";

export default () => {
  const styleObj = {
    width: 800,
    heigt: 200,
  };

  return (
    <div>
      <Center>
        <Input placeholder="Find a Project" style={styleObj} />
      </Center>
    </div>
  );
};

//May ignore the menu bar and implement the slider
