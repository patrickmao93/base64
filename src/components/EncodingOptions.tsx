import React, { FC, ChangeEvent } from "react";
import { Tabs, Tab, makeStyles } from "@material-ui/core";

interface Props {
  tabs: string[];
  selected: string;
  onChange: (event: ChangeEvent<{}>, newValue: number) => void;
}

const useStyles = makeStyles((theme) => {
  return {
    wrapper: {
      flexGrow: 1,
    },
    tab: {
      minWidth: 100,
    },
  };
});

const EncodingOptions: FC<Props> = (props) => {
  const { tabs, selected, onChange } = props;
  const styles = useStyles();

  function a11yProps(index: any) {
    return {
      id: `encoding-tab-${index}`,
      "aria-controls": `encoding-tabpanel-${index}`,
    };
  }

  return (
    <div className={styles.wrapper}>
      <Tabs value={selected} onChange={onChange} indicatorColor="primary">
        {tabs.map((tab) => (
          <Tab className={styles.tab} label={tab.toUpperCase()} {...a11yProps(tab)} value={tab} />
        ))}
      </Tabs>
    </div>
  );
};

export default EncodingOptions;
