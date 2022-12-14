import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { contact } from '../../utils/content/index';
import { contactForm } from '../../utils/content/common';
import { phoneCallHref, whatsAppHref } from '../../utils/content/hrefs';
import emailjs from '@emailjs/browser';
import contactSvg from 'public/svg/contact_svg.svg';
import phoneSvg from 'public/icons/phone_icon.svg';
import whatsappSvg from 'public/icons/whatsapp_icon.svg';
import style from './ContactSection.module.scss';

function ContactSection() {
    const form: any = useRef();
    const [isSent, setIsSent] = useState(false);

    const handleOnSubmit = (event: any) => {
        event.preventDefault();
        let valid = true;

        Array.from(form.current).map((input: any) => {
            if (!input.name)
                return;
            if (!input.value) {
                valid = false;
                return;
            }

        })

        if (valid && !isSent) {
            emailjs.sendForm('service_psqi29t', 'template_2ngb19p', form.current, '8ZO6v1R_2CH9lLhpJ')
                .then((result) => {
                    console.log(result.text);
                    setIsSent(true);
                    event.target.reset();
                }, (error) => {
                    console.log(error.text);
                });
        }

    }

    return (
        <div className="section" id="contact">
            <div className={style.container}>
                <h2>Contact</h2>
                <p className={style.subtitle}>Get in touch</p>
                <div className={style.contactContainer}>
                    <div className={style.info}>
                        <Image src={contactSvg} height='350' width='350' alt='Contact'></Image>
                        <p>{contact}</p>
                        <div className={style.icons}>
                            <a href={phoneCallHref}>
                                <Image src={phoneSvg} height='35' width='35' alt='Phone'></Image>
                            </a>
                            <a href={whatsAppHref} target='_blank' rel="noreferrer">
                                <Image src={whatsappSvg} height='35' width='35' alt='Whatsapp'></Image>
                            </a>
                        </div>
                    </div>
                    <div className={style.mail}>
                        <form method="post" ref={form} onSubmit={handleOnSubmit}>
                            {contactForm.map((item) => (
                                <div key={item.name} className={style.formItem}>
                                    <label htmlFor={item.name}>{item.title}</label>
                                    <input id={item.name} type={item.type} name={item.name} required></input>
                                </div>
                            ))}
                            <div className={style.formItem}>
                                <label htmlFor='message'>Message</label>
                                <textarea id="message" name='message' required></textarea>
                            </div>
                            <button type="submit" data-sent={isSent}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ContactSection;
