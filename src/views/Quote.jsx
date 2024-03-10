import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { fetchQuotesAPI } from '@/network/quotes.api.js'
import { categoriesList } from '@/assets/scripts/quoteHelpers.js'
import '@/styles/views/Quote.scss'
import Spinner from '@/components/common/Spinner'
import Dropdown from '@/components/common/dropdown/Dropdown'
import Button from '@/components/common/Button'

const Quote = () => {

    const [fetchQuote, setFetchQuote] = useState(false)
    const [quoteCategory, setQuoteCategory] = useState(0)
    const [quote, setQuote] = useState(null)
    const [btnText, setBtnText] = useState('Random')
    const [isLoading, setIsLoading] = useState(false)

    const updateSelectedCategory = (id) => {
        setQuoteCategory(id)

        if(!id || id === 0) {
            setBtnText('Random')
        } else {
            const text = categoriesList.filter((category) => category.id === id)[0].text
            setBtnText(text.charAt(0).toUpperCase() + text.slice(1))
        }
    }

    useEffect(() => {
        if (!fetchQuote) return

        setIsLoading(true)
        setQuote(null)

        const targetCategory = quoteCategory ? categoriesList.filter((category) => category.id === quoteCategory)[0].text : null

        const fetchData = fetchQuotesAPI(targetCategory)
        
        fetch(fetchData.url, fetchData.data)
            .then((response) => response.json())
            .then((data) => {
                setQuote(data[0])
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setIsLoading(false)
            })

        setFetchQuote(false)
    }, [fetchQuote])

    return (
        <div
        id="Quote"
        key="quote"
        className="view-wrapper">

            <div className="main-wrapper">

                <Dropdown
                options={ categoriesList }
                selectedOption={ quoteCategory }
                placeholder="Select a category"
                updateSelected={ (ev) => updateSelectedCategory(ev) } />

                <div className="content-wrapper">
                    <AnimatePresence mode="wait">
                    {
                        isLoading &&
                            <motion.div
                            key="loader"
                            initial={{ translateY: "100%", opacity: 0 }}
                            animate={{ translateY: 0, opacity: 1 }}
                            exit={{ translateY: "100%", opacity: 0 }}
                            transition={{ duration: 0.1 }}>
                                <Spinner />
                            </motion.div>
                    }

                    {
                        (quote && !isLoading) &&
                            <motion.div
                            key="quote-wrapper"
                            className="quote-wrapper"
                            initial={{ translateX: "-100%", opacity: 0 }}
                            animate={{ translateX: 0, opacity: 1 }}
                            exit={{ translateX: "100%", opacity: 0 }}
                            transition={{ duration: 0.1 }}>
                                <p className="quote">{ quote.quote }</p>
                                <p className="author">{ `- ${quote.author}` }</p>
                            </motion.div>
                    }
                    </AnimatePresence>
                </div>

                <Button className="generate-btn" text={ `Generate ${btnText} Quote` } clicked={() => setFetchQuote(true)} />

            </div>

        </div>
    )
}

export default Quote