import React, { useState } from 'react';
import cl from './FaqInfo.module.css';

interface Info {
    info: InfoItem[];
}
interface InfoItem {
    title: string;
    text: string;
}

export const FaqInfo: React.FC<Info> = ({ info }) => {
    const [openIds, setOpenIds] = useState<number[]>([]);
    const toggleActive = (id: number) => {
      if (openIds.includes(id)) {
        setOpenIds(openIds.filter(openId => openId !== id));
      } else {
        setOpenIds([...openIds, id]);
      }
    };
  
    return (
      <>
        <div className={cl.line} />
        <ul className={cl.accordion}>
          {info.map((faqItem, id) => {
            const isOpen = openIds.includes(id);
            return (
              <li key={id} className={cl.item}>
                <div
                  className={cl.content}
                  onClick={() => toggleActive(id)}
                >
                  <div className={cl.main}>{faqItem.title}</div>
                  <div className={`${cl.rotate} ${isOpen ? cl.exit : ''}`}>
                    <div className={cl.faq_info} />
                  </div>
                </div>
                <div className={`${cl.collapse} ${isOpen ? cl.open : ''}`}>
                  <div className={cl.text}>{faqItem.text}</div>
                </div>
                <div className={cl.line} />
              </li>
            );
          })}
        </ul>
      </>
    );
  };