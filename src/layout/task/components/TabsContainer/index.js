// Styles
import { MainContainer } from './style';
import { Tabs } from '../../../../ui/Tabs';
import { StyledTabPane } from '../../../../ui/Tabs/style';
import { useState, useEffect } from 'react';
import TimePiker from '../time_piker';
import WeekdayPicker from '../WeekdayPicker';

export const ContainerTabs = ({ selectedDays, setSelectedDays, setTimePikerData }) => {
  const newTabIndex = 0;

  const initialPanes = [
    { title: 'title1', content: 'Content of Tab 1', key: '1' },
    { title: 'title2', content: 'Content of Tab 2', key: '2' },
    {
      title: 'title3',
      content: 'Content of Tab 3',
      key: '3',
    },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const days = [
    { id: 1, name: "S", fullName: 'Sunday', active: false, },
    { id: 2, name: "M", fullName: 'Monday', active: false, },
    { id: 3, name: "T", fullName: 'Tuesday', active: false, },
    { id: 4, name: "W", fullName: 'Wednesady', active: false, },
    { id: 5, name: "T", fullName: 'Thursday', active: false, },
    { id: 6, name: "F", fullName: 'Friday', active: false, },
    { id: 7, name: "S", fullName: 'Saturday', active: false, }
  ]
const [state, setState] = useState({
  activeKey: initialPanes[0].key,
  panes: initialPanes,
});

  useEffect(() => {
    setSelectedDays(days)
  }, [days, setSelectedDays])


  const onChange = activeKey => {
    console.log(activeKey, 'activeKey');
    setState({ activeKey: activeKey, panes: initialPanes});
  };

  const onEdit = (targetKey, action) => {
    console.log(targetKey,action);
    if (action === 'remove') {
      const { panes, activeKey } = state;
    let newActiveKey = activeKey;
    let lastIndex;
    panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = panes.filter(pane => pane.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setState({
      panes: newPanes,
      activeKey: newActiveKey,
    });
    } 
    if (action === 'add') {
      const { panes } = state;
      const activeKey = `newTab${newTabIndex+1}`;
      const newPanes = [...panes];
      newPanes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
      setState({
        panes: newPanes,
        activeKey,
      });
    }
  };
    const { panes, activeKey } = state;
    return (
      <MainContainer>
        <Tabs
          type="editable-card"
          onChange={onChange}
          activeKey={activeKey}
          onEdit={onEdit}
        >
          {panes.map(pane => {
              // console.log(title);
            return (
              <StyledTabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                <TimePiker onChange={e => setTimePikerData(e)} />
                <WeekdayPicker days={days} setSelectedDays={setSelectedDays} selectedDays={selectedDays} />
            </StyledTabPane>
          )})}
        </Tabs>
      </MainContainer>
    );
  }
