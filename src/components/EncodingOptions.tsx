import React, { FC, ChangeEvent } from "react";
import { Tabs, Tab, makeStyles } from "@material-ui/core";
import clsx from "clsx";

interface Props {
  tabs: string[];
  selected: string;
  className: string;
  onChange: (event: ChangeEvent<{}>, newValue: string) => void;
}

const useStyles = makeStyles((theme) => {
  return {
    tab: {
      minWidth: 100,
    },
  };
});

const EncodingOptions: FC<Props> = (props) => {
  const { tabs, selected, className, onChange } = props;
  const styles = useStyles();

  function a11yProps(index: any) {
    return {
      id: `encoding-tab-${index}`,
      "aria-controls": `encoding-tabpanel-${index}`,
    };
  }

  return (
    <div className={className}>
      <Tabs value={selected} onChange={onChange} indicatorColor="primary">
        {tabs.map((tab) => (
          <Tab className={styles.tab} label={tab.toUpperCase()} {...a11yProps(tab)} value={tab} />
        ))}
      </Tabs>
    </div>
  );
};

export default EncodingOptions;
