import Link from "next/link"

export default function Breadcrumb3({ backgroundImage }) {
    const backgroundImageStyle = backgroundImage ? `url(${backgroundImage})` : `url(/images/backgrounds/page-header-bg-1-1.jpg)`
    return (
        <>
            {/*Page Header Start*/}
            <section className="page-header">
                <div
                    className="page-header__bg"
                    style={{
                        backgroundImage: backgroundImageStyle
                    }}
                ></div>
                <div className="container">
                    <div className="page-header__inner">


                    </div>
                </div>
            </section>
            {/*Page Header End*/}

        </>
    )
}
