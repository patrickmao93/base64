import React, { FC, ChangeEventHandler } from "react";
import { Tabs, Tab } from "@material-ui/core";

interface TabOption {
  key: string;
  label: string;
}

interface Props {
  tabs: TabOption[];
  value: string;
  onChange: ChangeEventHandler<{}>;
}

const EncodingTabs: FC<Props> = (props) => {
  const { tabs, value, onChange } = props;
  function a11yProps(index: any) {
    return {
      id: `encoding-tab-${index}`,
      "aria-controls": `encoding-tabpanel-${index}`,
    };
  }

  return (
    <Tabs
      value={value}
      onChange={onChange}
      indicatorColor="primary"
      textColor="primary"
      variant="fullWidth"
      aria-label="full width tabs example"
    >
      {tabs.map((tab) => (
        <Tab label={tab.label} {...a11yProps(tab.key)} />
      ))}
    </Tabs>
  );
};

export default EncodingTabs;
