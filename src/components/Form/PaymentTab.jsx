import React, { useState } from 'react'

const PaymentTab = ({ content, active = 0 }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabsData, setTabsData] = useState(0);

  const useEffect = (() => {
    let data = [];

    React.content.forEach(content, element => {
      if(!React.isValidElement(element)) return;

      const {props: { tab, content }} = element;
      data.push({ tab, content });
    })

    setTabsData(data);
  }, [content])

  return (
    <div></div>
  )
}

const TabContent = ({content}) => {
  return {content}
}

PaymentTab.TabContent = TabContent;

export default PaymentTab