import React from "react";
import { Helmet } from "react-helmet";
import {
  Box, SectionTitle, SubsectionTitle, Title, Checkbox, CheckboxGroup, Link, ListItem,
} from "@nulogy/components";
import Highlight from "react-highlight";
import {
  Layout, Intro, IntroText, DocSection, PropsTable,
} from "../../components";
import groupProps from "../../shared/groupProps";

export default () => (
  <Layout>
    <Helmet>
      <title>Checkbox</title>
    </Helmet>
    <Intro>
      <Title>Checkbox Group</Title>
      <IntroText>For wrapping checkboxes with a label and help text</IntroText>
    </Intro>
    <DocSection>

      <CheckboxGroup labelText="Setting Selection" name="settingSelection" helpText="Select a setting from the menu below:">
        <Checkbox value="a" labelText="Option A" />
        <Checkbox value="b" labelText="Option B" />
        <Checkbox value="c" labelText="Option C" />
      </CheckboxGroup>

      <Highlight className="js">
        {`import { Checkbox, CheckboxGroup } from @nulogy/components;

<CheckboxGroup
  name="settingSelection"
  labelText="Setting Selection"
  helpText="Select a setting from the menu below:"
>
  <Checkbox value="a" labelText="Option A" />
  <Checkbox value="b" labelText="Option B" />
  <Checkbox value="c" labelText="Option C" />
</CheckboxGroup>
`}
      </Highlight>
    </DocSection>

    <DocSection>
      <SectionTitle>Variations</SectionTitle>
      <Box mb="x6">
        <SubsectionTitle>With an error</SubsectionTitle>
        <CheckboxGroup labelText="Setting Selection" name="settingSelection" error="A selection must be selected" helpText="Select a setting from the menu below:">
          <Checkbox value="a" labelText="Option A" />
          <Checkbox value="b" labelText="Option B" />
          <Checkbox value="c" labelText="Option C" />
        </CheckboxGroup>

        <Highlight className="js">
          {`import { Checkbox, CheckboxGroup } from @nulogy/components;

<CheckboxGroup
  name="settingSelection"
  labelText="Setting Selection"
  helpText="Select a setting from the menu below:"
>
  <Checkbox value="a" labelText="Option A" />
  <Checkbox value="b" labelText="Option B" />
  <Checkbox value="c" labelText="Option C" />
</CheckboxGroup>
`}
        </Highlight>
      </Box>
    </DocSection>

    <DocSection>
      <SectionTitle>Props</SectionTitle>
      <PropsTable propsRows={ groupProps } />
    </DocSection>
    <DocSection>
      <SectionTitle>Resources</SectionTitle>
      <ListItem><Link href="https://storybook.nulogy.design/?selectedKind=CheckboxGroup">View in Storybook</Link></ListItem>
    </DocSection>
    <DocSection>
      <SectionTitle>Related components</SectionTitle>
      <ListItem><Link href="/components/checkbox">Checkbox</Link></ListItem>
    </DocSection>
  </Layout>
);