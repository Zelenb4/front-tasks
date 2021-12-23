import styled from 'styled-components';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

export const StyledTabs = styled(Tabs)`
  display: flex;
  width: 100%;
  padding: 20px;
  flex-direction: column;
  .ant-tabs-nav { 
    margin-bottom: 10px;
  }
  [class="ant-tabs-tab ant-tabs-tab-with-remove"] {
    margin-right: 10px;
    button {
      display: none;
    }
  }
  .ant-tabs-content-holder {
    background: gainsboro;
    border: 1px solid;
    padding: 20px
  }
  .ant-tabs-nav-list { 
    display: flex;
    flex-direction: row;
  }
  [class="ant-tabs-tab ant-tabs-tab-with-remove ant-tabs-tab-active"] {
    display: flex;
    height: 20px;
    margin-right: 10px;
    border-bottom: 2px solid #828282;
    button {
      display: none;
    }
  } 
  [class="ant-tabs-tab ant-tabs-tab-with-remove"] {
    display: flex;
    height: 20px;
  }
  [class="ant-tabs-nav-operations ant-tabs-nav-operations-hidden"] {
      display: none;
  }
`;
export const StyledTabPane = styled(TabPane)``;
