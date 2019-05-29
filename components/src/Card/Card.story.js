import React from "react";
import { storiesOf } from "@storybook/react";
import { Box } from "../Box";
import { Flex } from "../Flex";
import { Text, SubsectionTitle } from "../Type";
import { Card, CardSet, CPCard } from ".";
import { Link } from "../Link";
import { Icon } from "../Icon";

import { DropdownMenu, DropdownButton } from "../DropdownMenu";

storiesOf("Card", module)
  .add("Card", () => <Card>I am a card.</Card>)
  .add("Custom card", () => (
    <>
      <Box borderRadius="medium" p="x2" bg="#0080591f" borderLeft="4px solid #008059" mb="x2">
        <Flex style={{ position: "relative" }}>
          <Box mr="x1">
            <Icon size="32" icon="check" color="#008059" />
          </Box>
          <Box mt="4px" mb="4px">
            <Text mt="0" fontWeight="bold">
              Alert title
            </Text>
            <Text>
              I am an alert. You can <Link color="black">do something about it</Link>.
            </Text>
          </Box>
          <Icon icon="close" size="16" style={{ position: "absolute", top: "8px", right: "8px" }} />
        </Flex>
      </Box>
      <Box
        width="400px"
        borderRadius="small"
        boxShadow="small"
        p="x2"
        bg="#0080591f"
        borderLeft="4px solid #008059"
        mb="x2"
      >
        <Flex style={{ position: "relative" }}>
          <Box width="32px">
            <Icon icon="error" color="#008059" />
          </Box>
          <Box>
            <Text mt="0" fontWeight="bold">
              Alert title
            </Text>
            <Text>
              I am an alert. You can <Link color="black">do something about it</Link>.
            </Text>
          </Box>
          <Icon icon="close" size="16" style={{ position: "absolute", top: "0px", right: "0px" }} />
        </Flex>
      </Box>
      <Box p="x2" bg="lightBlue" borderLeft="4px solid #216BEB" mb="x2">
        <Text mt="0" fontWeight="bold">
          Alert title
        </Text>
        <Text>I am an alert.</Text>
      </Box>
      <Box p="x2" bg="#cc14392e" borderLeft="4px solid #cc1439" mb="x2">
        <Text mt="0" fontWeight="bold">
          Alert title
        </Text>
        <Text>I am an alert.</Text>
      </Box>
      <Box p="x2" bg="#ffbb004f" borderLeft="4px solid #cc14392e">
        <Text mt="0" fontWeight="bold">
          Alert title
        </Text>
        <Text>I am an alert.</Text>
      </Box>
    </>
  ))
  .add("Cardset", () => (
    <CardSet>
      <Card>I am a 1st card in a cardset.</Card>
      <Card>I am a 2nd card in a cardset.</Card>
      <Card>I am a 3rd card in a cardset.</Card>
    </CardSet>
  ))
  .add("Capacity Planing Cardset", () => (
    <CardSet>
      <CPCard>
        <SubsectionTitle mr="x4">Title</SubsectionTitle>
        <DropdownMenu>
          <DropdownButton>Dropdown Item</DropdownButton>
          <DropdownButton>Dropdown Item</DropdownButton>
        </DropdownMenu>
        <Flex justifyContent="space-between">
          <Box mr="x3">
            <Text>Item: Some item</Text>
            <Text>Quantity: 746.00 ea</Text>
          </Box>
          <Box>
            <Text textAlign="right">Due: Jun2 24, 2019</Text>
            <Text textAlign="right">12:00 pm</Text>
          </Box>
        </Flex>
      </CPCard>
      <CPCard>
        <SubsectionTitle mr="x4">Title</SubsectionTitle>
        <DropdownMenu>
          <DropdownButton>Dropdown Item</DropdownButton>
          <DropdownButton>Dropdown Item</DropdownButton>
        </DropdownMenu>
        <Flex justifyContent="space-between">
          <Box mr="x3">
            <Text>Item: Some item</Text>
            <Text>Quantity: 746.00 ea</Text>
          </Box>
          <Box>
            <Text textAlign="right">Due: Jun2 24, 2019</Text>
            <Text textAlign="right">12:00 pm</Text>
          </Box>
        </Flex>
      </CPCard>
    </CardSet>
  ));
