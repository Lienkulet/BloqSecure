import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Team = () => {
    return (
        <div className='team'>
            <div className="team-heading">
                <h1>Making the Blockchain Accessible</h1>
                <div className='team-about'>
                    <h3>We are here to solve your grievances about a lot less users when compared to Web2.0 apps.</h3>
                    <p>
                        We provide an API solution that can shoot up your potential user pool to the number of people
                        with access to the internet. It can be easily integrated with any of your decentralized
                        applications on any blockchain and enable the end user to pay in fiat currency instead
                        of cryptocurrency.
                    </p>
                </div>
            </div>

            <div className="story">
                <div className="story-header">
                    <h1>Our Story</h1>
                </div>
                <div className="gap-30 flex-wrap">

                    <div className="story-block">
                        <h1>Our Mission</h1>
                        <p>
                            To revolutionize industries with cutting-edge blockchain-based SaaS solutions that enhance
                            security, transparency, and efficiency. We strive to empower businesses of all sizes with
                            state-of-the-art technology that enables them to harness the power of blockchain and achieve
                            their goals.
                        </p>
                    </div>
                    <div className="story-block">
                        <h1>Our Vision</h1>
                        <p>To become the leading provider of transparent and trustworthy blockchain-based SaaS solutions
                            that transform the way businesses operate across all industries. We aim to continuously
                            innovate and deliver secure, reliable, and user-friendly technology that enables businesses
                            to optimize their operations, reduce costs, and improve customer satisfaction.
                        </p>
                    </div>
                </div>
            </div>


            <div className="cofounders">
                <div className="story-header">
                    <h1>CO-FOUNDERS</h1>
                </div>
                <div className="gap-30 flex-wrap">
                    <div className="cofounder">
                        <Image
                            width={280}
                            height={310}
                            className="cofounderImg image"
                        />
                        <h1>Akanksha</h1>
                        <h1>Dasmohapatra</h1>
                        <h4>Chief Executive Officer</h4>
                        <div className="row">
                            <Link href=''>

                                <Image
                                    src='/Ellipse9.png'
                                    alt='Ellipse9'
                                    width={78}
                                    height={78}
                                />
                            </Link>
                            <Link href=''>

                                <Image
                                    src='/Ellipse10.png'
                                    alt='Ellipse10'
                                    width={58}
                                    height={58}
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="cofounder">
                        <Image
                            width={280}
                            height={310}
                            className="cofounderImg image"
                        />
                        <h1>Ashutosh</h1>
                        <h1>Karanam</h1>
                        <h4>Chief Product Officer</h4>
                        <div className="row">
                            <Link href=''>
                                <Image
                                    src='/Ellipse9.png'
                                    alt='Ellipse9'
                                    width={78}
                                    height={78}
                                />
                            </Link>
                            <Link href=''>
                                <Image
                                    src='/Ellipse10.png'
                                    alt='Ellipse10'
                                    width={58}
                                    height={58}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team