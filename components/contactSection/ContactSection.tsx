import React, { useRef } from 'react';
import Image from 'next/image';
import { contact } from '../../utils/content/index';
import { contactForm } from '../../utils/content/common';
import emailjs from '@emailjs/browser';
import style from './ContactSection.module.scss';

//TODO: Email validation + show when the mail sent + whatsapp + call

function ContactSection() {
    const form: any = useRef();

    const handleOnSubmit = (event: any) => {
        event.preventDefault();


        emailjs.sendForm(`${process.env.NEXT_PUBLIC_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`, form.current, `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`)
            .then((result) => {
                console.log(result.text);
                event.target.reset();
            }, (error) => {
                console.log(error.text);
            });
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
                            <Image src='/icons/phone_icon.svg' height='35' width='35' alt='Phone'></Image>
                            <Image src='/icons/whatsapp_icon.svg' height='35' width='35' alt='Whatsapp'></Image>
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
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ContactSection;