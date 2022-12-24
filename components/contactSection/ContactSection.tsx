import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { contact } from '../../utils/content/index';
import { contactForm } from '../../utils/content/common';
import { phoneCallHref, whatsAppHref } from '../../utils/content/hrefs';
import emailjs from '@emailjs/browser';
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
            emailjs.sendForm(`${process.env.NEXT_PUBLIC_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`, form.current, `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`)
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
                        <Image src='/svg/contact_svg.svg' height='350' width='350' alt='Contact'></Image>
                        <p>{contact}</p>
                        <div className={style.icons}>
                            <a href={phoneCallHref}>
                                <Image src='/icons/phone_icon.svg' height='35' width='35' alt='Phone'></Image>
                            </a>
                            <a href={whatsAppHref} target='_blank' rel="noreferrer">
                                <Image src='/icons/whatsapp_icon.svg' height='35' width='35' alt='Whatsapp'></Image>
                            </a>
                        </div>
                    </div>
                    <div className={style.mail}>
                        <form method="post" ref={form} onSubmit={handleOnSubmit}>
                            {contactForm.map((item) => (
                                <div key={item.name} className={style.formItem}>
                                    <label>{item.title}</label>
                                    <input type={item.type} name={item.name} required></input>
                                </div>
                            ))}
                            <div className={style.formItem}>
                                <label>Message</label>
                                <textarea name='message' required></textarea>
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
