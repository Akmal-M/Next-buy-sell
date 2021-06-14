import Document, {Html, Head, Main, NextScript} from "next/document"

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="description" content="buy and sell your product"/>
                    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css" />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat&amp;display=swap" rel="stylesheet"/>
                    <link rel="stylesheet" type="text/css" charSet="UTF-8"
                          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
                    <link rel="stylesheet" type="text/css"
                          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
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