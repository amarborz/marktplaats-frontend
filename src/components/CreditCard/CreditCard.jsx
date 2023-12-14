import React, { useEffect, useState } from 'react'
import { Alert, Button, Container, Form } from 'react-bootstrap'

import './creditCard.css'

const CreditCard = () => {

    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('Name');
    const [expirationMonth, setExpirationMonth] = useState('MM');
    const [expirationYear, setExpirationYear] = useState('YYYY');
    const [cardCVV, setCardCVV] = useState('');

    const [maskedCardCVV, setMaskedCardCVV] = useState('');
    const [maskedCardNumber, setMaskedCardNumber] = useState('#### #### #### ####');

    const [creditCardClass, setCreditCardClass] = useState('');
    const [highlightClass, setHighlightClass] = useState('');

    const handleChangeMonth = (e) => {
        setExpirationMonth(e.target.value)
    }

    const handleChangeYear = (e) => {
        setExpirationYear(e.target.value)
    }

    const handleChangeCardNumber = (e) => {
        setCardNumber(e.target.value.slice(0, 16));

        const firstFourChars = e.target.value.slice(0, 4);
        setMaskedCardNumber(
            (firstFourChars
                + '*'.repeat(Math.max(0, e.target.value.length - 4))
                + '#'.repeat(Math.max(0, 16 - e.target.value.length))
            )
                .slice(0, 16)
                .replace(/(.{4})/g, '$1 ')

        )
    }

    const handleChangeCardHolder = (e) => {
        setCardHolder(e.target.value);
    }

    const handleChangeCVV = (e) => {
        setCardCVV(e.target.value.slice(0, 4))
        setMaskedCardCVV(Array(e.target.value.length + 1).join("*").slice(0, 4))
    }

    const handleSubmit = (e) => {
        console.log(e)
    }

    const handleFocus = (element) => {
        if (element == "number" || element == "holder" || element == "month" || element == "year" || element == "cvv_out") {
            setCreditCardClass("creditcard")
        } else if (element == "cvv") {
            setCreditCardClass("creditcard flip")
        }

        switch (element) {
            case "number":
                setHighlightClass("highlight__number")
                break;
            case "holder":
                setHighlightClass("highlight__holder")
                break;
            case "month":
                setHighlightClass("highlight__expire")
                break;
            case "year":
                setHighlightClass("highlight__expire")
                break;
            case "cvv":
                setHighlightClass("highlight__cvv")
                break;
            case "cvv_out":
                setHighlightClass("hidden")
                break;
            default:
                break;
        }

    }


    return <div className="creditCardContainer">

        <section id="creditcard" className={creditCardClass}>
            <div id="highlight" className={highlightClass}></div>
            <section className="card__front">
                <div className="card__header">
                    <div>CreditCard</div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" width="60" id="svg895" version="1.1"
                        viewBox="-96 -98.908 832 593.448">
                        <defs id="defs879">
                        </defs>
                        <path id="rect887" display="inline" fill="#ff5f00" strokeWidth="5.494"
                            d="M224.833 42.298h190.416v311.005H224.833z" />
                        <path id="path889"
                            d="M244.446 197.828a197.448 197.448 0 0175.54-155.475 197.777 197.777 0 100 311.004 197.448 197.448 0 01-75.54-155.53z"
                            fill="#eb001b" strokeWidth="5.494" />
                        <path id="path891"
                            d="M621.101 320.394v-6.372h2.747v-1.319h-6.537v1.319h2.582v6.373zm12.691 0v-7.69h-1.978l-2.307 5.493-2.308-5.494h-1.977v7.691h1.428v-5.823l2.143 5h1.483l2.143-5v5.823z"
                            className="e" fill="#f79e1b" strokeWidth="5.494" />
                        <path id="path893"
                            d="M640 197.828a197.777 197.777 0 01-320.015 155.474 197.777 197.777 0 000-311.004A197.777 197.777 0 01640 197.773z"
                            className="e" fill="#f79e1b" strokeWidth="5.494" />
                    </svg>
                </div>
                <div id="card_number" className="card__number">{maskedCardNumber}

                </div>
                <div className="card__footer">
                    <div className="card__holder">
                        <div className="card__section__title">Card Holder</div>
                        <div id="card_holder">{cardHolder}</div>
                    </div>
                    <div className="card__expires">
                        <div className="card__section__title">Expires</div>
                        <span id="card_expires_month">{expirationMonth}</span>/<span id="card_expires_year">{expirationYear}</span>
                    </div>
                </div>
            </section>
            <section className="card__back">
                <div className="card__hide_line"></div>

                <div className="card_cvv">
                    <span>CVV</span>
                    <div id="card_cvv_field" className="card_cvv_field">{maskedCardCVV}</div>
                </div>
            </section>
        </section>

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                    id='number'
                    required
                    type="number"
                    placeholder="Card number"
                    name="number"
                    value={cardNumber}
                    onChange={handleChangeCardNumber}
                    onFocus={() => handleFocus("number")}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Card Holder</Form.Label>
                <Form.Control
                    id='holder'
                    required
                    type="text"
                    placeholder="Card holder name"
                    name="holder"
                    onChange={handleChangeCardHolder}
                    onFocus={() => handleFocus("holder")}
                />
            </Form.Group>
            <div className="filed__group">
                <Form.Group>
                    <Form.Label >Expiration Date</Form.Label>
                    <div className="filed__date">
                        <Form.Control as="select"
                            id="expiration_month_select"
                            defaultValue="Month"
                            onChange={handleChangeMonth}
                            onFocus={() => handleFocus("month")}>

                            <option selected disabled>Month</option>
                            {Array.from({ length: 12 }, (_, index) => (
                                <option key={index + 1}>{String(index + 1).padStart(2, '0')}</option>
                            ))}
                        </Form.Control>

                        <Form.Control as="select"
                            id="expiration_year_select"
                            defaultValue="Year"
                            onChange={handleChangeYear}
                            onFocus={() => handleFocus("year")}>


                            <option selected disabled>Year</option>
                            {Array.from({ length: 10 }, (_, index) => (
                                <option key={index + 2023}>{index + 2023}</option>
                            ))}
                        </Form.Control>
                    </div>
                </Form.Group>

            </div>
            <Form.Group controlId="cvv">
                <Form.Label>CVV</Form.Label>
                <Form.Control type="number"
                    required
                    name="cvv_control"
                    value={cardCVV}
                    onChange={handleChangeCVV}
                    onFocus={() => handleFocus("cvv")}
                    onBlur={() => handleFocus("cvv_out")}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

    </div>
}

export default CreditCard
