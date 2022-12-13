import React from 'react';
import Image from 'next/image';
import { contact } from '../../utils/content/index';
import { contactForm } from '../../utils/content/common';
import style from './ContactSection.module.scss';

function ContactSection() {
    return (
        <div className="section">
            <div className={style.container}>
                <h2>Contact</h2>
                <p className={style.subtitle}>Get in touch</p>
                <div className={style.contactContainer}>
                    <div className={style.info}>
                        <Image src='/svg/contact_svg.svg' height='350' width='350' alt='Contact'></Image>
                        <p>{contact}</p>
                        <div className={style.icons}>
                            <Image src='/icons/phone_icon.svg' height='35' width='35' alt='Phone'></Image>
                            <Image src='/icons/whatsapp_icon.svg' height='35' width='35' alt='Whatsapp'></Image>
                        </div>
                    </div>
                    <div className={style.mail}>
                        <form>
                            {contactForm.map((item) => (
                                <div key={item.name} className={style.formItem}>
                                    <label>{item.title}</label>
                                    <input type={item.type}></input>
                                </div>
                            ))}
                            <div className={style.formItem}>
                                <label>Message</label>
                                <textarea></textarea>
                            </div>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ContactSection;