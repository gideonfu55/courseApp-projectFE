import React, { useState } from 'react'

const Tab = ({ title, tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const activeTab = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div className='Tab'>
      {title && <h4 className='title'>{title}</h4>}
      <div className='body'>
        {Object.keys(tabs).length === 0
          ? (<div>No Tabs</div>) 
          : (
          <div>
            <div className='tabs'>
              {tabs.map((tab, index) => (
                <label
                  key={index}
                  className={index === activeTabIndex ? "active-tab" : "tab"}
                  onClick={() => activeTab(index)}
                >
                  {tab.name}
                </label>
              ))}
            </div>
            <div className='content'>
              {tabs[activeTabIndex].content}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tab