import Document, {Html, Head, Main, NextScript} from "next/document"

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="description" content="buy and sell your product"/>
                    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css" />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat&amp;display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>

        );
    }
}

export default MyDocument;