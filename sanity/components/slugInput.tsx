import { Box, Flex, Text } from "@sanity/ui";
import React from "react";

export const SlugInput = (props: any) => {
  return (
    <Flex style={{ alignItems: "center" }}>
      <Text
        style={{
          paddingRight: "0.4em",
          fontSize: "13px",
          color: "#6E7683",
        }}
      >
        psykologkungsholmen.se/
      </Text>
      <Box style={{ flex: 1 }}>{props.renderDefault({ ...props })}</Box>
    </Flex>
  );
};

export default SlugInput;
