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
    const [openId, setOpenId] = useState<number | null>(null);

    const toogleActive = (id: number) => {
        if (id === openId) setOpenId(null);
        else setOpenId(id);
    };

    return (
        <>
            <div className={cl.line} />
            <ul className={cl.accordion}>
                {info.map((faqItem, id) => {
                    return (
                        <li key={id} className={cl.item}>
                            <div
                                className={cl.content}
                                onClick={() => toogleActive(id)}
                            >
                                <div className={cl.main}>{faqItem.title}</div>
                                <div
                                    className={`${cl.rotate} ${openId === id ? cl.exit : ''}`}
                                >
                                    <div className={cl.faq_info} />
                                </div>
                            </div>
                            <div
                                className={`${cl.collapse} ${openId === id ? cl.open : ''}`}
                            >
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