import { Input, Button, Center } from "@mantine/core";
import { IconBrandTwitter, IconDatabase, IconPlus } from "@tabler/icons";

export default () => {
  const styleObj = {
    width: 500,
    heigt: 200,
  };

  //change menu text.

  return (
    <div>
      <Center>
        <Input placeholder="Find a Project" style={styleObj} />
      </Center>
    </div>
  );
};

//May ignore the menu bar and implement the slider
